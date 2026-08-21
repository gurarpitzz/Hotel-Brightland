"use client";

import HeroVideoSection from "@/components/HeroVideoSection";
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

      {/* Wrapped Heritage, Legacy & Location Section with Custom Pine Background */}
      <section className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/heritage-bg.jpg')" }}>
        {/* Soft Warm Semi-transparent Overlay for Text Legibility & Contrast */}
        <div className="absolute inset-0 bg-amber-50/75 backdrop-blur-[2px] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
            {/* Left Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green-950 mb-3 tracking-tight font-cursive">
                  A Timeless Escape in the Heart of Shimla
                </h2>
                <h3 className="text-xl md:text-2xl text-brand-green-800 font-bold italic">
                  Where Imperial Heritage Meets Modern Luxury
                </h3>
              </div>
              
              <div className="space-y-6 text-brand-green-950 text-base md:text-lg font-medium leading-relaxed bg-white/70 p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-brand-green-100 shadow-sm">
                <p>
                  As one of Shimla&apos;s most prestigious and historic properties, Brightland Hotel offers an unparalleled experience in the former summer capital of Imperial India. Open year-round, our estate provides a sanctuary for every season, whether you are seeking a romantic honeymoon, a distinguished corporate retreat, or a deeply relaxing mountain getaway. Step into our thoughtfully curated, luxuriously appointed suites and indulge in the finest authentic Indian cuisine.
                </p>
                <p>
                  Lose yourself in the mesmerizing, ever-changing moods of the Himalayas. Awaken to the scent of whispering pines, watch the floating mists roll through the valleys, and cozy up as snowflakes gently blanket the slate roofs. By dusk, watch the horizon come alive as the distant twinkling lights of Tara Devi, Chail, Subathu, and Kasauli illuminate the mountain sky.
                </p>
              </div>
            </motion.div>

            {/* Right Side Double Vertical View Photos (Reference Layout) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 h-[480px] md:h-[540px]"
            >
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/assets/view-6.jpg" 
                  alt="Mountain View from Brightland Hotel" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold text-brand-yellow-200">Panoramic Himalayan Views</p>
                  <p className="text-xs text-gray-200">From Estate Balconies</p>
                </div>
              </div>

              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white transform translate-y-6 md:translate-y-8 hover:scale-[1.02] transition-transform duration-300">
                <Image 
                  src="/assets/view-slideshow2.jpg" 
                  alt="Scenic Valley & Ridge View from Brightland Hotel" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold text-brand-yellow-200">Valley & Sunset Horizon</p>
                  <p className="text-xs text-gray-200">Serene Shimla Heights</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-brand-green-200 shadow-md mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <div className="inline-block bg-brand-green-800 text-brand-yellow-200 font-extrabold px-4 py-2 rounded-full text-sm mb-2 shadow-sm">
                Established 1959
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-green-950">A Heritage Woven in Legend</h3>
              <p className="text-brand-green-950 text-base md:text-lg font-medium leading-relaxed">
                Our legacy runs deep. Brightland is the proud successor to the legendary Imperial, Chambers, and Central Hotels, once housed within the sprawling Wyming Estate of the Murree Hills. Today, we are passionately managed by third and fourth-generation hoteliers who carry forward an unbroken tradition of excellence.
              </p>
              <p className="text-brand-green-900 font-black text-xl mt-4 italic">
                At Brightland, hospitality is not just a service, it is a cherished way of life.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white"
            >
              <Image 
                src="/assets/Hotel building/Hotel building (1).jpg" 
                alt="Brightland Hotel Legacy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-green-900/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-brand-green-100">
                <p className="text-brand-green-950 font-black">The Best Address in Shimla</p>
                <p className="text-brand-green-800 text-xs font-bold">Since 1959</p>
              </div>
            </motion.div>
          </div>

          {/* Location Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-brand-green-200 shadow-md">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-950">The Perfect Starting Point</h2>
              <p className="text-brand-green-950 text-base md:text-lg font-medium leading-relaxed">
                Strategically positioned to offer the absolute best of both worlds: deep, tranquil mountain serenity combined with effortless walking access to Shimla&apos;s most iconic attractions.
              </p>
              <ul className="space-y-3 text-brand-green-950 font-bold">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-brand-green-700" />
                  <span>5 minutes from Old ISBT</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-brand-green-700" />
                  <span>15 minutes walk to the historic Toy Train</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 w-full h-[380px] relative rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <iframe 
                src="https://maps.google.com/maps?q=Brightland+Hotel,+Shimla&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
