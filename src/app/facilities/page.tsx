"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, TreePine, Car, Clock, ChevronLeft, ChevronRight, FileText, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback } from "react";
import { AnimatedFadeUp } from "@/components/AnimatedWrappers";

const facilities = [
  {
    title: "Indian Cuisine Restaurant",
    subtitle: "A La Carte Dining",
    eyebrow: "THE BRIGHTLAND DINING",
    description: "Embark on a culinary journey at our signature restaurant, where every meal is a celebration of flavor and tradition. Our expert chefs meticulously craft our A La Carte menu featuring authentic Indian delicacies. Sourced from the freshest local ingredients, our dining experience is thoughtfully designed to indulge the senses and cater to every discerning palate.",
    features: [
      "Authentic Indian Delicacies",
      "A La Carte Dining Menu",
      "Fresh Local Ingredients",
      "7:30 AM to 10:30 PM Service"
    ],
    amenities: [
      { icon: <Utensils size={16} />, label: "Indian Cuisine" },
      { icon: <Clock size={16} />, label: "Room & Table Service" }
    ],
    badgeText: "Culinary Experience",
    images: [
      "/assets/Restaurant/Restaurant 1.jpg",
      "/assets/Restaurant/Restaurant 2.jpg",
      "/assets/Restaurant/Restaurant 3.jpg"
    ],
    pdfEmbed: "/assets/BLH-menu-card-2026.pdf",
    pdfButtonText: "View Our Latest Menu"
  },
  {
    title: "The Terrace Garden",
    subtitle: "Panoramic Himalayan Sanctuary",
    eyebrow: "HERITAGE GARDEN",
    description: "Step into our lush, beautifully manicured Terrace Garden, a serene oasis suspended above the bustling world below. Surrounded by the majestic Shimla mountains, it is the ultimate sanctuary for morning meditation, afternoon high tea, or an intimate evening under the stars. Breathe in the crisp Himalayan air as you unwind amidst vibrant blooms and panoramic valley views.",
    features: [
      "Panoramic Valley Views",
      "Manicured Lawn & Seating",
      "Fresh Himalayan Air",
      "High Tea & Sunset Spot"
    ],
    amenities: [
      { icon: <TreePine size={16} />, label: "Mountain Outlook" },
      { icon: <Clock size={16} />, label: "Open Daily" }
    ],
    badgeText: "Valley View",
    images: [
      "/assets/Terrace Garden/Garden (4).JPG",
      "/assets/Terrace Garden/Garden (5).JPG",
      "/assets/Terrace Garden/Garden (2).jpg",
      "/assets/Terrace Garden/Garden (1).JPG"
    ]
  },
  {
    title: "Exclusive Private Car Parking",
    subtitle: "On-Site Drive-In Facility",
    eyebrow: "CONVENIENCE & SAFETY",
    description: "Navigating the winding roads of Shimla is thrilling, but finding parking shouldn't be. We offer the rare luxury of ample, secure, and complimentary on-site parking (on availability) exclusively for our guests. Drive-in directly into our private premises and enjoy complete peace of mind, knowing your vehicle is safe and accessible at all times. Other paid Govt. car parking lots are nearby.",
    features: [
      "Complimentary On-Site Parking",
      "Direct Drive-In Access",
      "Secure Private Premises",
      "Paid Govt. Parking Nearby"
    ],
    amenities: [
      { icon: <Car size={16} />, label: "On-Site Parking" },
      { icon: <Car size={16} />, label: "Easy Drive-In" }
    ],
    badgeText: "Complimentary",
    images: [
      "/assets/Hotel building/brightland hotel complex.jpg",
      "/assets/Hotel building/Hotel building (1).jpg",
      "/assets/Hotel building/Hotel building (4).JPG",
      "/assets/Hotel building/Hotel building (5).jpg"
    ]
  },
  {
    title: "Guest Services",
    subtitle: "24/7 Dedicated Care",
    eyebrow: "HOSPITALITY",
    description: "True luxury lies in effortless convenience. Our dedicated reception, room service, housekeeping and kitchen staff are at your disposal. Our staff is committed to anticipating your needs and delivering flawless, highly personalized polite service throughout your stay. We have safe deposit facility for your valuables and cloak room for luggage storage.",
    features: [
      "Dedicated Reception Staff",
      "Housekeeping & Kitchen Support",
      "Safe Deposit Facility",
      "Luggage Cloak Room"
    ],
    amenities: [
      { icon: <Clock size={16} />, label: "Attentive Service" },
      { icon: <FileText size={16} />, label: "Cloak Room & Safe" }
    ],
    badgeText: "24/7 Support",
    images: [
      "/assets/Reception/reception.JPG"
    ]
  }
];

