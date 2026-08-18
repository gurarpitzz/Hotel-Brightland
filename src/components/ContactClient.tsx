"use client";

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  Sun, 
  Snowflake, 
  CloudRain, 
  Leaf, 
  PhoneCall, 
  Send,
  Navigation,
  ShieldCheck
} from "lucide-react";
import { AnimatedFadeUp, AnimatedScaleUp } from "@/components/AnimatedWrappers";

const seasons = [
  {
    name: "Crisp Winter",
    season: "Winter (Dec - Feb)",
    icon: <Snowflake className="w-8 h-8 text-blue-500" />,
    gradient: "from-blue-500/10 via-sky-500/5 to-indigo-500/10 border-blue-200",
    badgeBg: "bg-blue-100 text-blue-800",
    description: "Reflected in crisp winter skies, snow-dusted pine trees, and cozy fireside comfort in our heated rooms.",
    highlight: "Crisp winter skies & mountain snowfall"
  },
  {
    name: "Fragrant Summer",
    season: "Summer (Mar - Jun)",
    icon: <Sun className="w-8 h-8 text-amber-500" />,
    gradient: "from-amber-500/10 via-orange-500/5 to-yellow-500/10 border-amber-200",
    badgeBg: "bg-amber-100 text-amber-800",
    description: "Embraced by the fragrant breeze of surrounding cedar forests, perfect for high tea in our lush terrace garden.",
    highlight: "Fragrance of cedar forests"
  },
  {
    name: "Romantic Monsoon",
    season: "Monsoon (Jul - Sep)",
    icon: <CloudRain className="w-8 h-8 text-emerald-600" />,
    gradient: "from-emerald-500/10 via-teal-500/5 to-green-500/10 border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-800",
    description: "Surrounded by romantic mists drifting through valleys as rain gently brushes the pine tops.",
    highlight: "Romantic mists of the monsoons"
  },
  {
    name: "Golden Autumn",
    season: "Autumn (Oct - Nov)",
    icon: <Leaf className="w-8 h-8 text-orange-600" />,
    gradient: "from-orange-500/10 via-amber-500/5 to-red-500/10 border-orange-200",
    badgeBg: "bg-orange-100 text-orange-800",
    description: "Bathed in the golden hill-sides of autumn, crisp mountain sunlight, and clear evening skies.",
    highlight: "Golden hill-sides of autumn"
  }
];

