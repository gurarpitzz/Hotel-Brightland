"use client";

import HeroVideoSection from "@/components/HeroVideoSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactMapSection from "@/components/ContactMapSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2, Navigation } from "lucide-react";

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

      {/* Heritage & Legacy Section */}
      <section 
        className="py-20 md:py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden text-[#1e1e1e]"
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
                {/* Single clean SINCE 1959 badge */}
                <div className="inline-block relative">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#2d4a3e]">
                    SINCE 1959
                  </span>
                  <div className="w-10 h-[1.5px] bg-[#c9a227] mt-1 rounded-full opacity-80" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-[50px] font-normal font-serif text-[#1b3d2f] leading-[1.15] tracking-tight pt-1">
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

              {/* Combined Flowing Heritage & Legacy Paragraphs */}
              <div className="space-y-4 text-[#3d423a] text-[15px] md:text-[16px] font-normal leading-[1.75]">
                <p>
                  As one of Shimla's most prestigious and historic properties, Brightland Hotel offers an unparalleled experience in the former summer capital of Imperial India. Open year-round, our hotel provides a sanctuary for every season, whether you are seeking a romantic honeymoon, a distinguished corporate retreat, or a deeply relaxing mountain getaway. Step into our thoughtfully curated, luxuriously appointed rooms and suites and indulge in the finest authentic Indian cuisine.
                </p>
                <p>
                  Lose yourself in the mesmerizing, ever-changing moods of the Himalayas. Awaken to the scent of whispering pines, watch the floating mists roll through the valleys, and cozy up as snowflakes gently blanket the slate roofs. By dusk, watch the horizon come alive as the distant twinkling lights of Tara Devi, Chail, Subathu, and Kasauli illuminate the mountain sky.
                </p>
                <p>
                  Our legacy runs deep. Brightland Hotel is the proud successor to the legendary Imperial, Chambers and Central Hotels, once housed within the sprawling Wyming Estate of the Murree Hills, West Pakistan. Today, we are passionately managed by third and fourth-generation hoteliers who carry forward an unbroken tradition of excellence.
                </p>
                <p className="text-[#1b3d2f] font-serif font-bold text-base md:text-lg italic border-l-2 border-[#c9a227] pl-3 py-1.5 bg-[#0a2318]/5 rounded-r-md mt-2">
                  “At Brightland Hotel, hospitality is not just a service, it is a cherished way of life.”
                </p>
              </div>
            </motion.div>

            {/* Right Side Rounded View Photos (Original Frame Layout) */}
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

          {/* The Perfect Starting Point Card - Featuring Brightland Hotel Official Route Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mt-20 bg-[#faf8f0]/95 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-xl border-2 border-[#2d4a3e]/30 hover:border-[#c9a227]/60 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
              
              {/* Left Column: Brightland Hotel Official Route Location Map Box */}
              <div className="lg:w-5/12 w-full bg-white rounded-xl p-4 sm:p-5 border border-[#c9a227]/30 shadow-inner flex flex-col items-center justify-center relative">
                
                {/* Floating Category Badge */}
                <div className="mb-3 inline-flex items-center gap-1.5 bg-brand-green-950 text-[#c9a227] border border-[#c9a227]/40 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  <MapPin size={13} className="text-[#c9a227]" />
                  <span>Brightland Hotel Route Map</span>
                </div>

                <div className="relative w-full max-w-[340px] h-[280px] sm:h-[320px]">
                  <Image 
                    src="/assets/route-map.png" 
                    alt="Brightland Hotel Route Location Map" 
                    fill 
                    className="object-contain filter drop-shadow-sm"
                    unoptimized
                  />
                </div>
              </div>

              {/* Right Column: Location Details & Distance Features */}
              <div className="lg:w-7/12 w-full space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a227]">
                    PRIME CENTRAL LOCATION
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif text-brand-green-900 font-normal tracking-tight mt-1">
                    The Perfect Starting Point
                  </h3>
                  <div className="w-16 h-[1.5px] bg-[#c9a227] my-3" />
                </div>

                {/* Callout Box */}
                <div className="bg-[#0a2318]/5 border border-[#c9a227]/25 p-4 rounded-xl text-xs sm:text-sm text-[#3a4a40] leading-relaxed font-normal">
                  Strategically positioned to offer the absolute best of both worlds: deep, tranquil mountain serenity combined with effortless walking access to Shimla's most iconic attractions.
                </div>

                {/* Distance Checkmark List Grid */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center space-x-3 bg-[#faf8f0] p-3.5 rounded-xl border border-[#2d4a3e]/20 shadow-sm hover:border-[#c9a227]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#2d4a3e] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-brand-green-900">5 minutes from Old ISBT</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-[#faf8f0] p-3.5 rounded-xl border border-[#2d4a3e]/20 shadow-sm hover:border-[#c9a227]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#2d4a3e] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-brand-green-900">15 minutes walk to the historic Toy Train</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-[#faf8f0] p-3.5 rounded-xl border border-[#2d4a3e]/20 shadow-sm hover:border-[#c9a227]/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#2d4a3e] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-brand-green-900">15 minutes walk to The Mall</span>
                  </div>
                </div>

                {/* Footer Direction Link */}
                <div className="pt-2">
                  <a
                    href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-green-900 hover:bg-brand-green-950 text-[#c9a227] border border-[#c9a227]/40 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-md transform hover:scale-105"
                  >
                    <Navigation size={14} />
                    <span>Get Directions to Brightland Hotel →</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Hotel Amenities Section */}
      <AmenitiesSection />

      {/* Get in Touch & Location Map Section */}
      <ContactMapSection />
    </div>
  );
}
