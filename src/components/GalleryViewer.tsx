"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Grid, Presentation, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export default function GalleryViewer({ images }: { images: string[] }) {
  const [viewMode, setViewMode] = useState<"collage" | "slideshow">("collage");
  
  // Fullscreen Modal State
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Slideshow State
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full">
      {/* View Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white p-1.5 rounded-full inline-flex border border-brand-green-100 shadow-sm">
          <button
            onClick={() => setViewMode("collage")}
            className={`flex items-center px-6 py-2.5 rounded-full font-semibold transition-all ${
              viewMode === "collage"
                ? "bg-brand-green-700 text-white shadow-md"
                : "text-gray-500 hover:text-brand-green-700 hover:bg-brand-yellow-50"
            }`}
          >
            <Grid size={18} className="mr-2" />
            Collage Grid
          </button>
          <button
            onClick={() => setViewMode("slideshow")}
            className={`flex items-center px-6 py-2.5 rounded-full font-semibold transition-all ${
              viewMode === "slideshow"
                ? "bg-brand-green-700 text-white shadow-md"
                : "text-gray-500 hover:text-brand-green-700 hover:bg-brand-yellow-50"
            }`}
          >
            <Presentation size={18} className="mr-2" />
            Slideshow
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "collage" ? (
          <motion.div
            key="collage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImageIndex(idx)}
              >
                <div className="relative w-full pb-[100%]"> {/* Placeholder aspect ratio, Next/Image will fill */}
                   <Image
                      src={src}
                      alt={`Brightland Hotel Gallery Image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="slideshow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {images.map((src, idx) => (
                    <div className="relative flex-[0_0_100%] min-w-0 h-[50vh] md:h-[70vh]" key={idx}>
                      <Image
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Chevrons */}
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-brand-green-700/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-brand-green-700/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <ChevronRight size={32} />
              </button>

              {/* Progress Bar / Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4 flex-wrap gap-1">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === selectedIndex ? "w-8 bg-brand-yellow-100" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-6 text-gray-500 font-medium tracking-wide">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox for Collage Mode */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-brand-yellow-100 p-2 bg-white/10 rounded-full transition-colors z-50"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={() => setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-brand-yellow-100 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={() => setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-brand-yellow-100 p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            <div className="relative w-full max-w-6xl h-[85vh]">
              <Image
                src={images[selectedImageIndex]}
                alt={`Lightbox Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase">
              {selectedImageIndex + 1} OF {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
