import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xtyletechnology.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xtyle Technology",
    template: "%s | Xtyle Technology",
  },
  description:
    "Xtyle Technology provides Web Development, E-commerce Development, SEO, AI Solutions, UI/UX Design and Custom Software Development.",
  keywords: [
    "Xtyle Technology",
    "Web Development",
    "Website Design",
    "Software Development",
    "AI Solutions",
    "SEO Services",
    "Digital Marketing",
    "E-commerce Development",
    "Darbhanga",
    "Bihar",
    "India",
  ],
  authors: [{ name: "Xtyle Technology", url: siteUrl }],
  creator: "Xtyle Technology",
  publisher: "Xtyle Technology",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Xtyle Technology",
    description:
      "Professional Web Development, E-commerce, SEO and AI Solutions.",
    url: siteUrl,
    siteName: "Xtyle Technology",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Xtyle Technology Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtyle Technology",
    description: "Professional Web Development, SEO and AI Solutions.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // Uncomment and add real codes once you have them:
  // verification: {
  //   google: "your-google-site-verification-code",
  // },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xtyle Technology",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    "Web Development, E-commerce Development, SEO, AI Solutions and Custom Software Development.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Darbhanga",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/xtyletechnology",
    "https://www.instagram.com/xtyletechnology",
    "https://www.facebook.com/xtyletechnology",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
