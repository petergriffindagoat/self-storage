import {
  Body,
  Button,
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

interface LeadWelcomeTemplateProps {
  paymentLink: string;
}

export function LeadWelcomeTemplate({ paymentLink }: LeadWelcomeTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>We help self storage facilities rank #1 on Google — without ad spend</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={headerStyle}>
            <Text style={logoStyle}>selfstorage.help</Text>
          </Section>

          <Section style={contentStyle}>
            <Heading style={headingStyle}>
              We get your facility to the top of Google — organically.
            </Heading>

            <Text style={paragraphStyle}>
              Hi there,
            </Text>

            <Text style={paragraphStyle}>
              Thanks for reaching out. At <strong>selfstorage.help</strong>, we specialize in
              SEO for self storage companies across the US — helping facilities like yours rank
              above competitors in local search, so your phone rings and your units stay full.
            </Text>

            <Text style={paragraphStyle}>
              Here&apos;s what we do for you:
            </Text>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <strong>Local SEO</strong> — rank for &quot;self storage near me&quot; in your specific market
              </li>
              <li style={listItemStyle}>
                <strong>Google Business Profile optimization</strong> — show up in the map pack above your competitors
              </li>
              <li style={listItemStyle}>
                <strong>Content strategy</strong> — pages that attract high-intent renters actively searching for storage
              </li>
              <li style={listItemStyle}>
                <strong>Ongoing growth</strong> — unlike ads, organic rankings compound over time and keep delivering
              </li>
            </ul>

            <Text style={paragraphStyle}>
              No ad spend. No agency retainers that drain your budget every month.
              Just consistent, compounding organic growth that fills your units.
            </Text>

            <Text style={paragraphStyle}>
              Ready to get started? Click below to make your payment and we&apos;ll
              kick off your SEO campaign within 24 hours.
            </Text>

            <Section style={buttonContainerStyle}>
              <Button href={paymentLink} style={buttonStyle}>
                Get Started — Make Payment →
              </Button>
            </Section>

            <Text style={paragraphStyle}>
              Have questions first? Just reply to this email — we&apos;re happy to chat.
            </Text>

            <Text style={signatureStyle}>
              — The team at selfstorage.help
            </Text>
          </Section>

          <Hr style={hrStyle} />

          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              You&apos;re receiving this because you submitted your email at{" "}
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
  lineHeight: "1.3",
};

const paragraphStyle = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 14px 0",
};

const listStyle = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
  paddingLeft: "20px",
};

const listItemStyle = {
  marginBottom: "10px",
};

const buttonContainerStyle = {
  textAlign: "center" as const,
  margin: "28px 0",
};

const buttonStyle = {
  backgroundColor: "#f97316",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  padding: "14px 28px",
  textDecoration: "none",
  display: "inline-block",
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
