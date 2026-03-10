"use server";

import { sendLeadNotification } from "@/lib/email";

export interface FormState {
  status: "idle" | "success" | "error";
  message: string;
}

export const initialState: FormState = {
  status: "idle",
  message: "",
};

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
    message: "We've got your email. Expect to hear from us within 24 hours.",
  };
}