export default function ContactClient() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="relative bg-brand-green-900 text-white py-16 md:py-24 overflow-hidden shadow-lg">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fef08a_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedFadeUp>
            <span className="inline-flex items-center gap-2 bg-brand-yellow-400/20 text-brand-yellow-300 border border-brand-yellow-400/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              We Are Here To Assist You
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-cursive tracking-wide text-brand-yellow-200 mb-6">
              Contact Brightland Hotel
            </h1>
            <p className="text-base sm:text-lg text-brand-green-100 max-w-2xl mx-auto leading-relaxed">
              Reach out to us for room reservations, direct booking discount queries, travel guidance, or any special requests.
            </p>
          </AnimatedFadeUp>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">

        {/* Direct WhatsApp Deals Banner */}
        <AnimatedScaleUp>
          <div className="bg-gradient-to-r from-emerald-700 via-brand-green-800 to-emerald-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-emerald-500/30 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-emerald-300" />
                  Direct Booking Guarantee
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Get Best Deals & Lowest Rates On Direct Booking
                </h2>
                <p className="text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
                  Avoid extra commission fees! Connect with our front desk team directly on WhatsApp to get instant room availability, seasonal discounts, and up to 15% extra savings.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href="https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!%20I%20want%20to%20get%20the%20best%20deals%20and%20lowest%20rates%20for%20direct%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-brand-green-950 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-base sm:text-lg group"
                >
                  <MessageCircle className="w-6 h-6 fill-current text-brand-green-950 group-hover:animate-bounce" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedScaleUp>

        {/* Section: A Hotel for All Seasons */}
        <AnimatedFadeUp>
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-brand-green-700 font-extrabold text-xs uppercase tracking-widest bg-brand-yellow-100 px-3 py-1 rounded-full border border-brand-yellow-300">
                Shimla Year-Round Hospitality
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-green-950 font-serif">
                A Hotel For All Seasons
              </h2>
              <div className="w-20 h-1.5 bg-brand-yellow-400 mx-auto rounded-full" />
              
              <blockquote className="text-base sm:text-lg text-gray-700 italic font-medium leading-relaxed pt-2 px-2 sm:px-6 bg-brand-yellow-50/60 p-6 rounded-2xl border-l-4 border-brand-green-700">
                “Shimla’s many moods are reflected in crisp winter skies, the fragrance of cedar forests in summer, the romantic mists of the monsoons and the golden hill-sides of autumn. Each of these seasons can be experienced in the comfort and gracious service of Brightland Hotel, Shimla.”
              </blockquote>
            </div>

            {/* 4 Seasons Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {seasons.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg bg-gradient-to-b ${item.gradient} flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        {item.icon}
                      </div>
                      <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${item.badgeBg}`}>
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-brand-green-950">{item.season}</h3>
                      <p className="text-xs text-brand-green-800 font-semibold mt-0.5">{item.highlight}</p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/5">
                    <a
                      href={`https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!%20I%20am%20planning%20a%20visit%20during%20${encodeURIComponent(item.name)}.%20Please%20share%20room%20rates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-green-800 hover:text-brand-green-950 flex items-center gap-1 group/btn"
                    >
                      <span>Inquire for {item.name}</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </AnimatedFadeUp>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone Numbers */}
          <AnimatedFadeUp delay={0.1}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between space-y-6 hover:border-brand-green-300 transition-colors">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-brand-green-100 rounded-2xl flex items-center justify-center text-brand-green-800 shadow-inner">
                  <PhoneCall size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-950">Phone & WhatsApp</h3>
                  <p className="text-xs text-gray-500 mt-1">Direct lines for reservations and reception</p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div className="bg-brand-yellow-50/80 p-3.5 rounded-xl border border-brand-yellow-200">
                    <p className="font-bold text-brand-green-950 text-base">0177-2658275</p>
                    <p className="text-xs text-brand-green-700 font-semibold flex items-center gap-1 mt-0.5">
                      <Clock size={12} /> Reservations (10:00 AM – 6:00 PM)
                    </p>
                  </div>

                  <div className="space-y-1.5 px-1">
                    <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Reception Desk</p>
                    <a href="tel:01772803659" className="text-brand-green-900 font-bold hover:text-brand-green-700 block transition-colors">
                      0177-2803659
                    </a>
                    <a href="tel:01772813659" className="text-brand-green-900 font-bold hover:text-brand-green-700 block transition-colors">
                      0177-2813659
                    </a>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider">WhatsApp Direct</p>
                    <a 
                      href="https://wa.me/918219200074" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline flex items-center gap-1.5 mt-0.5"
                    >
                      <MessageCircle size={16} />
                      +91 8219200074
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFadeUp>

          {/* Email Address */}
          <AnimatedFadeUp delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between space-y-6 hover:border-brand-green-300 transition-colors">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-brand-yellow-100 rounded-2xl flex items-center justify-center text-brand-green-800 shadow-inner">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-950">Email Inquiry</h3>
                  <p className="text-xs text-gray-500 mt-1">Send us an official booking email or query</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="bg-brand-green-50 p-4 rounded-2xl border border-brand-green-200">
                    <p className="text-xs font-extrabold text-brand-green-800 uppercase tracking-wider mb-1">Official Email Address</p>
                    <a 
                      href="mailto:brightlandhotel@gmail.com" 
                      className="text-base font-bold text-brand-green-900 hover:text-brand-green-700 transition-colors break-all block"
                    >
                      brightlandhotel@gmail.com
                    </a>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    We ensure quick responses to all email inquiries regarding custom family packages, corporate stay bookings, and travel desk bookings.
                  </p>
                </div>
              </div>

              <a
                href="mailto:brightlandhotel@gmail.com?subject=Inquiry%20for%20Brightland%20Hotel%20Shimla"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-green-800 hover:bg-brand-green-900 text-white font-bold py-3 px-4 rounded-xl shadow transition-colors text-sm"
              >
                <Send size={16} />
                <span>Send Email Inquiry</span>
              </a>
            </div>
          </AnimatedFadeUp>

          {/* Address & Location */}
          <AnimatedFadeUp delay={0.3}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between space-y-6 hover:border-brand-green-300 transition-colors">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shadow-inner">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-950">Hotel Address</h3>
                  <p className="text-xs text-gray-500 mt-1">Prime central Shimla location</p>
                </div>

                <div className="space-y-3 pt-2 text-sm text-gray-700">
                  <p className="font-semibold leading-relaxed">
                    <span className="font-bold text-brand-green-950 block">Brightland Hotel Shimla</span>
                    Cosy Nook Estate,<br />
                    Near Army Training Command,<br />
                    Adjacent The Mall, Shimla - 171 003<br />
                    Himachal Pradesh, INDIA
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Geo Coordinates</p>
                    <p className="font-mono text-xs font-bold text-brand-green-900 mt-0.5">31.1051° N, 77.1672° E</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-green-950 font-extrabold py-3 px-4 rounded-xl shadow transition-colors text-sm"
              >
                <Navigation size={16} />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </AnimatedFadeUp>

        </div>

        {/* Interactive Query & Google Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Quick Inquiry Form */}
          <AnimatedFadeUp>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 space-y-6">
              <div>
                <span className="text-brand-green-700 font-extrabold text-xs uppercase tracking-widest bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-200">
                  Quick Query
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-green-950 mt-3 font-serif">
                  Send Us A Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill in your details below to open an instant WhatsApp message with our reservation team.
                </p>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                  const date = (form.elements.namedItem("date") as HTMLInputElement).value;
                  const guests = (form.elements.namedItem("guests") as HTMLSelectElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                  const text = `Hello Brightland Hotel!%0A*New Inquiry*%0A• Name: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Check-in Date: ${encodeURIComponent(date)}%0A• Guests: ${encodeURIComponent(guests)}%0A• Message: ${encodeURIComponent(message)}`;
                  window.open(`https://wa.me/918219200074?text=${text}`, "_blank");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-600 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-600 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Expected Check-in Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-600 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Number of Guests</label>
                    <select 
                      name="guests" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-600 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm bg-white"
                    >
                      <option value="1-2 Guests">1 - 2 Guests</option>
                      <option value="3-4 Guests (Family)">3 - 4 Guests (Family)</option>
                      <option value="5+ Guests (Group)">5+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Message or Special Request</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    placeholder="Tell us about your trip plans or room preference..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-600 focus:ring-2 focus:ring-brand-green-100 outline-none text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </AnimatedFadeUp>

          {/* Interactive Google Map Embed */}
          <AnimatedFadeUp delay={0.2}>
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 flex flex-col justify-between space-y-4 h-full">
              <div className="px-2">
                <h3 className="text-xl font-bold text-brand-green-950 font-serif">
                  Interactive Location Map
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Located near Army Training Command & adjacent to The Mall, Shimla
                </p>
              </div>

              <div className="w-full flex-1 min-h-[340px] rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative bg-gray-100">
                <iframe
                  title="Brightland Hotel Shimla Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.7118501256336!2d77.16462517625126!3d31.10510456754041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e826647249%3A0xb355d9dcdcd984b5!2sBrightland%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "340px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="px-2 pt-1 flex items-center justify-between text-xs text-gray-600">
                <span className="font-semibold text-brand-green-900">📍 Central Mall Road Access</span>
                <a 
                  href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-brand-green-700 hover:underline"
                >
                  Open in Google Maps App →
                </a>
              </div>
            </div>
          </AnimatedFadeUp>

        </div>

      </div>
    </div>
  );
}
