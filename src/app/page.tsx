"use client";

import { useActionState } from "react";
import { submitEmail, initialState } from "@/actions/email";
import {
  EmailCapture,
  FinalCTA,
  Footer,
  Hero,
  HowItWorks,
  ProblemSection,
  SocialProof,
  WhatYouGet,
  WhoIsThisFor,
} from "@/components/sections";

export default function Page() {
  const [state, formAction, isPending] = useActionState(submitEmail, initialState);

  const formProps = { formAction, isPending, state };

  return (
    <main>
      <Hero {...formProps} />
      <ProblemSection />
      <WhatYouGet />
      <HowItWorks />
      <WhoIsThisFor />
      <SocialProof />
      <EmailCapture {...formProps} />
      <FinalCTA {...formProps} />
      <Footer />
    </main>
  );
}
