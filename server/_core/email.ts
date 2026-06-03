import { ENV } from "./env";

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

/**
 * Sends an email using Resend email service.
 * Requires RESEND_API_KEY environment variable to be set.
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const { to, subject, html, replyTo } = payload;

  const resendApiKey = "re_Sm76zybN_FpsRHip76eXhCP9wWaHKGsNr";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "noreply@steeltoesandsecondchances.org",
        to,
        subject,
        html,
        reply_to: replyTo,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`[Email] Failed to send email: ${response.status} ${error}`);
      return false;
    }

    const result = await response.json();
    console.log(`[Email] Successfully sent email to ${to}`, result);
    return true;
  } catch (error) {
    console.error("[Email] Error sending email:", error);
    return false;
  }
}

/**
 * Sends a contact inquiry notification email to the owner.
 */
export async function sendContactInquiryEmail(inquiry: {
  name: string;
  email: string;
  phone?: string | null;
  organization?: string | null;
  inquiryType: string;
  message: string;
}): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2d5a8c;">New Contact Inquiry</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${inquiry.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${inquiry.email}">${inquiry.email}</a></p>
        ${inquiry.phone ? `<p><strong>Phone:</strong> ${inquiry.phone}</p>` : ""}
        ${inquiry.organization ? `<p><strong>Organization:</strong> ${inquiry.organization}</p>` : ""}
        <p><strong>Inquiry Type:</strong> ${inquiry.inquiryType}</p>
      </div>
      
      <div style="border-left: 4px solid #e91e8c; padding-left: 20px; margin: 20px 0;">
        <h3 style="color: #2d5a8c; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap; color: #333;">${inquiry.message}</p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">
        This is an automated email from your Steel Toes & Second Chances website. 
        Reply directly to the inquiry email address above to respond to this contact.
      </p>
    </div>
  `;

  return sendEmail({
    to: "tiffany@steeltoesandsecondchances.org",
    subject: `New ${inquiry.inquiryType} Inquiry from ${inquiry.name}`,
    html,
    replyTo: inquiry.email,
  });
}

/**
 * Sends a donation notification email to the owner.
 */
export async function sendDonationEmail(donation: {
  donorName?: string;
  donorEmail?: string;
  amount: number;
  givingLevel?: string;
  stripeSessionId: string;
}): Promise<boolean> {
  const amountInDollars = (donation.amount / 100).toFixed(2);
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2d5a8c;">New Donation Received</h2>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="font-size: 24px; color: #e91e8c; margin: 0;"><strong>$${amountInDollars}</strong></p>
        ${donation.givingLevel ? `<p style="color: #666; margin: 5px 0;"><strong>Level:</strong> ${donation.givingLevel}</p>` : ""}
        ${donation.donorName ? `<p><strong>Donor Name:</strong> ${donation.donorName}</p>` : ""}
        ${donation.donorEmail ? `<p><strong>Donor Email:</strong> <a href="mailto:${donation.donorEmail}">${donation.donorEmail}</a></p>` : ""}
        <p style="color: #999; font-size: 12px;"><strong>Session ID:</strong> ${donation.stripeSessionId}</p>
      </div>
      
      <div style="background-color: #e91e8c; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
        <p style="margin: 0; font-size: 16px;">Thank you for supporting Steel Toes & Second Chances!</p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
      <p style="color: #666; font-size: 12px;">
        This is an automated email from your Steel Toes & Second Chances website.
      </p>
    </div>
  `;

  return sendEmail({
    to: "tiffany@steeltoesandsecondchances.org",
    subject: `New Donation: $${amountInDollars}`,
    html,
  });
}
