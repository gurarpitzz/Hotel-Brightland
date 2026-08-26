import React from 'react';
import { AnimatedFadeUp } from './AnimatedWrappers';

interface PageHeaderBannerProps {
  tagline?: string;
  title: string;
  description: string;
  compact?: boolean;
}

export default function PageHeaderBanner({
  tagline = "Our Collection",
  title,
  description,
  compact = false,
}: PageHeaderBannerProps) {
  return (
    <section 
      className="relative w-full py-10 sm:py-14 md:py-16 bg-cover bg-right sm:bg-center bg-no-repeat mb-10 shadow-md overflow-hidden border-b-2 border-[#c9a227]/40 flex items-center"
      style={{ backgroundImage: "url('/assets/headbanner.png')" }}
    >
      {/* Deep Forest Green Gradient Overlay on Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071c13]/95 via-[#0a2318]/85 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a2318]/70 via-transparent to-black/30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-white">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          <AnimatedFadeUp>
            {/* Handwritten Elegant Tagline */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-[1.5px] bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xl sm:text-2xl font-serif italic font-normal tracking-wide drop-shadow">
                {tagline}
              </span>
              <div className="w-6 h-[1px] bg-[#c9a227]/40" />
            </div>

            {/* Title Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-normal text-brand-yellow-50 tracking-tight mb-3 drop-shadow-lg leading-[1.1]">
              {title}
            </h1>

            {/* Antique Gold Line & Motif */}
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-12 h-[1.5px] bg-[#c9a227]/80" />
              <div className="text-[#c9a227] text-xs">❖ ❖ ❖</div>
              <div className="w-16 h-[1px] bg-[#c9a227]/30" />
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-brand-yellow-100/90 font-light leading-relaxed drop-shadow-md mb-4 max-w-2xl lg:max-w-3xl">
              {description}
            </p>

            {/* Scroll Down Guide */}
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#c9a227] font-semibold drop-shadow">
              <span>Scroll to explore</span>
              <span className="animate-bounce text-sm">↓</span>
            </div>
          </AnimatedFadeUp>
        </div>
      </div>
    </section>
  );
}
