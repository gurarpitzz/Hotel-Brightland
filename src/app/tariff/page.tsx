import { Check, Info, AlertTriangle, Coffee, Utensils, Award, FileText, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedFadeUp } from "@/components/AnimatedWrappers";

export const metadata = {
  title: "Tariff | Brightland Hotel, Shimla",
  description: "View our current FIT tariffs approved by the H.P. Tourism Department for our various rooms and suites in Shimla.",
};

const roomRates = [
  { 
    name: "Imperial Room", 
    view: "Non Valley View",
    tagline: "budget friendly", 
    price: "3800", 
    pax: "2 PAX",
    extraBed: "Extra PAX/bed (above 5 years) Rs. 900 + GST per day",
    popular: false 
  },
  { 
    name: "Royal Room", 
    view: "Valley View",
    tagline: "popular", 
    price: "4600", 
    pax: "2 PAX",
    extraBed: "Extra PAX/bed (above 5 years) Rs. 900 + GST per day",
    popular: true 
  },
  { 
    name: "Corporate Room", 
    view: "Valley View",
    tagline: "luxury", 
    price: "5500", 
    pax: "2 PAX",
    extraBed: "Extra PAX/bed (above 5 years) Rs. 900 + GST per day",
    popular: false 
  },
  { 
    name: "Regular Suite", 
    view: "Non Valley View",
    tagline: "Family Room", 
    price: "5500", 
    pax: "4 PAX",
    extraBed: "Extra PAX/bed (above 5 years) Rs. 900 + GST per day",
    popular: false 
  },
  { 
    name: "Regal Suite", 
    view: "Non Valley View",
    tagline: "Family Suite", 
    price: "6000", 
    pax: "2 PAX",
    extraBed: "Extra PAX/bed (above 5 years) Rs. 900 + GST per day",
    popular: true 
  },
  { 
    name: "Presidential Room", 
    view: "Valley View",
    tagline: "Family Room", 
    price: "6000", 
    pax: "2 PAX",
    extraBed: "Extra PAX/bed (above 5 years) Rs. 900 + GST per day",
    popular: false 
  },
];

import PageHeaderBanner from "@/components/PageHeaderBanner";

