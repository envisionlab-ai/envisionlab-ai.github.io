import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

// Default metadata that will be used as fallback for pages that don't define their own
export const metadata: Metadata = {
  metadataBase: new URL("https://envisionlab.com"),
  title: {
    default: "Envision Lab - Your Leading Generative AI Implementor",
    template: "%s | Envision Lab",
  },
  description:
    "Envision Lab provides Generative AI implementation, IT & Business Consulting, and Customized Software Solutions for businesses.",
  keywords: [
    "Generative AI",
    "AI Implementation",
    "Business Consulting",
    "AI Solutions",
    "Custom Software",
    "Machine Learning",
  ],
  authors: [{ name: "Envision Lab Team" }],
  creator: "Envision Lab",
  publisher: "Envision Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://envisionlab.com",
    siteName: "Envision Lab",
    title: "Envision Lab - Your Leading Generative AI Implementor",
    description: "Transform your business with cutting-edge AI solutions tailored to your specific needs and goals.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Envision Lab - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envision Lab - Your Leading Generative AI Implementor",
    description: "Transform your business with cutting-edge AI solutions tailored to your specific needs and goals.",
    images: ["/og-image.png"],
    creator: "@envisionlab",
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
    // Add your verification codes when you have them
    google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  alternates: {
    canonical: "https://envisionlab.com",
    languages: {
      "en-US": "https://envisionlab.com",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

