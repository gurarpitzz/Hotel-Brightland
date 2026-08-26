"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface RoomCarouselProps {
  images: string[];
  badgeText?: string;
}

export default function RoomCarousel({ images, badgeText }: RoomCarouselProps) {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  if (!images || images.length === 0) return null;

  return (
    <div className="relative overflow-hidden group rounded-md shadow-sm border border-[#c9a227]/20" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {images.map((src, index) => (
          <div className="relative flex-[0_0_100%] min-w-0 h-72 sm:h-80 md:h-[380px] lg:h-[420px]" key={index}>
            <Image
              src={src}
              alt={`Room view ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {badgeText && (
        <div className="absolute top-4 left-4 bg-brand-green-950/85 backdrop-blur-sm border border-[#c9a227]/40 text-[#c9a227] px-3.5 py-1 text-[11px] font-semibold tracking-widest uppercase rounded-sm shadow-md">
          {badgeText}
        </div>
      )}

      {/* Navigation Chevrons - Shown on hover */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-brand-green-950/80 hover:bg-[#c9a227] text-[#c9a227] hover:text-brand-green-950 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm border border-[#c9a227]/40"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-brand-green-950/80 hover:bg-[#c9a227] text-[#c9a227] hover:text-brand-green-950 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm border border-[#c9a227]/40"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              selectedIndex === index ? "bg-[#c9a227] w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