export default function TariffPage() {
  return (
    <div 
      className="bg-[#faf8f0] bg-cover bg-top bg-no-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/longbg.png')" }}
    >
      
      <PageHeaderBanner
        tagline="Approved by H.P. Tourism"
        title="Rates & Tariff"
        description="View our transparent FIT tariffs per day for our various rooms and luxury suites in the heart of Shimla."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Room Rates Grid - Increased card size & padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {roomRates.map((room, idx) => (
            <AnimatedFadeUp 
              key={idx} 
              delay={idx * 0.08}
              className={`relative bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-8 sm:p-9 shadow-lg border ${
                room.popular ? "border-[#c9a227] ring-2 ring-[#c9a227]/40" : "border-[#c9a227]/30"
              } transition-all duration-300 hover:border-[#c9a227] hover:shadow-xl flex flex-col justify-between`}
            >
              {room.tagline && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-green-950 text-[#c9a227] border border-[#c9a227]/50 px-4 py-1 rounded-sm text-xs font-semibold capitalize tracking-wider shadow-md">
                  {room.tagline}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2 mt-1">
                  <span className="text-[11px] uppercase font-bold tracking-[0.22em] text-[#c9a227]">
                    THE BRIGHTLAND TARIFF
                  </span>
                </div>

                <div className="mb-5">
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-green-900 font-normal tracking-tight">{room.name}</h3>
                  <p className="text-sm font-serif italic text-brand-green-800/80 mt-0.5">{room.view}</p>
                </div>

                <div className="w-16 h-[1px] bg-[#c9a227]/50 mb-6" />

                <div className="mb-5">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">European Plan (Room charges only)</p>
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-brand-green-950 tracking-tight">
                    Rs. {room.price} <span className="text-xs font-sans font-normal text-gray-500">+ GST per day ({room.pax})</span>
                  </p>
                </div>

                <div className="bg-[#0a2318]/5 border border-[#c9a227]/25 rounded-sm p-4 mb-8">
                  <p className="text-xs text-[#2d4a3e] font-semibold leading-relaxed">
                    <span className="text-[#c9a227] font-bold">Extra PAX:</span> {room.extraBed}
                  </p>
                </div>
              </div>

              <Link 
                href="/rooms" 
                className="w-full bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] py-3.5 rounded-md font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-md border border-[#c9a227]/40 hover:border-[#c9a227] flex items-center justify-center gap-2 group text-center"
              >
                <span>EXPLORE ROOM</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </AnimatedFadeUp>
          ))}
        </div>

        {/* Dining & Additional Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Dining Info Section */}
          <AnimatedFadeUp className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-8 shadow-md border border-[#c9a227]/25 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-brand-green-900 mb-3 flex items-center">
                <Utensils className="mr-3 text-[#c9a227]" size={22} />
                Dining & Kitchen Facilities
              </h3>
              <p className="text-xs text-gray-600 mb-6 font-medium tracking-wide leading-relaxed">
                A La Carte Indian Cuisine available for breakfast, snacks, lunch and dinner.
              </p>
              
              <div className="p-4 bg-[#0a2318]/5 rounded-md border border-[#c9a227]/20 space-y-2">
                <div className="flex items-center text-sm font-semibold text-brand-green-950">
                  <Clock className="mr-2.5 text-[#c9a227]" size={18} />
                  <span>Service Timings: 7:30 AM to 10:30 PM</span>
                </div>
                <p className="text-xs text-[#3a4a40] pl-7">
                  Room service and multi-cuisine restaurant open daily for all resident guests.
                </p>
              </div>
            </div>
          </AnimatedFadeUp>

          {/* Additional Details */}
          <AnimatedFadeUp delay={0.2} className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-8 shadow-md border border-[#c9a227]/25 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-brand-green-900 mb-6 flex items-center">
                <FileText className="mr-3 text-[#c9a227]" size={22} />
                Additional Details
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-2.5">
                  <span className="text-[#3a4a40] font-medium">Extra PAX / Bed (Above 5 yrs)</span>
                  <span className="font-serif font-bold text-brand-green-950">Rs. 900 + GST per day</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-2.5">
                  <span className="text-[#3a4a40] font-medium">Group Tariff</span>
                  <span className="font-semibold text-brand-green-900">Group rates available on request</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-2.5">
                  <span className="text-[#3a4a40] font-medium">Taxes Applicable</span>
                  <span className="font-semibold text-brand-green-900">GST extra on accommodation and F&B</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-2.5">
                  <span className="text-[#3a4a40] font-medium">Off Season Discount</span>
                  <span className="font-semibold text-brand-green-950">As applicable</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="text-[#3a4a40] font-medium">Check-in / Checkout Time</span>
                  <span className="font-semibold text-brand-green-950 bg-[#0a2318]/10 border border-[#c9a227]/30 px-3 py-1 rounded-sm text-xs tracking-wider">12:00 NOON</span>
                </li>
              </ul>
            </div>
          </AnimatedFadeUp>
        </div>

        {/* Important Rules & Regulations Alert */}
        <AnimatedFadeUp className="bg-[#faf8f0]/95 backdrop-blur-md border border-amber-800/30 rounded-md p-8 mb-16 shadow-md">
          <h3 className="text-xl font-serif font-bold text-amber-900 mb-4 flex items-center">
            <AlertTriangle className="mr-2.5 text-[#c9a227]" size={22} />
            Important Rules & Regulations
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#3a4a40] font-medium">
            <li className="flex items-start">
              <span className="mr-2.5 text-[#c9a227] font-bold">•</span>
              <span><strong>Note:</strong> Tariff & Govt. taxes are subject to change without notice.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2.5 text-[#c9a227] font-bold">•</span>
              <span><strong>Stag entry is not allowed</strong> in our Hotel and such bookings will not be entertained.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2.5 text-[#c9a227] font-bold">•</span>
              <span>All rooms/suites are different in decoration and interiors. <strong>Some categories are not valley facing.</strong> Before booking please confirm from Hotel.</span>
            </li>
          </ul>
        </AnimatedFadeUp>

        {/* Accreditations & Direct Booking CTA */}
        <div className="border-t border-[#c9a227]/25 pt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center mb-12">
            
            <a href="https://himachaltourism.gov.in/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-[#faf8f0]/90 p-6 rounded-md border border-[#c9a227]/25 shadow-sm hover:border-[#c9a227] transition-all min-w-[220px]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">Registered With</p>
              <div className="relative w-32 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image src="/assets/accreditations/hp_tourism.jpg" alt="H.P. Tourism Department" fill className="object-contain" />
              </div>
              <h4 className="mt-3 text-base font-serif font-bold text-brand-green-900 group-hover:text-brand-green-700 transition-colors">H.P. Tourism Deptt.</h4>
            </a>

            <a href="https://hrani.net.in/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-[#faf8f0]/90 p-6 rounded-md border border-[#c9a227]/25 shadow-sm hover:border-[#c9a227] transition-all min-w-[220px]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">Member Of</p>
              <div className="relative w-32 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image src="/assets/accreditations/hrani.png" alt="H.R.A.N.I." fill className="object-contain" />
              </div>
              <h4 className="mt-3 text-base font-serif font-bold text-brand-green-900 group-hover:text-brand-green-700 transition-colors">H.R.A.N.I.</h4>
            </a>

            <a href="https://fhrai.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-[#faf8f0]/90 p-6 rounded-md border border-[#c9a227]/25 shadow-sm hover:border-[#c9a227] transition-all min-w-[220px]">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">Member Of</p>
              <div className="relative w-32 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image src="/assets/accreditations/fhrai.jpg" alt="F.H.R.A.I." fill className="object-contain" />
              </div>
              <h4 className="mt-3 text-base font-serif font-bold text-brand-green-900 group-hover:text-brand-green-700 transition-colors">F.H.R.A.I.</h4>
            </a>

          </div>
          
          <div className="bg-brand-green-950 text-[#faf8f0] rounded-md p-8 sm:p-10 border border-[#c9a227]/40 shadow-xl text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c9a227] font-bold mb-2">Exclusive Direct Offer</p>
            <p className="text-xl sm:text-2xl font-serif font-normal text-brand-yellow-50 mb-6">
              Off Season Discount: As applicable. <br />
              <span className="font-semibold text-[#c9a227]">Get best deals on direct booking!</span>
            </p>
            <a 
              href="https://wa.me/919816024100?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20room%20tariff%20and%20direct%20booking%20discount%20at%20Brightland%20Hotel." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#b08d1e] text-brand-green-950 px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-md transform hover:scale-105"
            >
              <span>Book via WhatsApp (Save 15%)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
