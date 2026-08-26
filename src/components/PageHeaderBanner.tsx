import React from 'react';
import { AnimatedFadeUp } from './AnimatedWrappers';

interface PageHeaderBannerProps {
  tagline?: string;
  title: string;
  description: string;
}

export default function PageHeaderBanner({
  tagline = "Our Collection",
  title,
  description,
}: PageHeaderBannerProps) {
  return (
    <section 
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-12 sm:py-16 md:py-20 bg-cover bg-right sm:bg-center bg-no-repeat mb-16 shadow-lg overflow-hidden border-b-2 border-[#c9a227]/40"
      style={{ backgroundImage: "url('/assets/headbanner.png')" }}
    >
      {/* Deep Forest Green Gradient Overlay on Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071c13]/95 via-[#0a2318]/85 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2318]/70 via-transparent to-black/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-white">
        {/* Constrained to left 48% width to never overlap the hotel building on the right */}
        <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[48%] xl:max-w-[46%] text-left">
          <AnimatedFadeUp>
            {/* Handwritten Elegant Tagline */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-8 sm:w-10 h-[1.5px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-lg sm:text-xl md:text-2xl font-serif italic font-normal tracking-wide drop-shadow">
                {tagline}
              </span>
              <div className="w-6 sm:w-8 h-[1px] bg-[#c9a227]/40" />
            </div>

            {/* Title Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-normal text-brand-yellow-50 tracking-tight mb-3 sm:mb-4 drop-shadow-lg leading-[1.1]">
              {title}
            </h1>

            {/* Antique Gold Line & Motif */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-12 sm:w-16 h-[1.5px] bg-[#c9a227]/80" />
              <div className="text-[#c9a227] text-xs sm:text-sm">❖ ❖ ❖</div>
              <div className="w-16 sm:w-20 h-[1px] bg-[#c9a227]/30" />
            </div>

            {/* Description Paragraph - Reduced font size for tight multi-line paragraphs */}
            <p className="text-xs sm:text-sm md:text-[14px] lg:text-[15px] text-brand-yellow-100/90 font-normal leading-[1.65] drop-shadow-md mb-6 max-w-full">
              {description}
            </p>

            {/* Scroll Down Guide */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#c9a227] font-semibold drop-shadow">
              <span>Scroll to explore</span>
              <span className="animate-bounce text-sm sm:text-base">↓</span>
            </div>
          </AnimatedFadeUp>
        </div>
      </div>
    </section>
  );
}
