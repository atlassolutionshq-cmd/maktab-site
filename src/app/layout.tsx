import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://maktab.one";

export const metadata: Metadata = {
  title: "Maktab One — Open-Source School Management System | Self-Hosted",
  description:
    "Maktab One is a self-hosted, open-source school management system for K-12 schools and colleges. Manage student records, fee collection, invoicing, academic sessions, staff, and guardian portals with enterprise-grade security and no vendor lock-in.",
  keywords: [
    "school management system",
    "open source school management",
    "student information system",
    "school administration software",
    "fee collection software",
    "school ERP",
    "self-hosted school management",
    "K-12 school software",
    "student records management",
    "school billing software",
  ],
  authors: [{ name: "Maktab One" }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Maktab One — Open-Source School Management System",
    description:
      "Self-hosted school management platform for student records, fee collection, academic sessions, and staff management. Enterprise security. Zero vendor lock-in.",
    url: siteUrl,
    siteName: "Maktab One",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Maktab One",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maktab One — Open-Source School Management System",
    description:
      "Self-hosted school management platform. Student records, fee collection, academic sessions, guardian portal. Enterprise-grade security.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Maktab One",
      applicationCategory: "EducationApplication",
      operatingSystem: "Linux, macOS, Windows",
      description:
        "Self-hosted, open-source school management system for K-12 schools and colleges. Features student management, fee collection and invoicing, academic session tracking, RBAC security, reports and analytics, and a guardian portal.",
      url: siteUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Open source (MIT license). Self-hosted on your infrastructure.",
      },
      author: {
        "@type": "Organization",
        name: "Maktab One",
      },
    },
    {
      "@type": "WebSite",
      name: "Maktab One",
      url: siteUrl,
      description:
        "Self-hosted, open-source school management system for K-12 schools and colleges.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      name: "Maktab One",
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@maktab.one",
        contactType: "sales",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
