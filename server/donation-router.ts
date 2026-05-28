import Stripe from "stripe";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

// Giving levels tied to concrete impact
export const GIVING_LEVELS = [
  {
    id: "gloves-glasses",
    amount: 5000, // $50 in cents
    label: "$50",
    title: "Work Gloves & Safety Glasses",
    description: "Equip one young person with the basic safety gear they need on day one.",
  },
  {
    id: "boots",
    amount: 15000, // $150 in cents
    label: "$150",
    title: "Steel Toe Boots",
    description: "Put a brand new pair of steel toe boots on a young person's feet. The thing that started it all.",
  },
  {
    id: "training",
    amount: 50000, // $500 in cents
    label: "$500",
    title: "Sponsor One Youth's Training",
    description: "Cover the cost of workforce training, certifications, and job placement support for one young person.",
  },
  {
    id: "full-program",
    amount: 100000, // $1000 in cents
    label: "$1,000",
    title: "Full Program Sponsorship",
    description: "Fund everything: boots, gear, training, mentorship, transportation, and placement for one young person.",
  },
];

export const donationRouter = router({
  getGivingLevels: publicProcedure.query(() => {
    return GIVING_LEVELS;
  }),

  createCheckoutSession: publicProcedure
    .input(
      z.object({
        amount: z.number().min(100, "Minimum donation is $1.00"), // amount in cents
        givingLevel: z.string().optional(),
        donorEmail: z.string().email().optional(),
        donorName: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const origin = ctx.req.headers.origin || ctx.req.headers.referer?.replace(/\/$/, "") || "http://localhost:3000";

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          mode: "payment",
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: input.givingLevel
                    ? `Donation: ${input.givingLevel}`
                    : "Donation to Steel Toes & Second Chances",
                  description: "Supporting youth workforce development",
                },
                unit_amount: input.amount,
              },
              quantity: 1,
            },
          ],
          metadata: {
            giving_level: input.givingLevel || "Custom amount",
            amount: input.amount.toString(),
            donor_email: input.donorEmail || "",
            donor_name: input.donorName || "",
          },
          ...(input.donorEmail ? { customer_email: input.donorEmail } : {}),
          success_url: `${origin}/donate?success=true`,
          cancel_url: `${origin}/donate?canceled=true`,
          allow_promotion_codes: true,
        });

        return {
          url: session.url,
          sessionId: session.id,
        };
      } catch (error: any) {
        console.error("[Donation] Failed to create checkout session:", error);
        throw new Error(`Failed to create checkout session: ${error.message}`);
      }
    }),
});
