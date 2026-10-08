import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { Chatbot } from "@/components/ui/Chatbot";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-RH9WSHF53S";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  title: {
    // ~48 chars — topic first, brand after (SERP-safe length)
    default: "HR Outsourcing & Career Solutions | Kawaii HR",
    template: "%s | Kawaii HR",
  },
  description:
    "Japanese-standard HR outsourcing and career solutions in Bangladesh. Recruitment, staffing & executive search — Kawaii HR.",
  keywords: [
    // Primary brand + user targets
    "HR Outsourcing",
    "Career Outsourcing",
    "HR Solutions",
    "Kawaii HR",
    "Kawaii Japan HR Solutions",
    "Career Solutions",
    "Kawaii Japan Career & HR Solutions",
    "Kawaii Japan Career",
    "Kawaii Career",
    "Kawaii Group",
    // Core service intent
    "HR Outsourcing Bangladesh",
    "HR Outsourcing Dhaka",
    "Career Outsourcing Bangladesh",
    "Career Solutions Bangladesh",
    "HR Solutions Bangladesh",
    "HR Solutions Dhaka",
    "Recruitment Agency Bangladesh",
    "Recruitment Agency Dhaka",
    "Talent Acquisition Bangladesh",
    "Executive Search Bangladesh",
    "Executive Search Dhaka",
    "Staffing Solutions Bangladesh",
    "Corporate Staffing Bangladesh",
    "Manpower Supply Bangladesh",
    "Job Placement Bangladesh",
    "Career Matching Bangladesh",
    "Career Matching Dhaka",
    "HR Consulting Bangladesh",
    "HR Consulting Dhaka",
    "RPO Bangladesh",
    "BPO Recruitment Bangladesh",
    "PEO EOR Bangladesh",
    "Managed Payroll Bangladesh",
    // Japan–BD niche
    "Japanese Recruitment Agency",
    "Japan Bangladesh HR Solutions",
    "Japan Bangladesh Recruitment",
    "Japanese HR Company Bangladesh",
    "Japanese Work Ethics",
    "IT Recruitment Bangladesh",
    "Talent Acquisition Tokyo Dhaka",
    "White Collar Recruitment Bangladesh",
    "Blue Collar Manpower Bangladesh",
    "Corporate HR Partner Bangladesh",
  ],
  authors: [{ name: "Kawaii Japan Career & HR Solutions BD" }],
  creator: "Kawaii Group",
  publisher: "Kawaii Japan Career & HR Solutions BD",
  metadataBase: new URL("https://www.kawaiicareer.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HR Outsourcing & Career Solutions | Kawaii HR",
    description:
      "Japanese-standard HR outsourcing and career solutions in Bangladesh. Recruitment, staffing & executive search.",
    url: "https://www.kawaiicareer.com",
    siteName: "Kawaii HR",
    images: [
      {
        url: "/images/japanese_office_team.jpg",
        width: 1200,
        height: 630,
        alt: "Kawaii HR — HR outsourcing and career solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Outsourcing & Career Solutions | Kawaii HR",
    description:
      "Japanese-standard HR outsourcing and career solutions in Bangladesh.",
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
    "@graph": [
      {
        "@type": ["Organization", "EmploymentAgency"],
        "@id": "https://www.kawaiicareer.com/#organization",
        name: "Kawaii Japan Career & HR Solutions BD",
        alternateName: [
          "Kawaii HR",
          "Kawaii Japan HR",
          "Kawaii Japan HR Solutions",
          "Kawaii Career",
          "Kawaii Japan Career",
        ],
        url: "https://www.kawaiicareer.com",
        logo: "https://www.kawaiicareer.com/images/japanese_office_team.jpg",
        image: "https://www.kawaiicareer.com/images/japanese_office_team.jpg",
        description:
          "Japanese-standard HR outsourcing, career solutions, recruitment, staffing, and executive search in Bangladesh.",
        foundingDate: "2025",
        email: "corporate@kawaiihr.com",
        telephone: "+8801711000000",
        knowsAbout: [
          "HR Outsourcing",
          "Career Outsourcing",
          "HR Solutions",
          "Career Solutions",
          "Recruitment",
          "Talent Acquisition",
          "Executive Search",
          "Staffing",
        ],
        areaServed: [
          { "@type": "Country", name: "Bangladesh" },
          { "@type": "Country", name: "Japan" },
        ],
        founders: [
          {
            "@type": "Person",
            name: "MD. Dewan Samir",
            jobTitle: "Chairman",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "House: 11 (2nd Floor), Block: B, Main Road, Banasree, Rampura",
          addressLocality: "Dhaka",
          addressRegion: "Dhaka",
          postalCode: "1219",
          addressCountry: "BD",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+8801711000000",
            email: "corporate@kawaiihr.com",
            contactType: "customer service",
            areaServed: ["BD", "JP"],
            availableLanguage: ["English", "Bengali", "Japanese"],
          },
        ],
        sameAs: ["https://www.kawaiicareer.com"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.kawaiicareer.com/#localbusiness",
        name: "Kawaii HR",
        image: "https://www.kawaiicareer.com/images/japanese_office_team.jpg",
        url: "https://www.kawaiicareer.com",
        telephone: "+8801711000000",
        email: "corporate@kawaiihr.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "House: 11 (2nd Floor), Block: B, Main Road, Banasree, Rampura",
          addressLocality: "Dhaka",
          addressRegion: "Dhaka",
          postalCode: "1219",
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.7615,
          longitude: 90.4332,
        },
        parentOrganization: {
          "@id": "https://www.kawaiicareer.com/#organization",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.kawaiicareer.com/#website",
        url: "https://www.kawaiicareer.com",
        name: "Kawaii HR",
        publisher: { "@id": "https://www.kawaiicareer.com/#organization" },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" className={`${jost.variable} ${jost.className} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#A71728] selection:text-white flex flex-col overflow-x-hidden">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <AuthProvider>
          {children}
          <Chatbot />
        </AuthProvider>
      </body>
    </html>
  );
}

