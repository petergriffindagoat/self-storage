import { Resend } from "resend";
import { LeadNotificationTemplate } from "@/components/templates/email-template";
import { LeadWelcomeTemplate } from "@/components/templates/lead-welcome-template";

export async function sendLeadNotification(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.FROM_EMAIL ?? "hello@selfstorage.help";
    const notifyEmail = process.env.NOTIFY_EMAIL ?? fromEmail;
    const paymentLink = process.env.PAYMENT_LINK ?? "#";

    // Send notification to ourselves
    await resend.emails.send({
      from: fromEmail,
      to: [notifyEmail],
      subject: `New lead: ${email}`,
      react: LeadNotificationTemplate({ email }),
    });

    // Send welcome + pitch email to the lead
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We help self storage facilities rank #1 on Google. Here's how.",
      react: LeadWelcomeTemplate({ paymentLink }),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error occurred";
    return { success: false, error: message };
  }
}
