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
  title: "Fill Your Units. Own Google. | selfstorage.help",
  description:
    "Every month, 130,000+ Americans search for storage units. We get independent US operators into the Google Maps top 3 so your phone rings without ad spend. Starts with a $100 audit.",
  metadataBase: new URL("https://selfstorage.help"),
  keywords: [
    "self storage Google Maps ranking",
    "storage facility local SEO",
    "self storage Map Pack",
    "storage unit Google Business Profile",
    "fill storage units organically",
    "self storage occupancy growth",
    "self storage digital marketing USA",
  ],
  openGraph: {
    type: "website",
    url: "https://selfstorage.help",
    title: "Fill Your Units. Own Google. | selfstorage.help",
    description:
      "Get your storage facility into the Google Maps top 3. More calls, fuller units, zero ad spend dependency. Starts with a $100 audit.",
    siteName: "selfstorage.help",
    images: [
      {
        url: "https://selfstorage.help/og-image.png",
        width: 1200,
        height: 630,
        alt: "selfstorage.help. Fill Your Units. Own Google.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fill Your Units. Own Google. | selfstorage.help",
    description:
      "Get your US storage facility into the Google Maps top 3. Starts with a $100 audit. Keep the report either way.",
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
