"use client";

import { MapPin, Mail, Phone, PhoneCall, ChevronRight, CloudRain, Cloud, Sun } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Address Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="w-1 h-6 bg-brand-green-500 mr-3 rounded-full"></span>
              Address
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed">
                BRIGHTLAND HOTEL,<br />
                Cosy Nook Estate,<br />
                Near Army Training Command,<br />
                Adjacent The Mall, Shimla - 171 003<br />
                Himachal Pradesh, INDIA
              </p>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
                <MapPin className="text-brand-green-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-white text-sm">Geo - Location</p>
                  <p className="text-sm">31.1051° N, 77.1672° E</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
                <Mail className="text-brand-green-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-white text-sm">Email :</p>
                  <a href="mailto:mail@brightlandhotel.com" className="text-sm hover:text-brand-green-400 transition-colors">mail@brightlandhotel.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="w-1 h-6 bg-brand-green-500 mr-3 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white">Reservations: 0177-2658275</p>
                <p className="text-sm text-gray-400">10:00 am to 6:00 pm</p>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
                <PhoneCall className="text-brand-green-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-white text-sm">Reception:</p>
                  <a href="tel:01772803659" className="text-sm hover:text-brand-green-400 transition-colors block">0177-2803659</a>
                  <a href="tel:01772813659" className="text-sm hover:text-brand-green-400 transition-colors block">0177-2813659</a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
                <Phone className="text-brand-green-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-white text-sm">WhatsApp</p>
                  <a href="https://wa.me/918219200074" target="_blank" rel="noreferrer" className="text-sm hover:text-brand-green-400 transition-colors">+91 8219200074</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
                <Mail className="text-brand-green-400 mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-white text-sm">Email :</p>
                  <a href="mailto:brightlandhotel@gmail.com" className="text-sm hover:text-brand-green-400 transition-colors">brightlandhotel@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="space-y-6">
            <h3 className="text-center text-sm font-extrabold text-white tracking-widest uppercase mb-6">
              Shimla<br/>Weather
            </h3>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
              {/* Current Weather */}
              <div className="p-6 flex items-center justify-between border-b border-gray-800">
                <Cloud size={48} className="text-gray-300" />
                <div className="text-right">
                  <p className="text-4xl font-light text-white">13°C</p>
                  <p className="text-xs text-gray-400 mt-1 capitalize">overcast clouds</p>
                </div>
              </div>
              {/* Forecast */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center px-6 py-3 border-b border-gray-800/50 bg-gray-800/20">
                  <span className="text-sm font-medium">Monday</span>
                  <div className="flex items-center space-x-4">
                    <CloudRain size={16} className="text-gray-400" />
                    <div className="flex space-x-3 text-sm">
                      <span className="text-white">25°C</span>
                      <span className="text-gray-500">13°C</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-6 py-3 border-b border-gray-800/50 bg-gray-800/20">
                  <span className="text-sm font-medium">Tuesday</span>
                  <div className="flex items-center space-x-4">
                    <Cloud size={16} className="text-gray-400" />
                    <div className="flex space-x-3 text-sm">
                      <span className="text-white">28°C</span>
                      <span className="text-gray-500">13°C</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-6 py-3 bg-gray-800/20">
                  <span className="text-sm font-medium">Wednesday</span>
                  <div className="flex items-center space-x-4">
                    <Sun size={16} className="text-yellow-500" />
                    <div className="flex space-x-3 text-sm">
                      <span className="text-white">28°C</span>
                      <span className="text-gray-500">16°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TripAdvisor */}
          <div className="space-y-6 flex flex-col items-center justify-start pt-6">
            <a 
              href="https://www.tripadvisor.in/Hotel_Review-g304552-d1156162-Reviews-Brightland_Hotel_Shimla-Shimla_Shimla_District_Himachal_Pradesh.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300 w-full max-w-[250px]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-xl border-4 border-green-500 text-center">
                <div className="bg-green-500 py-2">
                  <p className="text-xl font-bold text-black">Bravo!</p>
                </div>
                <div className="p-4 flex flex-col items-center">
                  <p className="text-sm text-gray-800 font-medium mb-3 hover:underline">
                    Brightland Hotel, Shimla rated "excellent" by 187 travellers
                  </p>
                  <div className="relative w-32 h-8 mt-2">
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
      <div className="mt-16 pt-6 border-t border-gray-800 text-center text-sm text-gray-500 px-4">
        Copyright © {new Date().getFullYear()} brightlandhotel.com | All Rights Reserved.
      </div>
    </footer>
  );
}
