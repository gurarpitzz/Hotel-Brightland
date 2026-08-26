import fs from "fs";
import path from "path";
import GalleryViewer from "@/components/GalleryViewer";
import { AnimatedFadeUp } from "@/components/AnimatedWrappers";

export const metadata = {
  title: "Photo Gallery | Brightland Hotel, Shimla",
  description: "Browse our comprehensive photo gallery of Brightland Hotel in Shimla, featuring our premium rooms, multi-cuisine restaurant, and breathtaking mountain views.",
};

// Allowed hotel categories (excludes Sightseeing / Travel desk images)
const ALLOWED_HOTEL_FOLDERS = [
  "rooms",
  "restaurant",
  "terrace garden",
  "hotel building",
  "reception",
  "view from hotel",
  "views",
  "lobby",
  "dining"
];

// Recursive function to get all hotel image paths inside public/assets
function getAssetImages(dir: string, baseDir: string): string[] {
  let images: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const folderName = entry.name.toLowerCase();
      // Exclude logo and sightseeing/travel desk folders
      if (folderName !== "logo" && (ALLOWED_HOTEL_FOLDERS.some(f => folderName.includes(f)) || dir === baseDir)) {
        images = [...images, ...getAssetImages(fullPath, baseDir)];
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)) {
        // Check if parent directory path matches hotel categories
        const relativePath = fullPath.replace(baseDir, "").replace(/\\/g, "/");
        const lowerRel = relativePath.toLowerCase();
        
        // Ensure no sight seeing or travel desk images are intermixed
        if (!lowerRel.includes("sight") && !lowerRel.includes("travel") && !lowerRel.includes("shimla sights")) {
          images.push(`/assets${relativePath}`);
        }
      }
    }
  }

  return images;
}

import PageHeaderBanner from "@/components/PageHeaderBanner";

export default function GalleryPage() {
  // Read all hotel assets at request/build time
  const assetsDir = path.join(process.cwd(), "public", "assets");
  let images: string[] = [];
  
  try {
    images = getAssetImages(assetsDir, assetsDir);
    images.sort();
  } catch (error) {
    console.error("Error reading assets directory:", error);
  }

  return (
    <div 
      className="bg-[#faf8f0] bg-cover bg-top bg-no-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/longbg.png')" }}
    >
      
      <PageHeaderBanner
        tagline="Visual Journey"
        title="Photo Gallery"
        description="Take a visual tour of Brightland Hotel. We are showcasing our rooms and suites, Restaurant, Terrace Garden, mountain views from Hotel, etc."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {images.length > 0 ? (
          <GalleryViewer images={images} />
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-brand-green-100">
            <p className="text-gray-500">No images found in the gallery.</p>
          </div>
        )}
      </div>
    </div>
  );
}
