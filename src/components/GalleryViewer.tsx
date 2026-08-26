"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Grid, Presentation, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export default function GalleryViewer({ images }: { images: string[] }) {
  const [viewMode, setViewMode] = useState<"collage" | "slideshow">("collage");
  
  // Fullscreen Lightbox State
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Slideshow State
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayPlugin.current]
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
      {/* View Toggle Bar */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#faf8f0] p-1.5 rounded-full inline-flex border border-[#c9a227]/35 shadow-md">
          <button
            onClick={() => setViewMode("collage")}
            className={`flex items-center px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all ${
              viewMode === "collage"
                ? "bg-brand-green-900 text-brand-yellow-50 shadow-md border border-[#c9a227]/40"
                : "text-brand-green-900/70 hover:text-brand-green-950 hover:bg-[#c9a227]/10"
            }`}
          >
            <Grid size={16} className="mr-2 text-[#c9a227]" />
            Collage Grid
          </button>
          <button
            onClick={() => setViewMode("slideshow")}
            className={`flex items-center px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all ${
              viewMode === "slideshow"
                ? "bg-brand-green-900 text-brand-yellow-50 shadow-md border border-[#c9a227]/40"
                : "text-brand-green-900/70 hover:text-brand-green-950 hover:bg-[#c9a227]/10"
            }`}
          >
            <Presentation size={16} className="mr-2 text-[#c9a227]" />
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
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          >
            {images.map((src, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative break-inside-avoid bg-[#faf8f0] p-3 rounded-md shadow-lg border border-[#c9a227]/35 hover:border-[#c9a227] hover:shadow-xl overflow-hidden cursor-pointer group transition-all duration-300"
                onClick={() => setSelectedImageIndex(idx)}
              >
                <div className="relative w-full pb-[100%] rounded overflow-hidden">
                   <Image
                      src={src}
                      alt={`Brightland Hotel Gallery Image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-brand-green-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                     <div className="w-10 h-10 rounded-full bg-brand-green-950/80 border border-[#c9a227]/60 flex items-center justify-center text-[#c9a227] shadow-md">
                       <ZoomIn className="w-5 h-5" />
                     </div>
                   </div>
                </div>
              </motion.div>
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
            {/* Slideshow Container with solid cream heritage card background matching Rooms page */}
            <div className="relative rounded-md overflow-hidden shadow-xl bg-[#faf8f0] border border-[#c9a227]/35 p-4 sm:p-6">
              <div className="overflow-hidden rounded-md border border-[#c9a227]/25 shadow-inner bg-brand-green-950/90" ref={emblaRef}>
                <div className="flex">
                  {images.map((src, idx) => (
                    <div className="relative flex-[0_0_100%] min-w-0 h-[50vh] md:h-[65vh]" key={idx}>
                      <Image
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Chevrons matching Room Carousel design */}
              <button
                onClick={scrollPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-brand-green-950/85 hover:bg-[#c9a227] text-[#c9a227] hover:text-brand-green-950 rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10 shadow-lg border border-[#c9a227]/50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-brand-green-950/85 hover:bg-[#c9a227] text-[#c9a227] hover:text-brand-green-950 rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-10 shadow-lg border border-[#c9a227]/50"
              >
                <ChevronRight size={24} />
              </button>

              {/* Progress Dots */}
              <div className="absolute bottom-9 left-0 right-0 flex justify-center px-4 flex-wrap gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === selectedIndex ? "w-6 bg-[#c9a227]" : "w-1.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-4 text-brand-green-900 font-serif italic text-sm tracking-wide">
              Showing photo {selectedIndex + 1} of {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Modal with longbg.png background when clicking Collage Grid */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-cover bg-center flex items-center justify-center p-4 sm:p-8"
            style={{ backgroundImage: "url('/assets/longbg.png')" }}
          >
            {/* Dark backing overlay behind image */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-[#c9a227] hover:text-white p-3 bg-brand-green-950/90 border border-[#c9a227]/40 rounded-full transition-colors z-50 shadow-xl"
            >
              <X size={28} />
            </button>
            
            <button
              onClick={() => setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-[#c9a227] hover:text-white p-4 bg-brand-green-950/85 hover:bg-[#c9a227] hover:text-brand-green-950 border border-[#c9a227]/40 rounded-full transition-colors z-50 hidden md:flex items-center justify-center shadow-xl"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={() => setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[#c9a227] hover:text-white p-4 bg-brand-green-950/85 hover:bg-[#c9a227] hover:text-brand-green-950 border border-[#c9a227]/40 rounded-full transition-colors z-50 hidden md:flex items-center justify-center shadow-xl"
            >
              <ChevronRight size={32} />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] rounded-md overflow-hidden border border-[#c9a227]/50 shadow-2xl z-10 bg-black/80">
              <Image
                src={images[selectedImageIndex]}
                alt={`Lightbox Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#c9a227] font-serif text-sm tracking-widest uppercase z-10 bg-brand-green-950/90 px-4 py-1.5 rounded-full border border-[#c9a227]/40 shadow-md">
              PHOTO {selectedImageIndex + 1} OF {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
