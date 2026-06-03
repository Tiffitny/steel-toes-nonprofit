import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { stripeWebhookHandler } from "../stripe-webhook";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // CRITICAL: Stripe webhook must be registered BEFORE express.json() middleware
  // because Stripe needs the raw body for signature verification
  app.post("/api/stripe/webhook", express.raw({ type: "application/json" }), stripeWebhookHandler);

  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // REST API for Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, organization, inquiryType, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }

      const { createContactInquiry } = await import("../db");
      const { sendContactInquiryEmail } = await import("./email");
      const { notifyOwner } = await import("./notification");

      // 1. Store in DB
      await createContactInquiry({
        name,
        email,
        phone: phone || null,
        organization: organization || null,
        inquiryType: inquiryType || "general",
        message,
      });

      // 2. Send Email via Resend
      await sendContactInquiryEmail({
        name,
        email,
        phone: phone || null,
        organization: organization || null,
        inquiryType: inquiryType || "general",
        message,
      }).catch(err => console.error("Failed to send contact email:", err));

      // 3. Send fallback notification
      await notifyOwner({
        title: `New ${inquiryType || "general"} inquiry from ${name}`,
        content: `Email: ${email}\nMessage: ${message}`,
      }).catch(err => console.error("Failed to notify owner:", err));

      return res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  registerStorageProxy(app);
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
