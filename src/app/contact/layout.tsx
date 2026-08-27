import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Location Map | Brightland Hotel, Shimla",
  description: "Contact front desk directly via WhatsApp (+91-8219200074) or phone for instant room reservations. Prime central location 15 mins walk to The Mall, Shimla.",
  alternates: {
    canonical: "https://brightlandhotel.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
