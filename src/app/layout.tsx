import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faris Chtatou - Resume",
  description:
    "Professional curriculum vitae of Faris Chtatou. View experience, skills, and download the latest resume PDF.",
  openGraph: {
    title: "Faris Chtatou - Resume",
    description:
      "Professional curriculum vitae of Faris Chtatou. View experience, skills, and download the latest resume PDF.",
    url: "https://resume.chtatou.dev",
    siteName: "Faris Chtatou CV",
    images: [
      {
        url: "https://resume.chtatou.dev/og-image.png", // We might want to create this file or dynamic route
        width: 1200,
        height: 630,
        alt: "Faris Chtatou CV Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faris Chtatou - Resume",
    description:
      "Professional curriculum vitae of Faris Chtatou. View experience, skills, and download the latest resume PDF.",
    images: ["https://resume.chtatou.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
