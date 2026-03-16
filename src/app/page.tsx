"use client";

import { useActionState } from "react";
import { submitEmail } from "@/actions/email";
import { initialState } from "@/actions/types";
import {
  EmailCapture,
  FinalCTA,
  Footer,
  Hero,
  HowItWorks,
  ProblemSection,
  SocialProof,
  VideoSection,
  WhatYouGet,
  WhoIsThisFor,
} from "@/components/sections";

export default function Page() {
  const [state, formAction, isPending] = useActionState(submitEmail, initialState);

  const formProps = { formAction, isPending, state };

  return (
    <main>
      <Hero {...formProps} />
      <VideoSection />
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
