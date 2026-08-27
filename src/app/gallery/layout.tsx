import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery & Panoramic Valley Views | Brightland Hotel, Shimla",
  description: "Browse photo gallery of Brightland Hotel, Shimla featuring heritage architecture, valley view rooms, terrace gardens, and Himalayan sunsets.",
  alternates: {
    canonical: "https://brightlandhotel.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
