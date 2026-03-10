import { Resend } from "resend";
import { LeadNotificationTemplate } from "@/components/templates/email-template";

export async function sendLeadNotification(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const notifyEmail =
      process.env.NOTIFY_EMAIL ?? process.env.FROM_EMAIL ?? "hello@selfstorage.help";

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL ?? "hello@selfstorage.help",
      to: [notifyEmail],
      subject: `New lead: ${email}`,
      react: LeadNotificationTemplate({ email }),
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
