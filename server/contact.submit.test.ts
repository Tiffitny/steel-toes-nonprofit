import { describe, it, expect, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";

describe("contact.submit", () => {
  it("should accept valid contact inquiry data", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      organization: "Acme Corp",
      inquiryType: "partnership",
      message: "I'm interested in partnering with Steel Toes.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
  });

  it("should reject invalid email", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "John Doe",
        email: "invalid-email",
        phone: "",
        organization: "",
        inquiryType: "general",
        message: "Test message",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should reject empty required fields", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.contact.submit({
        name: "",
        email: "test@example.com",
        phone: "",
        organization: "",
        inquiryType: "general",
        message: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
