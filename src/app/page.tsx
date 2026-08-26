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
    "Free Parking (on availability)",
    "Direct Booking Savings",
    "Panoramic Himalayan views from Hotel",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroVideoSection trustIndicators={trustIndicators} />

      {/* Heritage & Location Combined Section (Single 2-column section, no duplicate map) */}
      <section 
        className="py-20 md:py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden text-[#1e1e1e]"
        style={{ backgroundImage: "url('/assets/homebg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Combined Heritage, Legacy & The Perfect Starting Point */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Header Title Block */}
              <div className="space-y-2">
                <div className="inline-block relative">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2d4a3e]">
                    SINCE 1959
                  </span>
                  <div className="w-10 h-[1.5px] bg-[#c9a227] mt-1 rounded-full opacity-80" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal font-serif text-[#1b3d2f] leading-[1.18] tracking-tight pt-1">
                  A Timeless Escape in the Heart of Shimla
                </h2>
                <p className="text-base sm:text-lg text-[#c9a227] font-serif italic font-normal">
                  Where Imperial Heritage Meets Modern Comfort
                </p>

                {/* Refined Antique Gold Divider Motif */}
                <div className="flex items-center gap-3 pt-2 pb-1">
                  <div className="flex-1 h-[1px] bg-[#c9a227]/30" />
                  <div className="text-[#c9a227] text-[10px] opacity-75">❖ ❖ ❖</div>
                  <div className="flex-1 h-[1px] bg-[#c9a227]/30" />
                </div>
              </div>

              {/* Main Heritage Text */}
              <div className="space-y-4 text-[#3d423a] text-[15px] md:text-[16px] font-normal leading-[1.75]">
                <p>
                  As one of Shimla's most prestigious and historic properties, Brightland Hotel offers an unparalleled experience in the former summer capital of Imperial India. Open year-round, our hotel provides a sanctuary for every season, whether you are seeking a romantic honeymoon, a distinguished corporate retreat, or a deeply relaxing mountain getaway. Step into our thoughtfully curated, luxuriously appointed rooms and suites and indulge in the finest authentic Indian cuisine.
                </p>
                <p>
                  Lose yourself in the mesmerizing, ever-changing moods of the Himalayas. Awaken to the scent of whispering pines, watch the floating mists roll through the valleys, and cozy up as snowflakes gently blanket the slate roofs. By dusk, watch the horizon come alive as the distant twinkling lights of Tara Devi, Chail, Subathu, and Kasauli illuminate the mountain sky.
                </p>
              </div>

              {/* Legacy Block */}
              <div className="pt-4 space-y-3 border-t border-dashed border-[#c9a227]/30">
                <div className="inline-block bg-[#0a2318] text-[#c9a227] font-bold px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest border border-[#c9a227]/40 shadow-sm">
                  Established 1959
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1b3d2f]">
                  A Heritage Woven in Legend
                </h3>
                <p className="text-[#3d423a] text-[15px] leading-relaxed">
                  Our legacy runs deep. Brightland Hotel is the proud successor to the legendary Imperial, Chambers and Central Hotels, once housed within the sprawling Wyming Estate of the Murree Hills, West Pakistan. Today, we are passionately managed by third and fourth-generation hoteliers who carry forward an unbroken tradition of excellence.
                </p>
                <p className="text-[#1b3d2f] font-serif font-bold text-base italic border-l-2 border-[#c9a227] pl-3 py-1.5 bg-[#0a2318]/5 rounded-r-md">
                  “At Brightland Hotel, hospitality is not just a service, it is a cherished way of life.”
                </p>
              </div>

              {/* Combined "The Perfect Starting Point" Section (No duplicate map) */}
              <div className="pt-5 space-y-3 border-t border-dashed border-[#c9a227]/30">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a227] block">
                  PRIME CENTRAL LOCATION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#1b3d2f] font-normal">
                  The Perfect Starting Point
                </h3>
                <p className="text-[#3d423a] text-[15px] leading-relaxed">
                  Strategically positioned to offer the absolute best of both worlds: deep, tranquil mountain serenity combined with effortless walking access to Shimla's most iconic attractions.
                </p>
                <ul className="space-y-2.5 text-sm font-semibold text-[#1b3d2f] pt-1">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                    <span>5 minutes from Old ISBT</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                    <span>15 minutes walk to the historic Toy Train</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                    <span>15 minutes walk to The Mall</span>
                  </li>
                </ul>
              </div>

            </motion.div>

            {/* Right Column: 2 Scenic Mountain View Photos */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5 items-center sticky top-28"
            >
              <div className="relative h-[440px] md:h-[540px] w-full rounded-[28px] overflow-hidden border border-[#d97706]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/assets/view-6.jpg" 
                  alt="Mountain View from Brightland Hotel" 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="relative h-[440px] md:h-[540px] w-full rounded-[28px] overflow-hidden border border-[#d97706]/30 shadow-2xl transform translate-y-6 md:translate-y-8 hover:scale-[1.02] transition-transform duration-300">
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

      {/* Hotel Amenities Section */}
      <AmenitiesSection />

      {/* Get in Touch & Location Map Section */}
      <ContactMapSection />
    </div>
  );
}
