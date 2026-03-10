import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Self Storage Growth | More Calls, Fuller Units | selfstorage.help",
  description:
    "We help self storage businesses across the USA rank above their competitors and generate more calls — without ad spend. Sustained organic growth built for storage facility owners.",
  metadataBase: new URL("https://selfstorage.help"),
  keywords: [
    "self storage marketing",
    "storage facility lead generation",
    "self storage organic growth",
    "storage unit local ranking",
    "self storage more calls",
    "storage facility occupancy growth",
    "self storage digital marketing USA",
  ],
  openGraph: {
    type: "website",
    url: "https://selfstorage.help",
    title: "Self Storage Growth | More Calls, Fuller Units | selfstorage.help",
    description:
      "Organic growth for self storage businesses in the US. More calls, higher occupancy, zero ad spend dependency.",
    siteName: "selfstorage.help",
    images: [
      {
        url: "https://selfstorage.help/og-image.png",
        width: 1200,
        height: 630,
        alt: "selfstorage.help — Organic Growth for Self Storage Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Storage Growth | More Calls, Fuller Units",
    description:
      "We help independent storage facility owners generate more calls and fill units organically — without running ads.",
    images: ["https://selfstorage.help/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "selfstorage.help",
  description:
    "SEO and digital marketing consulting exclusively for self storage businesses. We help facility owners rank higher on Google and get more customers.",
  url: "https://selfstorage.help",
  serviceType: "SEO Consulting",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Self Storage SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Self Storage Local SEO",
          description:
            "Rank in Google local pack and organic results for self storage keywords",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Business Profile Optimization for Storage Facilities",
          description:
            "Optimize your GBP listing to appear for high-intent storage searches",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
