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

      {/* Wrapped Heritage & Legacy Section (Hotel Harsha Layout Style) */}
      <section className="py-20 bg-[#faf8f5] relative overflow-hidden text-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Clean Text Column (No White Card Box) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#047857]">
                  SINCE 1959
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-serif text-[#1e1e1e] leading-tight tracking-tight">
                  The Heritage of Brightland
                </h2>
              </div>

              <div className="space-y-6 text-[#374151] text-base md:text-lg font-normal leading-relaxed pt-2">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1e1e1e] mb-2">
                    A Legacy of Himalayan Hospitality Since 1959
                  </h3>
                  <p className="leading-relaxed">
                    Welcome to Brightland Hotel, a timeless heritage retreat where the old-world charm of Shimla meets the warm, enduring spirit of the Himalayas. Open year-round, our property preserves the signature Victorian-era elegance that defined this historic hill station. As you step inside, you are enveloped by authentic hospitality and panoramic mountain views.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1e1e1e] mb-2">
                    In the Heart of Imperial Shimla
                  </h3>
                  <p className="leading-relaxed">
                    Brightland is uniquely situated adjacent to The Mall and near the Army Training Command, the historic heart of British India. Our windows open up to panoramic views of lush green Deodar trees that have watched over the town for centuries. Staying at Brightland Hotel means you are living within its historical heart, with modern luxuries like covered drive-in parking.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side Clean Side-by-Side Rounded Photos (Harsha Layout) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 items-center"
            >
              <div className="relative h-[420px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/assets/view-6.jpg" 
                  alt="Mountain View from Brightland Hotel" 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="relative h-[420px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl transform translate-y-6 md:translate-y-8 hover:scale-[1.02] transition-transform duration-300">
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
