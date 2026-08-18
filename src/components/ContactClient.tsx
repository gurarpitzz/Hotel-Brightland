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
    icon: <Snowflake className="w-8 h-8 text-blue-600" />,
    gradient: "from-blue-50 via-sky-50 to-indigo-50 border-blue-200",
    badgeBg: "bg-blue-600 text-white",
    description: "Reflected in crisp winter skies, snow-dusted pine trees, and cozy fireside comfort in our heated rooms.",
    highlight: "Crisp winter skies & mountain snowfall"
  },
  {
    name: "Fragrant Summer",
    season: "Summer (Mar - Jun)",
    icon: <Sun className="w-8 h-8 text-amber-600" />,
    gradient: "from-amber-50 via-orange-50 to-yellow-50 border-amber-200",
    badgeBg: "bg-amber-600 text-white",
    description: "Embraced by the fragrant breeze of surrounding cedar forests, perfect for high tea in our lush terrace garden.",
    highlight: "Fragrance of cedar forests"
  },
  {
    name: "Romantic Monsoon",
    season: "Monsoon (Jul - Sep)",
    icon: <CloudRain className="w-8 h-8 text-emerald-700" />,
    gradient: "from-emerald-50 via-teal-50 to-green-50 border-emerald-200",
    badgeBg: "bg-emerald-700 text-white",
    description: "Surrounded by romantic mists drifting through valleys as rain gently brushes the pine tops.",
    highlight: "Romantic mists of the monsoons"
  },
  {
    name: "Golden Autumn",
    season: "Autumn (Oct - Nov)",
    icon: <Leaf className="w-8 h-8 text-orange-700" />,
    gradient: "from-orange-50 via-amber-50 to-red-50 border-orange-200",
    badgeBg: "bg-orange-700 text-white",
    description: "Bathed in the golden hill-sides of autumn, crisp mountain sunlight, and clear evening skies.",
    highlight: "Golden hill-sides of autumn"
  }
];

