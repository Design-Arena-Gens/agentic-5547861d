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

export const metadata: Metadata = {
  title: "Lueur des Collines",
  description:
    "Voyage sensoriel et interactif inspiré de la phrase Encore à des lieues à travers les collines, pourtant il la sentait, il sentait la corruption tordue.",
  keywords: [
    "littérature",
    "poésie",
    "expérience immersive",
    "histoire interactive",
  ],
  openGraph: {
    title: "Lueur des Collines",
    description:
      "Un récit interactif qui capture la sensation d'une corruption lointaine, pourtant palpable.",
    url: "https://agentic-5547861d.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lueur des Collines",
    description:
      "Immersion narrative dans la sensation d'une corruption lointaine, mais omniprésente.",
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
      </body>
    </html>
  );
}
