import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashLoader from "@/components/SplashLoader";
import FloatingContactBar from "@/components/FloatingContactBar";
import FloatingWeatherWidget from "@/components/FloatingWeatherWidget";
import Providers from "@/components/Providers";
import BookingCart from "@/components/BookingCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brightland Hotel, Shimla | Official Website",
  description: "Book direct and save up to 15%. Brightland Hotel offers prime Shimla location, family-friendly rooms with mountain views, and easy access to local attractions.",
  icons: {
    icon: "/assets/logo/logo.png",
    shortcut: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo.png" />
        <link rel="preload" as="image" href="/assets/logo/logo.png" />
      </head>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <Providers>
          <SplashLoader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContactBar />
          <FloatingWeatherWidget />
          <BookingCart />
        </Providers>
      </body>
    </html>
  );
}
