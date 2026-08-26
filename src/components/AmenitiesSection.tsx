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
    icon: <Car className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "DRIVE IN WITH PARKING",
  },
  {
    icon: <Wifi className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "FREE INTERNET (WIFI)",
  },
  {
    icon: <Utensils className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "MULTI-CUISINE RESTAURANT",
  },
  {
    icon: <CreditCard className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "CREDIT CARDS ACCEPTED",
  },
  {
    icon: <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "TERRACE GARDEN",
  },
  {
    icon: <CalendarCheck className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "TRAVEL & RESERVATION DESK",
  },
  {
    icon: <Cross className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "MEDICAL HELP 24/7",
  },
  {
    icon: <Shirt className="w-6 h-6 md:w-7 md:h-7 text-[#d9c5b2] stroke-[1.25]" />,
    title: "LAUNDRY / DRY CLEAN",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-[#3b2b22] text-[#e8ded3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 space-y-3"
        >
          <h2 className="text-4xl sm:text-5xl md:text-[52px] font-normal font-serif tracking-tight text-[#f2eae1]">
            Hotel Amenities
          </h2>
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#b8a798] uppercase font-medium">
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
              <div className="p-2 transform group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-[11px] md:text-[12px] font-extrabold tracking-[0.2em] text-[#d9c5b2] uppercase text-center group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
