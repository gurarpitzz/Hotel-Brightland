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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3500, stopOnInteraction: true, stopOnMouseEnter: true })]
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
    <div className="relative overflow-hidden group rounded-xl" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {images.map((src, index) => (
          <div className="relative flex-[0_0_100%] min-w-0 h-64 sm:h-80" key={index}>
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
        <div className="absolute top-4 right-4 bg-brand-green-700/90 text-white px-3 py-1 text-xs font-bold uppercase rounded-md shadow-sm">
          {badgeText}
        </div>
      )}

      {/* Navigation Chevrons - Shown on hover */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-brand-green-700 hover:text-white rounded-full flex items-center justify-center text-brand-green-800 opacity-0 group-hover:opacity-100 transition-all shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-brand-green-700 hover:text-white rounded-full flex items-center justify-center text-brand-green-800 opacity-0 group-hover:opacity-100 transition-all shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex ? "bg-brand-yellow-100 w-5" : "bg-white/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
