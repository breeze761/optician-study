import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "OpticianStudy - ABO & NCLE Exam Prep | #1 Optician Certification Training",
    template: "%s | OpticianStudy"
  },
  description: "Pass your ABO and NCLE certification exams with confidence. Comprehensive optician training with 52 chapters, 300+ lessons, 500+ practice questions. First chapter free.",
  keywords: "optician certification, ABO exam, NCLE exam, optician training, optical career, eyewear dispensing, optician study guide, how to become an optician, optician school, ABO practice test, NCLE practice test",
  authors: [{ name: "OpticianStudy" }],
  creator: "OpticianStudy",
  publisher: "OpticianStudy",
  metadataBase: new URL("https://opticianstudy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opticianstudy.com",
    siteName: "OpticianStudy",
    title: "OpticianStudy - ABO & NCLE Exam Prep",
    description: "Pass your ABO and NCLE certification exams with confidence. Comprehensive optician training with interactive lessons and practice questions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpticianStudy - Optician Certification Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpticianStudy - ABO & NCLE Exam Prep",
    description: "Pass your ABO and NCLE certification exams with confidence.",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OpticianStudy",
  url: "https://opticianstudy.com",
  logo: "https://opticianstudy.com/logo.png",
  description: "Online optician certification training for ABO and NCLE exams",
  foundingDate: "2024",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@opticianstudy.com",
  },
};

// JSON-LD Schema for Website
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OpticianStudy",
  url: "https://opticianstudy.com",
  description: "ABO and NCLE exam preparation and optician certification training",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://opticianstudy.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD Schema for Educational Organization
const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "OpticianStudy",
  url: "https://opticianstudy.com",
  description: "Online optician certification training program",
  areaServed: "Worldwide",
  educationalCredentialAwarded: "Certificate of Completion",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ABO Exam Preparation",
      credentialCategory: "Certificate",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "NCLE Exam Preparation",
      credentialCategory: "Certificate",
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
