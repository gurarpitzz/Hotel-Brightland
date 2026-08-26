import { Check, Info, AlertTriangle, Coffee, Utensils, Award, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedFadeUp } from "@/components/AnimatedWrappers";

export const metadata = {
  title: "Tariff | Brightland Hotel, Shimla",
  description: "View our current FIT tariffs approved by the H.P. Tourism Department for our various rooms and suites in Shimla.",
};

const roomRates = [
  { name: "Imperial Room", pax: "Valid for 2 PAX", price: "3,800", popular: false },
  { name: "Royal Room", pax: "Valid for 2 PAX", price: "4,600", popular: true },
  { name: "Corporate Room", pax: "Valid for 2 PAX", price: "5,500", popular: false },
  { name: "Regular Suite", pax: "Valid for 4 PAX", price: "5,500", popular: true },
  { name: "Regal Suite", pax: "Valid for 2 PAX", price: "6,000", popular: false },
  { name: "Presidential Room", pax: "Valid for 2 PAX", price: "6,000", popular: false },
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Room Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roomRates.map((room, idx) => (
            <AnimatedFadeUp 
              key={idx} 
              delay={idx * 0.08}
              className={`relative bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-7 shadow-md border ${
                room.popular ? "border-[#c9a227] ring-2 ring-[#c9a227]/30" : "border-[#c9a227]/25"
              } transition-all duration-300 hover:border-[#c9a227] flex flex-col justify-between`}
            >
              {room.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-brand-green-950 text-[#c9a227] border border-[#c9a227]/40 px-3.5 py-0.5 rounded-sm text-[11px] font-semibold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c9a227]">
                    THE BRIGHTLAND TARIFF
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-serif text-brand-green-900 font-normal tracking-tight">{room.name}</h3>
                  <p className="text-xs font-serif italic text-brand-green-800/80">{room.pax}</p>
                </div>

                <div className="w-12 h-[1px] bg-[#c9a227]/50 mb-5" />

                <div className="mb-6">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-0.5">Starting Rate</p>
                  <p className="text-3xl font-serif font-bold text-brand-green-950 tracking-tight">
                    ₹{room.price} <span className="text-xs font-sans font-normal text-gray-500">/ day</span>
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#3a4a40] font-medium border-t border-b border-[#c9a227]/15 py-4">
                  <li className="flex items-center">
                    <Check size={15} className="text-[#c9a227] mr-2 shrink-0" />
                    <span>European Plan (Room Only)</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={15} className="text-[#c9a227] mr-2 shrink-0" />
                    <span>Free Wi-Fi (Reception/Restaurant)</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={15} className="text-[#c9a227] mr-2 shrink-0" />
                    <span>Daily Housekeeping</span>
                  </li>
                </ul>
              </div>

              <Link 
                href="/rooms" 
                className="w-full bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] py-2.5 rounded-md font-semibold text-xs uppercase tracking-[0.18em] transition-all shadow-sm border border-[#c9a227]/40 hover:border-[#c9a227] flex items-center justify-center gap-2 group text-center"
              >
                <span>EXPLORE ROOM</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </AnimatedFadeUp>
          ))}
        </div>

        {/* Extra Bed & Meal Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Meals Section */}
          <AnimatedFadeUp className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-8 shadow-md border border-[#c9a227]/25">
            <h3 className="text-2xl font-serif text-brand-green-900 mb-2 flex items-center">
              <Utensils className="mr-3 text-[#c9a227]" size={22} />
              Meal Rates (Fixed Menu)
            </h3>
            <p className="text-xs text-gray-600 mb-6 font-medium tracking-wide">Table D&apos; Hote per PAX (above 5 years) per day:</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0a2318]/5 rounded-md border border-[#c9a227]/20">
                <div className="flex items-center font-serif text-lg text-brand-green-900 font-bold">
                  <Coffee className="mr-3 text-[#c9a227]" size={20} />
                  Breakfast
                </div>
                <div className="font-serif font-bold text-2xl text-brand-green-950">₹450</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0a2318]/5 rounded-md border border-[#c9a227]/20">
                <div className="flex items-center font-serif text-lg text-brand-green-900 font-bold">
                  <Utensils className="mr-3 text-[#c9a227]" size={20} />
                  Lunch / Dinner
                </div>
                <div className="font-serif font-bold text-2xl text-brand-green-950">₹700</div>
              </div>
            </div>
          </AnimatedFadeUp>

          {/* Add-ons & Discounts */}
          <AnimatedFadeUp delay={0.2} className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-8 shadow-md border border-[#c9a227]/25 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-brand-green-900 mb-6 flex items-center">
                <FileText className="mr-3 text-[#c9a227]" size={22} />
                Additional Details
              </h3>
              
              <ul className="space-y-3.5 text-sm">
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-3">
                  <span className="text-[#3a4a40] font-medium">Extra PAX / Bed (Above 5 yrs)</span>
                  <span className="font-serif font-bold text-brand-green-950 text-base">₹900 / day</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-3">
                  <span className="text-[#3a4a40] font-medium">Group Tariff</span>
                  <span className="font-semibold text-brand-green-900">Available on request</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#c9a227]/15 pb-3">
                  <span className="text-[#3a4a40] font-medium">Taxes Applicable</span>
                  <span className="font-semibold text-brand-green-900">GST extra on Room & F&B</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="text-[#3a4a40] font-medium">Check-in / Check-out</span>
                  <span className="font-semibold text-brand-green-950 bg-[#0a2318]/10 text-brand-green-950 border border-[#c9a227]/30 px-3 py-1 rounded-sm text-xs tracking-wider">12:00 NOON</span>
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
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#3a4a40] font-medium">
            <li className="flex items-start">
              <span className="mr-2 text-[#c9a227] font-bold">•</span>
              <span><strong>Stag entry is not allowed</strong> in our Hotel and such bookings will not be entertained.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#c9a227] font-bold">•</span>
              <span>All rooms/suites are different in decoration and interiors. <strong>Some categories are not valley facing.</strong> Before booking please confirm from Hotel.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#c9a227] font-bold">•</span>
              <span>Tariff & Govt. taxes are subject to change without notice.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#c9a227] font-bold">•</span>
              <span>Wi-Fi connection is limited to the Hotel Reception and Restaurant only.</span>
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