// Carousel Component for each Facility matching Room Carousel styling
function FacilityCarousel({ images, badgeText }: { images: string[]; badgeText?: string }) {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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

  React.useEffect(() => {
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
              alt={`Facility View ${index + 1}`}
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

      {images.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}

import PageHeaderBanner from "@/components/PageHeaderBanner";

export default function FacilitiesPage() {
  return (
    <div 
      className="bg-[#faf8f0] bg-cover bg-top bg-no-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/longbg.png')" }}
    >
      
      <PageHeaderBanner
        tagline="World-Class Experience"
        title="Premium Facilities"
        description="Experience exceptional hospitality with our curated amenities designed to make your Shimla vacation unforgettable."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-16 lg:space-y-24">
          {facilities.map((facility, index) => {
            const isEven = index % 2 === 0;

            return (
              <AnimatedFadeUp 
                key={index} 
                delay={index * 0.08} 
                className={`bg-[#faf8f0] rounded-md shadow-lg border border-[#c9a227]/35 overflow-hidden flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } transition-all duration-300 hover:border-[#c9a227] hover:shadow-xl`}
              >
                {/* Carousel Section (45% Width) */}
                <div className="w-full lg:w-[45%] p-3 lg:p-4 flex flex-col justify-center">
                  <FacilityCarousel images={facility.images} badgeText={facility.badgeText} />
                </div>
                
                {/* Details Section (55% Width) */}
                <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Eyebrow Label */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] uppercase font-bold tracking-[0.22em] text-[#c9a227]">
                        {facility.eyebrow}
                      </span>
                    </div>

                    {/* Facility Title & Subtitle */}
                    <div className="mb-4">
                      <h2 className="text-3xl sm:text-4xl font-serif text-brand-green-900 font-normal tracking-tight">
                        {facility.title}
                      </h2>
                      <p className="text-base font-serif italic text-brand-green-800/80 mt-1">
                        {facility.subtitle}
                      </p>
                    </div>

                    {/* Accent Line */}
                    <div className="w-16 h-[1px] bg-[#c9a227]/50 mb-5" />

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-[#3a4a40] leading-relaxed mb-6 font-medium">
                      {facility.description}
                    </p>

                    {/* Key Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 mb-6">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-[#3a4a40] font-semibold">
                          <span className="text-[#c9a227] font-bold mr-2">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Info Bar */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 border-t border-b border-[#c9a227]/15 mb-6 text-[11px] uppercase tracking-wider text-brand-green-800 font-semibold">
                      {facility.amenities.map((amenity, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#c9a227]">{amenity.icon}</span>
                          <span>{amenity.label}</span>
                          {idx < facility.amenities.length - 1 && <span className="text-[#c9a227]/40 ml-2">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PDF Menu Action Button for Restaurant */}
                  {facility.pdfEmbed && (
                    <div className="pt-2">
                      <a
                        href={facility.pdfEmbed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] px-7 py-3.5 rounded-md font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all shadow-md border border-[#c9a227]/40 hover:border-[#c9a227] group"
                      >
                        <FileText className="w-4 h-4 text-[#c9a227]" />
                        <span>{facility.pdfButtonText}</span>
                        <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </AnimatedFadeUp>
            );
          })}
        </div>

      </div>
    </div>
  );
}
