"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Mail, Phone, PhoneCall, ChevronRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat text-brand-yellow-50 pt-16 pb-12 mt-auto border-t-2 border-[#d97706]/40 overflow-hidden"
      style={{ backgroundImage: "url('/assets/footerbg.png')" }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Address & Location */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative bg-white rounded-full p-2 shadow-lg shrink-0">
                <Image src="/assets/logo/logo.png" alt="Brightland Logo" fill className="object-contain" unoptimized />
              </div>
              <h3 className="text-2xl font-cursive text-brand-yellow-200 tracking-wide">
                Brightland
              </h3>
            </div>
            <div className="space-y-4 text-brand-green-50">
              <p className="leading-relaxed font-medium text-sm">
                Cosy Nook Estate,<br />
                Near Army Training Command,<br />
                Adjacent The Mall, Shimla - 171 003<br />
                Himachal Pradesh, INDIA
              </p>
              
              <div className="flex items-start space-x-3 pt-4 border-t border-brand-green-800">
                <MapPin className="text-brand-yellow-400 mt-1 shrink-0" size={18} />
                <div>
                  <p className="font-bold text-brand-yellow-200 text-xs uppercase tracking-wider">Geo - Location</p>
                  <p className="text-xs tracking-widest text-brand-green-100">31.1051° N, 77.1672° E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-yellow-200 flex items-center mb-6">
              <span className="w-8 h-1 bg-brand-yellow-400 mr-3 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="bg-brand-green-800/50 p-3.5 rounded-xl border border-brand-green-700/50 backdrop-blur-sm transition-colors hover:bg-brand-green-800">
                <p className="font-bold text-white text-base">0177-2658275</p>
                <p className="text-[10px] text-brand-green-200 uppercase tracking-wider font-bold mt-0.5">Reservations (10am - 6pm)</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <PhoneCall className="text-brand-yellow-400 mt-1 shrink-0" size={16} />
                <div>
                  <p className="text-[11px] text-brand-green-200 uppercase tracking-wider font-bold mb-0.5">Reception</p>
                  <a href="tel:01772803659" className="text-xs hover:text-white transition-colors block">0177-2803659</a>
                  <a href="tel:01772813659" className="text-xs hover:text-white transition-colors block">0177-2813659</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-brand-yellow-400 mt-1 shrink-0" size={16} />
                <div>
                  <p className="text-[11px] text-brand-green-200 uppercase tracking-wider font-bold mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/918219200074" target="_blank" rel="noreferrer" className="text-xs hover:text-white transition-colors">+91 8219200074</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-brand-yellow-400 mt-1 shrink-0" size={16} />
                <div>
                  <p className="text-[11px] text-brand-green-200 uppercase tracking-wider font-bold mb-0.5">Email</p>
                  <a href="mailto:brightlandhotel@gmail.com" className="text-xs hover:text-white transition-colors block">brightlandhotel@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Stacked Vertical Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-yellow-200 flex items-center mb-6">
              <span className="w-8 h-1 bg-brand-yellow-400 mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-brand-green-100">
              <li>
                <Link href="/" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Our Rooms</span>
                </Link>
              </li>
              <li>
                <Link href="/tariff" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Tariff & Rates</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Hotel Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/travel-desk" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Travel Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-yellow-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="text-brand-yellow-400 group-hover:translate-x-1 transition-transform" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: TripAdvisor Accreditation */}
          <div className="space-y-6 flex flex-col items-start justify-start">
            <h3 className="text-xl font-bold text-brand-yellow-200 flex items-center mb-6">
              <span className="w-8 h-1 bg-brand-yellow-400 mr-3 rounded-full"></span>
              Accreditation
            </h3>
            <a 
              href="https://www.tripadvisor.in/Hotel_Review-g304552-d1156162-Reviews-Brightland_Hotel_Shimla-Shimla_Shimla_District_Himachal_Pradesh.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300 w-full max-w-[260px]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-brand-green-500 text-center relative">
                <div className="bg-brand-green-500 py-2">
                  <p className="text-lg font-extrabold text-white tracking-widest uppercase">Bravo!</p>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <p className="text-xs text-brand-green-900 font-bold mb-3">
                    Brightland Hotel rated "Excellent" by 187 travellers
                  </p>
                  <div className="relative w-32 h-9">
                    <Image 
                      src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
                      alt="Tripadvisor Logo" 
                      fill 
                      className="object-contain" 
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
      
      {/* Copyright Line */}
      <div className="mt-16 pt-8 border-t border-brand-green-800 text-center text-xs text-brand-green-300 px-4">
        Copyright © {new Date().getFullYear()} brightlandhotel.com | All Rights Reserved.
      </div>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="fixed bottom-36 md:bottom-24 right-4 md:right-6 z-50 p-3.5 bg-brand-green-800 hover:bg-brand-green-900 text-brand-yellow-300 rounded-full shadow-2xl border-2 border-brand-yellow-400 transition-all transform hover:scale-110 focus:outline-none flex items-center justify-center"
          >
            <ArrowUp className="w-6 h-6 stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
