import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Brightland Hotel, Shimla",
  description: "Terms and conditions for room reservations, website usage, and stay policies at Brightland Hotel, Shimla.",
  alternates: {
    canonical: "https://brightlandhotel.com/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
