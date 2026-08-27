import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Policies & Booking Guidelines | Brightland Hotel, Shimla",
  description: "Read guest check-in/out policies, payment, cancellation, and guest guidelines at Brightland Hotel, Shimla.",
  alternates: {
    canonical: "https://brightlandhotel.com/policy",
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
