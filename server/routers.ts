import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactInquiry } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Invalid email"),
          phone: z.string().optional(),
          organization: z.string().optional(),
          inquiryType: z.enum(["general", "training", "partnership", "employment", "donation"]),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createContactInquiry({
            name: input.name,
            email: input.email,
            phone: input.phone || null,
            organization: input.organization || null,
            inquiryType: input.inquiryType,
            message: input.message,
          });

          // Notify the owner about the new inquiry
          await notifyOwner({
            title: `New ${input.inquiryType} inquiry from ${input.name}`,
            content: `Email: ${input.email}\nOrganization: ${input.organization || "N/A"}\nMessage: ${input.message}`,
          }).catch(err => console.error("Failed to notify owner:", err));

          return {
            success: true,
            message: "Thank you for your inquiry. We will get back to you soon!",
          };
        } catch (error) {
          console.error("Failed to submit contact inquiry:", error);
          throw new Error("Failed to submit inquiry. Please try again later.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
