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
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-16 sm:py-20 md:py-24 bg-cover bg-right sm:bg-center bg-no-repeat mb-16 shadow-lg overflow-hidden border-b-2 border-[#c9a227]/40"
      style={{ backgroundImage: "url('/assets/headbanner.png')" }}
    >
      {/* Deep Forest Green Gradient Overlay on Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071c13]/95 via-[#0a2318]/85 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2318]/70 via-transparent to-black/40 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-white">
        <div className="max-w-3xl lg:max-w-4xl text-left">
          <AnimatedFadeUp>
            {/* Handwritten Elegant Tagline */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-[1.5px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-2xl sm:text-3xl font-serif italic font-normal tracking-wide drop-shadow">
                {tagline}
              </span>
              <div className="w-8 h-[1px] bg-[#c9a227]/40" />
            </div>

            {/* Title Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-brand-yellow-50 tracking-tight mb-4 drop-shadow-lg leading-[1.08]">
              {title}
            </h1>

            {/* Antique Gold Line & Motif */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-16 h-[1.5px] bg-[#c9a227]/80" />
              <div className="text-[#c9a227] text-sm">❖ ❖ ❖</div>
              <div className="w-24 h-[1px] bg-[#c9a227]/30" />
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-brand-yellow-100/90 font-light leading-relaxed drop-shadow-md mb-8 max-w-3xl lg:max-w-4xl">
              {description}
            </p>

            {/* Scroll Down Guide */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#c9a227] font-semibold drop-shadow">
              <span>Scroll to explore</span>
              <span className="animate-bounce text-base sm:text-lg">↓</span>
            </div>
          </AnimatedFadeUp>
        </div>
      </div>
    </section>
  );
}
