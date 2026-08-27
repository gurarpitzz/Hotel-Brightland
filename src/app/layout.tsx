import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashLoader from "@/components/SplashLoader";
import FloatingContactBar from "@/components/FloatingContactBar";
import FloatingSocialBubbles from "@/components/FloatingSocialBubbles";
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

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-E13LZDQBMJ";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://brightlandhotel.com"),
  title: {
    default: "Brightland Hotel, Shimla | Official Website | Direct Booking",
    template: "%s | Brightland Hotel, Shimla",
  },
  description: "Book direct and save extra at Brightland Hotel, Shimla. Established 1959. Prime central location, 15-minute walk to The Mall, luxury rooms & suites with Himalayan valley views.",
  keywords: [
    "Brightland Hotel",
    "Brightland Hotel Shimla",
    "Hotels in Shimla",
    "Hotel near Mall Road Shimla",
    "Heritage Hotel Shimla",
    "Family Hotel Shimla",
    "Best Rates Hotel Shimla",
    "Direct Booking Hotel Shimla",
    "Shimla Hotel Parking",
    "Shimla Hotel Valley View",
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
    title: "Brightland Hotel, Shimla | Official Website | Direct Booking",
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
        alt: "Brightland Hotel Shimla - Panoramic Mountain View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightland Hotel, Shimla | Official Website",
    description: "Book direct and save extra at Brightland Hotel, Shimla. Prime central location near The Mall, luxury rooms with Himalayan valley views.",
    images: ["/assets/homebg.png"],
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
  alternates: {
    canonical: "https://brightlandhotel.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Brightland Hotel",
  "image": "https://brightlandhotel.com/assets/homebg.png",
  "@id": "https://brightlandhotel.com/#hotel",
  "url": "https://brightlandhotel.com",
  "telephone": "+91-8219200074",
  "email": "mail@brightlandhotel.com",
  "priceRange": "₹3800 - ₹8500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cart Road, Near Old ISBT",
    "addressLocality": "Shimla",
    "addressRegion": "Himachal Pradesh",
    "postalCode": "171001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.1048,
    "longitude": 77.1734
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.5"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Parking (on availability)",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free High-Speed WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "In-house Indian Restaurant",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Panoramic Himalayan Valley Views",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Travel Desk & Sightseeing Assistance",
      "value": true
    }
  ]
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NW83K79X');`,
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a2318" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NW83K79X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Providers>
          <SplashLoader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingSocialBubbles />
          <FloatingContactBar />
          <FloatingWeatherWidget />
          <BookingCart />
        </Providers>
      </body>
    </html>
  );
}