export default function ContactClient() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen pb-20">
      
      {/* Embedded High-Priority CSS Overrides */}
      <style jsx global>{`
        .contact-page-wrapper {
          color: #022c22 !important;
        }
        .contact-card-white {
          background-color: #ffffff !important;
          color: #022c22 !important;
        }
        .contact-card-white h1,
        .contact-card-white h2,
        .contact-card-white h3,
        .contact-card-white h4,
        .contact-card-white p,
        .contact-card-white span,
        .contact-card-white label,
        .contact-card-white div {
          color: #022c22 !important;
        }
        .contact-heading-dark {
          color: #022c22 !important;
        }
        .contact-sub-emerald {
          color: #047857 !important;
        }
        .contact-sub-gray {
          color: #4b5563 !important;
        }
        .contact-input-field {
          color: #111827 !important;
          background-color: #ffffff !important;
          border-color: #d1d5db !important;
        }
        .contact-input-field::placeholder {
          color: #6b7280 !important;
          opacity: 1 !important;
        }
      `}</style>

      {/* Hero Header */}
      <section className="relative bg-brand-green-900 text-white py-16 md:py-24 overflow-hidden shadow-lg">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fef08a_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedFadeUp>
            <span 
              style={{ color: "#fde047", backgroundColor: "rgba(250, 204, 21, 0.2)", borderColor: "rgba(250, 204, 21, 0.4)" }} 
              className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm"
            >
              <Sparkles size={14} style={{ color: "#facc15" }} />
              We Are Here To Assist You
            </span>
            <h1 
              style={{ color: "#fde047" }} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-cursive tracking-wide mb-6"
            >
              Contact Brightland Hotel
            </h1>
            <p 
              style={{ color: "#d1fae5" }} 
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Reach out to us for room reservations, direct booking discount queries, travel guidance, or any special requests.
            </p>
          </AnimatedFadeUp>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16 contact-page-wrapper">

        {/* Direct WhatsApp Deals Banner */}
        <AnimatedScaleUp>
          <div className="bg-gradient-to-r from-emerald-800 via-brand-green-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-emerald-500/40 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 text-center lg:text-left">
                <div 
                  style={{ color: "#a7f3d0", backgroundColor: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(52, 211, 153, 0.4)" }} 
                  className="inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider"
                >
                  <ShieldCheck size={14} style={{ color: "#6ee7b7" }} />
                  Direct Booking Guarantee
                </div>
                <h2 
                  style={{ color: "#ffffff" }} 
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
                >
                  Get Best Deals & Lowest Rates On Direct Booking
                </h2>
                <p 
                  style={{ color: "#ecfdf5" }} 
                  className="text-sm sm:text-base max-w-2xl leading-relaxed"
                >
                  Avoid extra commission fees! Connect with our front desk team directly on WhatsApp to get instant room availability, seasonal discounts, and up to 15% extra savings.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href="https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!%20I%20want%20to%20get%20the%20best%20deals%20and%20lowest%20rates%20for%20direct%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#022c22", backgroundColor: "#10b981" }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 text-base sm:text-lg group"
                >
                  <MessageCircle className="w-6 h-6 fill-current group-hover:animate-bounce" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedScaleUp>

        {/* Section: A Hotel for All Seasons */}
        <AnimatedFadeUp>
          <div className="contact-card-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200 space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span 
                style={{ color: "#022c22", backgroundColor: "#d1fae5", borderColor: "#a7f3d0" }} 
                className="font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border inline-block"
              >
                Shimla Year-Round Hospitality
              </span>
              <h2 
                style={{ color: "#022c22" }} 
                className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight contact-heading-dark"
              >
                A Hotel For All Seasons
              </h2>
              <div className="w-24 h-1.5 bg-emerald-700 mx-auto rounded-full" />
              
              <blockquote 
                style={{ color: "#022c22", backgroundColor: "#ecfdf5" }} 
                className="text-base sm:text-lg italic font-semibold leading-relaxed p-6 rounded-2xl border-l-4 border-emerald-700 shadow-sm"
              >
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
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        {item.icon}
                      </div>
                      <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm ${item.badgeBg}`}>
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <h3 style={{ color: "#022c22" }} className="font-extrabold text-lg contact-heading-dark">{item.season}</h3>
                      <p style={{ color: "#047857" }} className="text-xs font-bold mt-0.5 contact-sub-emerald">{item.highlight}</p>
                    </div>
                    <p style={{ color: "#374151" }} className="text-xs leading-relaxed font-medium contact-sub-gray">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <a
                      href={`https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!%20I%20am%20planning%20a%20visit%20during%20${encodeURIComponent(item.name)}.%20Please%20share%20room%20rates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#047857" }}
                      className="text-xs font-extrabold flex items-center gap-1 group/btn contact-sub-emerald"
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
            <div className="contact-card-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full flex flex-col justify-between space-y-6 hover:border-emerald-400 transition-colors">
              <div className="space-y-4">
                <div style={{ backgroundColor: "#d1fae5", color: "#047857" }} className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">
                  <PhoneCall size={28} />
                </div>
                <div>
                  <h3 style={{ color: "#022c22" }} className="text-2xl font-extrabold contact-heading-dark">Phone & WhatsApp</h3>
                  <p style={{ color: "#4b5563" }} className="text-xs font-medium mt-1 contact-sub-gray">Direct lines for reservations and reception</p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div style={{ backgroundColor: "#ecfdf5", borderColor: "#a7f3d0" }} className="p-4 rounded-2xl border">
                    <p style={{ color: "#022c22" }} className="font-black text-xl tracking-wide contact-heading-dark">0177-2658275</p>
                    <p style={{ color: "#047857" }} className="text-xs font-bold flex items-center gap-1.5 mt-1 contact-sub-emerald">
                      <Clock size={14} className="shrink-0" /> 
                      Reservations (10:00 AM – 6:00 PM)
                    </p>
                  </div>

                  <div className="space-y-2 px-1 pt-1">
                    <p style={{ color: "#047857" }} className="text-xs font-black uppercase tracking-wider contact-sub-emerald">Reception Desk</p>
                    <a href="tel:01772803659" style={{ color: "#022c22" }} className="font-extrabold text-base hover:text-emerald-700 block transition-colors contact-heading-dark">
                      0177-2803659
                    </a>
                    <a href="tel:01772813659" style={{ color: "#022c22" }} className="font-extrabold text-base hover:text-emerald-700 block transition-colors contact-heading-dark">
                      0177-2813659
                    </a>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <p style={{ color: "#047857" }} className="text-xs font-black uppercase tracking-wider mb-1 contact-sub-emerald">WhatsApp Direct</p>
                    <a 
                      href="https://wa.me/918219200074" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: "#047857" }}
                      className="font-extrabold text-base hover:underline flex items-center gap-1.5 contact-sub-emerald"
                    >
                      <MessageCircle size={18} />
                      +91 8219200074
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFadeUp>

          {/* Email Address */}
          <AnimatedFadeUp delay={0.2}>
            <div className="contact-card-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full flex flex-col justify-between space-y-6 hover:border-emerald-400 transition-colors">
              <div className="space-y-4">
                <div style={{ backgroundColor: "#d1fae5", color: "#047857" }} className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 style={{ color: "#022c22" }} className="text-2xl font-extrabold contact-heading-dark">Email Inquiry</h3>
                  <p style={{ color: "#4b5563" }} className="text-xs font-medium mt-1 contact-sub-gray">Send us an official booking email or query</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div style={{ backgroundColor: "#ecfdf5", borderColor: "#a7f3d0" }} className="p-4 rounded-2xl border">
                    <p style={{ color: "#047857" }} className="text-xs font-black uppercase tracking-wider mb-1.5 contact-sub-emerald">Official Email Address</p>
                    <a 
                      href="mailto:brightlandhotel@gmail.com" 
                      style={{ color: "#022c22" }}
                      className="text-base sm:text-lg font-black hover:text-emerald-700 transition-colors break-all block contact-heading-dark"
                    >
                      brightlandhotel@gmail.com
                    </a>
                  </div>

                  <p style={{ color: "#4b5563" }} className="text-xs leading-relaxed font-medium contact-sub-gray">
                    We ensure quick responses to all email inquiries regarding custom family packages, corporate stay bookings, and travel desk bookings.
                  </p>
                </div>
              </div>

              <a
                href="mailto:brightlandhotel@gmail.com?subject=Inquiry%20for%20Brightland%20Hotel%20Shimla"
                style={{ color: "#ffffff", backgroundColor: "#047857" }}
                className="w-full inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-colors text-sm"
              >
                <Send size={16} />
                <span>Send Email Inquiry</span>
              </a>
            </div>
          </AnimatedFadeUp>

          {/* Address & Location */}
          <AnimatedFadeUp delay={0.3}>
            <div className="contact-card-white rounded-3xl p-8 shadow-xl border border-gray-200 h-full flex flex-col justify-between space-y-6 hover:border-emerald-400 transition-colors">
              <div className="space-y-4">
                <div style={{ backgroundColor: "#d1fae5", color: "#047857" }} className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 style={{ color: "#022c22" }} className="text-2xl font-extrabold contact-heading-dark">Hotel Address</h3>
                  <p style={{ color: "#4b5563" }} className="text-xs font-medium mt-1 contact-sub-gray">Prime central Shimla location</p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <p style={{ color: "#1f2937" }} className="font-semibold leading-relaxed contact-sub-gray">
                    <span style={{ color: "#022c22" }} className="font-extrabold text-base block contact-heading-dark">Brightland Hotel Shimla</span>
                    Cosy Nook Estate,<br />
                    Near Army Training Command,<br />
                    Adjacent The Mall, Shimla - 171 003<br />
                    Himachal Pradesh, INDIA
                  </p>

                  <div className="pt-3 border-t border-gray-200">
                    <p style={{ color: "#047857" }} className="text-xs font-black uppercase tracking-wider contact-sub-emerald">Geo Coordinates</p>
                    <p style={{ color: "#022c22" }} className="font-mono text-xs font-bold mt-0.5 contact-heading-dark">31.1051° N, 77.1672° E</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff", backgroundColor: "#047857" }}
                className="w-full inline-flex items-center justify-center gap-2 font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-colors text-sm"
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
            <div className="contact-card-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200 space-y-6">
              <div>
                <span 
                  style={{ color: "#022c22", backgroundColor: "#d1fae5", borderColor: "#a7f3d0" }} 
                  className="font-extrabold text-xs uppercase tracking-widest px-3 py-1 rounded-full border inline-block"
                >
                  Quick Query
                </span>
                <h3 
                  style={{ color: "#022c22" }} 
                  className="text-2xl sm:text-3xl font-extrabold mt-3 font-serif contact-heading-dark"
                >
                  Send Us A Direct Message
                </h3>
                <p style={{ color: "#4b5563" }} className="text-xs sm:text-sm mt-1 font-medium contact-sub-gray">
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
                    <label style={{ color: "#111827" }} className="block text-xs font-bold mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      style={{ color: "#111827", backgroundColor: "#ffffff", borderColor: "#d1d5db" }}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-medium contact-input-field"
                    />
                  </div>
                  <div>
                    <label style={{ color: "#111827" }} className="block text-xs font-bold mb-1">Phone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="+91 98765 43210" 
                      style={{ color: "#111827", backgroundColor: "#ffffff", borderColor: "#d1d5db" }}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-medium contact-input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ color: "#111827" }} className="block text-xs font-bold mb-1">Expected Check-in Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      style={{ color: "#111827", backgroundColor: "#ffffff", borderColor: "#d1d5db" }}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-medium contact-input-field"
                    />
                  </div>
                  <div>
                    <label style={{ color: "#111827" }} className="block text-xs font-bold mb-1">Number of Guests</label>
                    <select 
                      name="guests" 
                      style={{ color: "#111827", backgroundColor: "#ffffff", borderColor: "#d1d5db" }}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-medium contact-input-field"
                    >
                      <option value="1-2 Guests">1 - 2 Guests</option>
                      <option value="3-4 Guests (Family)">3 - 4 Guests (Family)</option>
                      <option value="5+ Guests (Group)">5+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ color: "#111827" }} className="block text-xs font-bold mb-1">Your Message or Special Request</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    placeholder="Tell us about your trip plans or room preference..." 
                    style={{ color: "#111827", backgroundColor: "#ffffff", borderColor: "#d1d5db" }}
                    className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-medium resize-none contact-input-field"
                  />
                </div>

                <button
                  type="submit"
                  style={{ color: "#ffffff", backgroundColor: "#059669" }}
                  className="w-full font-black py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </AnimatedFadeUp>

          {/* Interactive Google Map Embed */}
          <AnimatedFadeUp delay={0.2}>
            <div className="contact-card-white rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-200 flex flex-col justify-between space-y-4 h-full">
              <div className="px-2">
                <h3 
                  style={{ color: "#022c22" }} 
                  className="text-2xl font-extrabold font-serif contact-heading-dark"
                >
                  Interactive Location Map
                </h3>
                <p style={{ color: "#4b5563" }} className="text-xs font-medium mt-0.5 contact-sub-gray">
                  Located near Army Training Command & adjacent to The Mall, Shimla
                </p>
              </div>

              <div className="w-full flex-1 min-h-[340px] rounded-2xl overflow-hidden shadow-inner border border-gray-300 relative bg-gray-100">
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

              <div className="px-2 pt-1 flex items-center justify-between text-xs">
                <span style={{ color: "#022c22" }} className="font-extrabold contact-heading-dark">📍 Central Mall Road Access</span>
                <a 
                  href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#047857" }}
                  className="font-black hover:underline contact-sub-emerald"
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
