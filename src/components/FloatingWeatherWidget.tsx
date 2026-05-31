"use client";

import { useState } from "react";
import { CloudSun, X } from "lucide-react";
import Script from "next/script";

export default function FloatingWeatherWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-brand-green-700 hover:bg-brand-green-800 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center border-2 border-brand-green-600"
        aria-label="Toggle Weather Widget"
      >
        <CloudSun size={28} />
      </button>

      {/* Weather Popup */}
      <div
        className={`fixed bottom-36 md:bottom-24 right-4 md:right-6 z-50 w-72 md:w-80 bg-brand-green-900 rounded-2xl shadow-2xl border border-brand-green-700 overflow-hidden transition-all duration-300 transform origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center bg-brand-green-950 p-4 border-b border-brand-green-800">
          <h3 className="font-bold text-brand-yellow-200 flex items-center">
            <CloudSun size={20} className="mr-2" />
            Live Weather
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-green-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-2 min-h-[300px] bg-brand-green-900">
          <a 
            className="weatherwidget-io" 
            href="https://forecast7.com/en/31d1077d17/shimla/" 
            data-label_1="SHIMLA" 
            data-label_2="WEATHER" 
            data-font="Arial" 
            data-icons="Climacons Animated" 
            data-theme="pure" 
            data-basecolor="transparent"
            data-textcolor="#fefce8"
          >
            SHIMLA WEATHER
          </a>
          <Script
            id="weather-widget-script-floating"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                !function(d,s,id){
                  var js,fjs=d.getElementsByTagName(s)[0];
                  if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src='https://weatherwidget.io/js/widget.min.js';
                    fjs.parentNode.insertBefore(js,fjs);
                  }
                }(document,'script','weatherwidget-io-js');
              `,
            }}
          />
        </div>
      </div>
    </>
  );
}
