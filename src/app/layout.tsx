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
  title: "Maktab One - School Management Software | Run Your School Your Way",
  description:
    "Maktab One is school management software built for K-10 schools and colleges. Automate fee collection, track student records, manage staff access, and keep parents informed - all on your own servers with complete data privacy.",
  keywords: [
    "school management software",
    "school administration system",
    "student record management",
    "fee collection software for schools",
    "school management system Pakistan",
    "school ERP system",
    "school data management",
    "K-10 school software",
    "private school management software",
    "school billing and invoicing",
  ],
  authors: [{ name: "Maktab One" }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Maktab One - School Management Software for Modern Schools",
    description:
      "Automate fee collection, manage student records, and keep parents informed. Self-hosted school management software with no vendor lock-in and complete data privacy.",
    url: siteUrl,
    siteName: "Maktab One",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Maktab One school management software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maktab One - School Management Software",
    description:
      "Automate fee collection, manage student records, keep parents informed. Self-hosted school management software with complete data privacy.",
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
        "A self-hosted school management system for K-10 schools and colleges. Manage student records, automate fee collection, track academics, control staff access, generate reports, and provide parents a dedicated portal - all while keeping your data on your own servers.",
      url: siteUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free and open-source. Install on your own servers with no licensing fees.",
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
        "School management software for K-10 schools and colleges. Automate fee collection, manage student records, and keep parents informed - all self-hosted with complete data privacy.",
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
