import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface LeadNotificationTemplateProps {
  email: string;
}

export function LeadNotificationTemplate({ email }: LeadNotificationTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New lead from selfstorage.help: {email}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={headerStyle}>
            <Text style={logoStyle}>selfstorage.help</Text>
          </Section>

          <Section style={contentStyle}>
            <Heading style={headingStyle}>New lead</Heading>

            <Text style={paragraphStyle}>
              Someone just dropped their email on the landing page.
            </Text>

            <div style={emailBoxStyle}>
              <Text style={emailStyle}>{email}</Text>
            </div>

            <Text style={paragraphStyle}>
              Reach out within 24 hours. That&apos;s the window where intent is highest.
            </Text>

            <Text style={signatureStyle}>selfstorage.help</Text>
          </Section>

          <Hr style={hrStyle} />

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Lead submitted via{" "}
              <Link href="https://selfstorage.help" style={linkStyle}>
                selfstorage.help
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  backgroundColor: "#f4f4f5",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "40px 0",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "560px",
  margin: "0 auto",
  overflow: "hidden",
};

const headerStyle = {
  backgroundColor: "#0a0f1e",
  padding: "20px 36px",
};

const logoStyle = {
  color: "#f97316",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "-0.5px",
};

const contentStyle = {
  padding: "36px",
};

const headingStyle = {
  color: "#0a0f1e",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 20px 0",
};

const paragraphStyle = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 14px 0",
};

const emailBoxStyle = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "14px 18px",
  margin: "20px 0",
};

const emailStyle = {
  color: "#f97316",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0",
};

const signatureStyle = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "20px 0 0 0",
};

const hrStyle = {
  borderColor: "#e5e7eb",
  margin: "0 36px",
};

const footerStyle = {
  padding: "20px 36px",
};

const footerTextStyle = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
};

const linkStyle = {
  color: "#f97316",
  textDecoration: "underline",
};
