import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Desk & Sightseeing Itineraries | Brightland Hotel, Shimla",
  description: "Plan local Shimla tours, heritage walks, toy train rides, and excursions to Kufri, Naldehra, Chail, and Manali with Brightland Hotel's Travel Desk.",
  alternates: {
    canonical: "https://brightlandhotel.com/travel-desk",
  },
};

export default function TravelDeskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
