"use client";

import HeroVideoSection from "@/components/HeroVideoSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactMapSection from "@/components/ContactMapSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const trustIndicators = [
    "Family Friendly",
    "Prime Shimla Location",
    "Free Parking",
    "Direct Booking Savings",
    "Mountain Views",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroVideoSection trustIndicators={trustIndicators} />

      {/* Wrapped Heritage & Legacy Section (Exact Reference Layout with custom homebg.png & orange accents) */}
      <section 
        className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden text-[#1e1e1e]"
        style={{ backgroundImage: "url('/assets/homebg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Clean Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-2">
                {/* SINCE 1959 with subtle antique gold underline accent */}
                <div className="inline-block relative">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2d4a3e]">
                    SINCE 1959
                  </span>
                  <div className="w-10 h-[1.5px] bg-[#c9a227] mt-1 rounded-full opacity-80" />
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-[54px] font-normal font-serif text-[#1b3d2f] leading-[1.15] tracking-tight pt-1">
                  The Heritage of Brightland
                </h2>

                {/* Refined Antique Gold Divider Motif */}
                <div className="flex items-center gap-3 pt-3 pb-1">
                  <div className="flex-1 h-[1px] bg-[#c9a227]/30" />
                  <div className="text-[#c9a227] text-[10px] opacity-75">❖ ❖ ❖</div>
                  <div className="flex-1 h-[1px] bg-[#c9a227]/30" />
                </div>
              </div>

              <div className="space-y-6 text-[#4a4036] text-[15px] md:text-[16px] font-normal leading-[1.75]">
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-[#1b3d2f] mb-1.5">
                    A Legacy of Himalayan Hospitality Since 1959
                  </h3>
                  <p className="leading-[1.75] text-[#3d423a]">
                    Welcome to Brightland Hotel, a timeless heritage retreat where the old-world charm of Shimla meets the warm, enduring spirit of the Himalayas. Welcoming global travelers since 1959, our property preserves the signature Victorian-era elegance that defined this historic hill station. As you step inside, you are enveloped by the rich fragrance of authentic pine wood interior design. This craftsmanship reflects the classic architecture of the region. Whether you are relaxing in our rooms or dining at our restaurant, you are participating in a living legacy of hospitality.
                  </p>
                </div>

                <div>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-[#1b3d2f] mb-1.5">
                    In the Heart of Imperial Shimla
                  </h3>
                  <p className="leading-[1.75] text-[#3d423a]">
                    Brightland Hotel is uniquely situated adjacent to The Mall and near the Army Training Command enclave, the historic political nerve center of British India. Our windows open up to panoramic views of lush green Deodar trees that have watched over the town for centuries. Staying at Brightland Hotel means you are living within its historical heart, with modern rare luxuries like our covered drive-in parking facility.
                  </p>
                </div>

                {/* Bottom subtle orange dotted accent line */}
                <div className="w-full border-b border-dashed border-[#d97706]/30 pt-2" />
              </div>
            </motion.div>

            {/* Right Side Rounded View Photos (Matching Reference Frame Layout) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 items-center"
            >
              <div className="relative h-[420px] md:h-[500px] w-full rounded-[32px] overflow-hidden border border-[#d97706]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/assets/view-6.jpg" 
                  alt="Mountain View from Brightland Hotel" 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="relative h-[420px] md:h-[500px] w-full rounded-[32px] overflow-hidden border border-[#d97706]/30 shadow-2xl transform translate-y-6 md:translate-y-8 hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/assets/view-slideshow2.jpg" 
                  alt="Scenic Valley View from Brightland Hotel" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel Amenities Section (Hotel Harsha Style) */}
      <AmenitiesSection />

      {/* Get in Touch & Location Map Section (Hotel Harsha Layout) */}
      <ContactMapSection />
    </div>
  );
}
