import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kawaii Japan Career & HR Solutions BD | Career & HR Solutions",
  description:
    "Kawaii Japan Career & HR Solutions BD connects organizations with the right talent through reliable recruitment, staffing, career matching and Japanese-inspired HR solutions.",
  keywords: [
    "Kawaii Japan",
    "Kawaii Group",
    "Japan Bangladesh HR Solutions",
    "Executive Search Bangladesh",
    "Japanese Recruitment Agency",
    "Corporate Staffing",
    "Career Matching Dhaka",
    "Japanese Work Ethics",
    "IT Recruitment Bangladesh",
    "Talent Acquisition Tokyo Dhaka",
  ],
  authors: [{ name: "Kawaii Japan Career & HR Solutions BD" }],
  creator: "Kawaii Group",
  publisher: "Kawaii Japan Career & HR Solutions BD",
  metadataBase: new URL("https://kawaiijapan-hr.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kawaii Japan Career & HR Solutions BD | Career & HR Solutions",
    description:
      "Connecting organizations with the right people through Japanese-inspired ethics, discipline, efficiency and trust. Japan-Bangladesh Career & HR Solutions.",
    url: "https://kawaiijapan-hr.com",
    siteName: "Kawaii Japan Career & HR Solutions BD",
    images: [
      {
        url: "/images/japanese_office_team.jpg",
        width: 1200,
        height: 630,
        alt: "Kawaii Japan Career & HR Solutions BD - Executive Boardroom",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawaii Japan Career & HR Solutions BD",
    description:
      "Japan-Bangladesh bilateral career matching and corporate HR solutions.",
    images: ["/images/japanese_office_team.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kawaii Japan Career & HR Solutions BD",
    alternateName: "Kawaii Japan HR",
    url: "https://kawaiijapan-hr.com",
    logo: "https://kawaiijapan-hr.com/images/japanese_office_team.jpg",
    description:
      "A Japan-Bangladesh joint venture and sister concern of Kawaii Group providing career matching, staffing, and corporate HR solutions.",
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "MD. Dewan Samir",
        jobTitle: "Chairman",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "House: 11 (2nd Floor), Block: B, Main Road, Banasree, Rampura",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  };

  return (
    <html lang="en" className={`${jost.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#A71728] selection:text-white flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

