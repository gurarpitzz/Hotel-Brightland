"use client";

import { MapPin, Mail, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-brand-green-900 text-brand-yellow-50 pt-20 pb-12 mt-auto overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-yellow-50"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Address Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative bg-white rounded-full p-2 shadow-lg">
                <Image src="/assets/logo/logo.png" alt="Brightland Logo" fill className="object-contain" unoptimized />
              </div>
              <h3 className="text-2xl font-cursive text-brand-yellow-200 tracking-wide">
                Brightland
              </h3>
            </div>
            <div className="space-y-4 text-brand-green-50">
              <p className="leading-relaxed font-medium">
                Cosy Nook Estate,<br />
                Near Army Training Command,<br />
                Adjacent The Mall, Shimla - 171 003<br />
                Himachal Pradesh, INDIA
              </p>
              
              <div className="flex items-start space-x-3 pt-4 border-t border-brand-green-800">
                <MapPin className="text-brand-yellow-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-brand-yellow-200 text-sm">Geo - Location</p>
                  <p className="text-sm tracking-widest">31.1051° N, 77.1672° E</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-yellow-200 flex items-center mb-6">
              <span className="w-8 h-1 bg-brand-yellow-400 mr-3 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="bg-brand-green-800/50 p-4 rounded-xl border border-brand-green-700/50 backdrop-blur-sm transition-colors hover:bg-brand-green-800">
                <p className="font-bold text-white text-lg">0177-2658275</p>
                <p className="text-xs text-brand-green-200 uppercase tracking-wider font-bold mt-1">Reservations (10am - 6pm)</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <PhoneCall className="text-brand-yellow-400 mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs text-brand-green-200 uppercase tracking-wider font-bold mb-1">Reception</p>
                  <a href="tel:01772803659" className="text-sm hover:text-white transition-colors block">0177-2803659</a>
                  <a href="tel:01772813659" className="text-sm hover:text-white transition-colors block">0177-2813659</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-brand-yellow-400 mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs text-brand-green-200 uppercase tracking-wider font-bold mb-1">WhatsApp</p>
                  <a href="https://wa.me/918219200074" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">+91 8219200074</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-brand-yellow-400 mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs text-brand-green-200 uppercase tracking-wider font-bold mb-1">Email</p>
                  <a href="mailto:brightlandhotel@gmail.com" className="text-sm hover:text-white transition-colors block">brightlandhotel@gmail.com</a>
                  <a href="mailto:mail@brightlandhotel.com" className="text-sm hover:text-white transition-colors block mt-1">mail@brightlandhotel.com</a>
                </div>
              </div>
            </div>
          </div>



          {/* TripAdvisor & Links */}
          <div className="space-y-6 flex flex-col items-center lg:items-end justify-start">
            <a 
              href="https://www.tripadvisor.in/Hotel_Review-g304552-d1156162-Reviews-Brightland_Hotel_Shimla-Shimla_Shimla_District_Himachal_Pradesh.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300 w-full max-w-[280px]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-brand-green-500 text-center relative">
                <div className="bg-brand-green-500 py-2">
                  <p className="text-xl font-extrabold text-white tracking-widest uppercase">Bravo!</p>
                </div>
                <div className="p-5 flex flex-col items-center">
                  <p className="text-sm text-brand-green-900 font-bold mb-4">
                    Brightland Hotel rated "Excellent" by 187 travellers
                  </p>
                  <div className="relative w-36 h-10">
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
            
            {/* Quick Links */}
            <div className="w-full max-w-[280px] grid grid-cols-2 gap-2 mt-4 text-sm font-medium text-brand-green-200">
              <Link href="/rooms" className="hover:text-brand-yellow-400 transition-colors text-right">Our Rooms</Link>
              <Link href="/tariff" className="hover:text-brand-yellow-400 transition-colors pl-4 border-l border-brand-green-700">Tariff</Link>
              <Link href="/policy" className="hover:text-brand-yellow-400 transition-colors text-right">Hotel Policy</Link>
              <Link href="/travel-desk" className="hover:text-brand-yellow-400 transition-colors pl-4 border-l border-brand-green-700">Travel Desk</Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright Line */}
      <div className="mt-16 pt-8 border-t border-brand-green-800 text-center text-sm text-brand-green-400 px-4">
        Copyright © {new Date().getFullYear()} brightlandhotel.com | All Rights Reserved.
      </div>
    </footer>
  );
}
