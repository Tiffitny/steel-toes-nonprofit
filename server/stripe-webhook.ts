import Stripe from "stripe";
import { Request, Response } from "express";
import { createDonation } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendDonationEmail } from "./_core/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function stripeWebhookHandler(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    console.error("[Webhook] Missing signature or webhook secret");
    return res.status(400).json({ error: "Missing signature or webhook secret" });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error("[Webhook] Signature verification failed:", err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // CRITICAL: Handle test events for webhook verification
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected, returning verification response");
    return res.json({
      verified: true,
    });
  }

  console.log(`[Webhook] Received event: ${event.type} (${event.id})`);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // Record the donation
        await createDonation({
          stripeSessionId: session.id,
          stripePaymentIntentId: (session.payment_intent as string) || null,
          amount: session.amount_total || 0,
          currency: session.currency || "usd",
          donorEmail: session.customer_details?.email || session.metadata?.donor_email || null,
          donorName: session.customer_details?.name || session.metadata?.donor_name || null,
          givingLevel: session.metadata?.giving_level || null,
          status: "completed",
        });

        // Notify the owner about the donation
        const amountFormatted = ((session.amount_total || 0) / 100).toFixed(2);
        const donorName = session.customer_details?.name || "Anonymous";
        const givingLevel = session.metadata?.giving_level || "Custom amount";

        // Send email notification to owner
        await sendDonationEmail({
          donorName: session.customer_details?.name || session.metadata?.donor_name || undefined,
          donorEmail: session.customer_details?.email || session.metadata?.donor_email || undefined,
          amount: session.amount_total || 0,
          givingLevel: session.metadata?.giving_level || undefined,
          stripeSessionId: session.id,
        }).catch((err) => console.error("[Webhook] Failed to send donation email:", err));

        // Also notify via Manus notification service as fallback
        await notifyOwner({
          title: `New donation: $${amountFormatted} from ${donorName}`,
          content: `Giving level: ${givingLevel}\nEmail: ${session.customer_details?.email || "N/A"}\nSession: ${session.id}`,
        }).catch((err) => console.error("[Webhook] Failed to notify owner:", err));

        console.log(`[Webhook] Donation recorded: $${amountFormatted} from ${donorName}`);
        break;
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error("[Webhook] Error processing event:", error);
    // Still return 200 to acknowledge receipt
  }

  return res.json({ received: true });
}
