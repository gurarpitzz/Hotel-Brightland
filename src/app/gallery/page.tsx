import fs from "fs";
import path from "path";
import GalleryViewer from "@/components/GalleryViewer";

export const metadata = {
  title: "Photo Gallery | Brightland Hotel, Shimla",
  description: "Browse our comprehensive photo gallery of Brightland Hotel in Shimla, featuring our premium rooms, multi-cuisine restaurant, and breathtaking mountain views.",
};

// Recursive function to get all image paths inside public/assets
function getAssetImages(dir: string, baseDir: string): string[] {
  let images: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() !== "logo") {
        images = [...images, ...getAssetImages(fullPath, baseDir)];
      }
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)) {
        // We only want the relative URL path starting from /assets/
        const relativePath = fullPath.replace(baseDir, "").replace(/\\/g, "/");
        images.push(`/assets${relativePath}`);
      }
    }
  }

  return images;
}

export default function GalleryPage() {
  // Read all assets at request/build time
  const assetsDir = path.join(process.cwd(), "public", "assets");
  let images: string[] = [];
  
  try {
    images = getAssetImages(assetsDir, assetsDir);
    // Sort to keep folders somewhat grouped
    images.sort();
  } catch (error) {
    console.error("Error reading assets directory:", error);
  }

  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-6 font-cursive tracking-wider">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of Brightland Hotel. We currently have {images.length} photos showcasing our rooms, facilities, and beautiful surroundings.
          </p>
        </div>

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
