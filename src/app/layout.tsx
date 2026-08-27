import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
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

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightlandhotel.com"),
  title: "Brightland Hotel, Shimla | Official Website",
  description: "Book direct and save extra at Brightland Hotel, Shimla. Prime central location, 15-minute walk to The Mall, family-friendly rooms with Himalayan valley views.",
  keywords: [
    "Brightland Hotel",
    "Brightland Hotel Shimla",
    "Hotels in Shimla",
    "Hotel near Mall Road Shimla",
    "Heritage Hotel Shimla",
    "Family Hotel Shimla",
    "Best Rates Hotel Shimla",
    "Direct Booking Hotel Shimla",
  ],
  authors: [{ name: "Brightland Hotel Shimla" }],
  creator: "Brightland Hotel",
  publisher: "Brightland Hotel",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/assets/logo/logo.png",
    shortcut: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Brightland Hotel, Shimla | Official Website",
    description: "Book direct and save extra at Brightland Hotel, Shimla. Prime central location near The Mall, luxury rooms with Himalayan valley views.",
    url: "https://brightlandhotel.com",
    siteName: "Brightland Hotel Shimla",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/homebg.png",
        width: 1200,
        height: 630,
        alt: "Brightland Hotel Shimla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightland Hotel, Shimla | Official Website",
    description: "Book direct and save extra at Brightland Hotel, Shimla. Prime central location near The Mall, luxury rooms with Himalayan valley views.",
    images: ["/assets/homebg.png"],
  },
  alternates: {
    canonical: "https://brightlandhotel.com",
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
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a2318" />
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
