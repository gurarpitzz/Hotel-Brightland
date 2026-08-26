"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Car, 
  Wifi, 
  Utensils, 
  CreditCard, 
  Sparkles, 
  CalendarCheck, 
  Cross, 
  Shirt 
} from "lucide-react";

const amenitiesList = [
  {
    icon: <Car className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "DRIVE IN WITH PARKING",
  },
  {
    icon: <Wifi className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "FREE INTERNET (WIFI)",
  },
  {
    icon: <Utensils className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "MULTI-CUISINE RESTAURANT",
  },
  {
    icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "CREDIT CARDS ACCEPTED",
  },
  {
    icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "TERRACE GARDEN",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "TRAVEL & RESERVATION DESK",
  },
  {
    icon: <Cross className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "MEDICAL HELP 24/7",
  },
  {
    icon: <Shirt className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow-200 stroke-[1.5]" />,
    title: "LAUNDRY / DRY CLEAN",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-[#3d2c23] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 space-y-3"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-serif tracking-wide text-white">
            Hotel Amenities
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.25em] text-brand-yellow-100 uppercase font-light">
            THOUGHTFUL SERVICES FOR A SEAMLESS STAY
          </p>
        </motion.div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {amenitiesList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center space-y-4 group cursor-pointer"
            >
              <div className="p-3 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-white uppercase text-center group-hover:text-brand-yellow-200 transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
