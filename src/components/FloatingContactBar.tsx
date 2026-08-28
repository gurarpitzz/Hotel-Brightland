"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function FloatingContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
      <div className="grid grid-cols-3 h-16">
        <a 
          href="tel:+918219200074" 
          className="flex flex-col items-center justify-center text-brand-green-800 hover:bg-brand-yellow-50 transition-colors"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </a>
        
        <a 
          href="https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-brand-green-700 text-white hover:bg-brand-green-800 transition-colors"
        >
          <MessageCircle size={20} className="mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>
        
        <a 
          href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5" 
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-event="directions_click"
          onClick={() => {
            if (typeof window !== "undefined") {
              (window as any).dataLayer = (window as any).dataLayer || [];
              (window as any).dataLayer.push({ event: "directions_click" });
            }
          }}
          className="flex flex-col items-center justify-center text-brand-green-800 hover:bg-brand-yellow-50 transition-colors"
        >
          <MapPin size={20} className="mb-1" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  );
}
