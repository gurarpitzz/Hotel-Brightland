import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities & In-House Dining | Brightland Hotel, Shimla",
  description: "Experience authentic Indian cuisine, high-speed WiFi, free parking (on availability), and lush terrace garden at Brightland Hotel, Shimla.",
  alternates: {
    canonical: "https://brightlandhotel.com/facilities",
  },
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
