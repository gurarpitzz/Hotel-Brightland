import os
from PIL import Image

def optimize_images(directory, max_width=1920, quality=75):
    supported_formats = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
    
    total_saved = 0
    count = 0

    for root, _, files in os.walk(directory):
        for file in files:
            ext = os.path.splitext(file)[1]
            if ext in supported_formats:
                filepath = os.path.join(root, file)
                try:
                    original_size = os.path.getsize(filepath)
                    
                    with Image.open(filepath) as img:
                        # Convert to RGB if necessary (e.g. RGBA pngs being saved as JPEG)
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        
                        # Resize if too large
                        if img.width > max_width:
                            ratio = max_width / float(img.width)
                            new_height = int(float(img.height) * float(ratio))
                            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save optimized version in place
                        img.save(filepath, optimize=True, quality=quality)
                    
                    new_size = os.path.getsize(filepath)
                    saved = original_size - new_size
                    if saved > 0:
                        total_saved += saved
                        count += 1
                        print(f"Optimized: {file} - Saved {saved / 1024 / 1024:.2f} MB")
                except Exception as e:
                    print(f"Failed to optimize {file}: {e}")

    print(f"\nOptimization Complete!")
    print(f"Total files optimized: {count}")
    print(f"Total space saved: {total_saved / 1024 / 1024:.2f} MB")

if __name__ == "__main__":
    assets_dir = os.path.join(os.path.dirname(__file__), "public", "assets")
    if os.path.exists(assets_dir):
        print(f"Starting optimization in {assets_dir}...")
        optimize_images(assets_dir)
    else:
        print(f"Directory not found: {assets_dir}")
