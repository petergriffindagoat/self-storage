"use server";

import { sendLeadNotification } from "@/lib/email";
import type { FormState } from "./types";

export async function submitEmail(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email");

  if (typeof email !== "string" || !email.trim()) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const result = await sendLeadNotification(email.trim());

  if (!result.success) {
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    };
  }

  return {
    status: "success",
    message: "Check your inbox! We've sent you everything you need to get started.",
  };
}
