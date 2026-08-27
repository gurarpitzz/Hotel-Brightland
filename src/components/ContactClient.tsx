"use client";

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
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
import PageHeaderBanner from "@/components/PageHeaderBanner";

const seasons = [
  {
    name: "Crisp Winter",
    season: "Winter (Dec - Feb)",
    icon: <Snowflake className="w-6 h-6 text-[#c9a227]" />,
    description: "Reflected in crisp winter skies, snow-dusted pine trees, and cozy fireside comfort in our heated rooms.",
    highlight: "Crisp winter skies & mountain snowfall"
  },
  {
    name: "Fragrant Summer",
    season: "Summer (Mar - Jun)",
    icon: <Sun className="w-6 h-6 text-[#c9a227]" />,
    description: "Embraced by the fragrant breeze of surrounding cedar forests, perfect for high tea in our lush terrace garden.",
    highlight: "Fragrance of cedar forests"
  },
  {
    name: "Romantic Monsoon",
    season: "Monsoon (Jul - Sep)",
    icon: <CloudRain className="w-6 h-6 text-[#c9a227]" />,
    description: "Surrounded by romantic mists drifting through valleys as rain gently brushes the pine tops.",
    highlight: "Romantic mists of the monsoons"
  },
  {
    name: "Golden Autumn",
    season: "Autumn (Oct - Nov)",
    icon: <Leaf className="w-6 h-6 text-[#c9a227]" />,
    description: "Bathed in the golden hill-sides of autumn, crisp mountain sunlight, and clear evening skies.",
    highlight: "Golden hill-sides of autumn"
  }
];

export default function ContactClient() {
  return (
    <div 
      className="bg-[#faf8f0] bg-cover bg-top bg-no-repeat min-h-screen pb-24"
      style={{ backgroundImage: "url('/assets/longbg.png')" }}
    >
      <PageHeaderBanner
        tagline="We Are Here To Assist You"
        title="Contact Us"
        description="Reach out to us for room reservations, direct booking best rate queries, travel guidance, or special requests."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Direct WhatsApp Deals Banner */}
        <AnimatedScaleUp>
          <div className="bg-brand-green-950 text-white rounded-md p-6 sm:p-10 shadow-md border border-[#c9a227]/40 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 border border-[#c9a227]/40 bg-[#c9a227]/10 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                  <ShieldCheck size={14} className="text-[#c9a227]" />
                  Direct Booking Guarantee
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-brand-yellow-50 tracking-tight">
                  Get Best Deals & Lowest Rates On Direct Booking
                </h2>
                <p className="text-xs sm:text-sm text-brand-yellow-100/90 max-w-2xl leading-relaxed font-light">
                  Avoid extra commission fees! Connect with our front desk team directly on WhatsApp to get instant room availability, seasonal discounts, and up to 15% extra savings.
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href="https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!%20I%20want%20to%20get%20the%20best%20deals%20and%20lowest%20rates%20for%20direct%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-md shadow-sm transition-all bg-[#10b981] hover:bg-[#059669] text-white border border-[#c9a227]/40 group"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedScaleUp>

        {/* Section: A Hotel for All Seasons */}
        <AnimatedFadeUp>
          <div className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 sm:p-10 shadow-md border border-[#c9a227]/25 space-y-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a227] border border-[#c9a227]/30 px-3 py-1 rounded-sm inline-block">
                Shimla Year-Round Hospitality
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-green-900 font-normal tracking-tight">
                A Hotel For All Seasons
              </h2>
              <div className="w-16 h-[1px] bg-[#c9a227]/50 mx-auto" />
              
              <blockquote className="text-xs sm:text-sm md:text-base font-serif italic text-brand-green-900/90 leading-relaxed p-5 rounded-md border-l-2 border-[#c9a227] bg-[#0a2318]/5">
                “Shimla’s many moods are reflected in crisp winter skies, the fragrance of cedar forests in summer, the romantic mists of the monsoons and the golden hill-sides of autumn. Each of these seasons can be experienced in the comfort and gracious service of Brightland Hotel, Shimla.”
              </blockquote>
            </div>

            {/* 4 Seasons Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
              {seasons.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#faf8f0] rounded-md p-5 border border-[#c9a227]/25 hover:border-[#c9a227]/50 shadow-sm transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-brand-green-950/90 border border-[#c9a227]/40 flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 bg-brand-green-950 text-[#c9a227] border border-[#c9a227]/40 rounded-sm uppercase tracking-wider">
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-brand-green-900 font-normal">{item.season}</h3>
                      <p className="text-[11px] font-semibold text-[#c9a227] mt-0.5">{item.highlight}</p>
                    </div>
                    <p className="text-[#3a4a40] text-xs leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#c9a227]/20">
                    <a
                      href={`https://wa.me/918219200074?text=Hello%20Brightland%20Hotel!%20I%20am%20planning%20a%20visit%20during%20${encodeURIComponent(item.name)}.%20Please%20share%20room%20rates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#c9a227] uppercase tracking-wider flex items-center gap-1 hover:underline"
                    >
                      <span>Inquire for {item.name}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </AnimatedFadeUp>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Numbers - WhatsApp HIGHLIGHTED, Reservations Standard */}
          <AnimatedFadeUp delay={0.1}>
            <div className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 sm:p-7 shadow-md border border-[#c9a227]/25 hover:border-[#c9a227]/50 transition-all duration-300 h-full flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 border-b border-[#c9a227]/20 pb-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green-950/90 border border-[#c9a227]/40 flex items-center justify-center text-[#c9a227] shadow-sm">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-brand-green-900 font-normal">Phone & WhatsApp</h3>
                    <p className="text-[11px] text-[#3a4a40] font-medium">Direct lines for reservations and reception</p>
                  </div>
                </div>

                <div className="space-y-3 pt-1 text-xs sm:text-sm">
                  {/* Reservations - Standard formatting (unhighlighted) */}
                  <div className="p-3 bg-[#0a2318]/5 border border-[#c9a227]/20 rounded-md">
                    <p className="text-[11px] text-[#2d4a3e] font-semibold flex items-center gap-1.5 mb-1">
                      <Clock size={14} className="text-[#c9a227] shrink-0" />
                      <span>Reservations (10:00 AM – 6:00 PM)</span>
                    </p>
                    <a href="tel:01772658275" className="font-serif font-bold text-lg text-brand-green-950 hover:text-[#c9a227] transition-colors block">0177-2658275</a>
                  </div>

                  {/* Reception Desk */}
                  <div className="px-1 space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#2d4a3e]">Reception Desk</p>
                    <div className="flex flex-col gap-0.5 font-medium text-brand-green-900">
                      <a href="tel:01772803659" className="hover:text-[#c9a227] transition-colors">0177-2803659</a>
                      <a href="tel:01772813659" className="hover:text-[#c9a227] transition-colors">0177-2813659</a>
                    </div>
                  </div>

                  {/* WhatsApp Direct - HIGHLIGHTED CALLOUT BOX */}
                  <div className="bg-brand-green-950 border border-[#c9a227]/40 rounded-md p-4 text-[#c9a227] shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a227] mb-1">
                      WhatsApp Direct (Highlighted)
                    </p>
                    <a 
                      href="https://wa.me/918219200074" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-serif font-bold text-lg text-white hover:text-[#c9a227] flex items-center gap-2 transition-colors"
                    >
                      <MessageCircle size={18} className="text-[#c9a227]" />
                      <span>+91 8219200074</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedFadeUp>

          {/* Email Address - Includes BOTH mail@brightlandhotel.com & brightlandhotel@gmail.com */}
          <AnimatedFadeUp delay={0.2}>
            <div className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 sm:p-7 shadow-md border border-[#c9a227]/25 hover:border-[#c9a227]/50 transition-all duration-300 h-full flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 border-b border-[#c9a227]/20 pb-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green-950/90 border border-[#c9a227]/40 flex items-center justify-center text-[#c9a227] shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-brand-green-900 font-normal">Email Inquiry</h3>
                    <p className="text-[11px] text-[#3a4a40] font-medium">Send us an official booking email or query</p>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Official Emails Callout Box */}
                  <div className="bg-[#0a2318]/5 border border-[#c9a227]/20 rounded-md p-3.5 space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#c9a227]">Official Email Addresses</p>
                    
                    <a 
                      href="mailto:mail@brightlandhotel.com" 
                      className="text-sm font-semibold text-brand-green-950 hover:text-[#c9a227] transition-colors break-all block"
                    >
                      mail@brightlandhotel.com
                    </a>

                    <a 
                      href="mailto:brightlandhotel@gmail.com" 
                      className="text-sm font-semibold text-brand-green-950 hover:text-[#c9a227] transition-colors break-all block"
                    >
                      brightlandhotel@gmail.com
                    </a>
                  </div>

                  <p className="text-xs text-[#3a4a40] leading-relaxed font-medium">
                    We ensure quick responses to all email inquiries regarding custom family packages, corporate stay bookings, and travel desk bookings.
                  </p>
                </div>
              </div>

              <a
                href="mailto:mail@brightlandhotel.com?subject=Inquiry%20for%20Brightland%20Hotel%20Shimla"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold text-xs uppercase tracking-[0.18em] py-3 px-4 rounded-md shadow-sm bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] border border-[#c9a227]/40 transition-colors"
              >
                <Send size={15} />
                <span>Send Email Inquiry</span>
              </a>
            </div>
          </AnimatedFadeUp>

          {/* Address & Location */}
          <AnimatedFadeUp delay={0.3}>
            <div className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 sm:p-7 shadow-md border border-[#c9a227]/25 hover:border-[#c9a227]/50 transition-all duration-300 h-full flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 border-b border-[#c9a227]/20 pb-3">
                  <div className="w-9 h-9 rounded-full bg-brand-green-950/90 border border-[#c9a227]/40 flex items-center justify-center text-[#c9a227] shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-brand-green-900 font-normal">Hotel Address</h3>
                    <p className="text-[11px] text-[#3a4a40] font-medium">Prime central Shimla location</p>
                  </div>
                </div>

                <div className="space-y-3 pt-1 text-xs sm:text-sm">
                  <p className="text-[#3a4a40] leading-relaxed font-medium">
                    <span className="font-serif font-bold text-base text-brand-green-900 block mb-0.5">Brightland Hotel Shimla</span>
                    Cosy Nook Estate,<br />
                    Near Army Training Command,<br />
                    Adjacent The Mall, Shimla - 171 003<br />
                    Himachal Pradesh, INDIA
                  </p>

                  <div className="pt-2.5 border-t border-[#c9a227]/20">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#c9a227]">Geo Coordinates</p>
                    <p className="font-mono text-xs font-bold text-brand-green-950 mt-0.5">31.1051° N, 77.1672° E</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold text-xs uppercase tracking-[0.18em] py-3 px-4 rounded-md shadow-sm bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] border border-[#c9a227]/40 transition-colors"
              >
                <Navigation size={15} />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </AnimatedFadeUp>

        </div>

        {/* Interactive Query & Google Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Quick Inquiry Form */}
          <AnimatedFadeUp>
            <div className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 sm:p-8 shadow-md border border-[#c9a227]/25 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a227]">
                  Quick Query
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-green-900 font-normal tracking-tight mt-1">
                  Send Us A Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#3a4a40] font-medium mt-1">
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
                    <label className="block text-xs font-bold text-brand-green-950 mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-4 py-2.5 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm text-brand-green-950 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-green-950 mb-1">Phone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-2.5 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm text-brand-green-950 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-green-950 mb-1">Expected Check-in Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      className="w-full px-4 py-2.5 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm text-brand-green-950 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-green-950 mb-1">Number of Guests</label>
                    <select 
                      name="guests" 
                      className="w-full px-4 py-2.5 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm text-brand-green-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227]"
                    >
                      <option value="1-2 Guests">1 - 2 Guests</option>
                      <option value="3-4 Guests (Family)">3 - 4 Guests (Family)</option>
                      <option value="5+ Guests (Group)">5+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-green-950 mb-1">Your Message or Special Request</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    placeholder="Tell us about your trip plans or room preference..." 
                    className="w-full px-4 py-2.5 bg-[#faf8f0] border border-[#c9a227]/30 rounded-md text-sm text-brand-green-950 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green-900 hover:bg-brand-green-950 text-brand-yellow-50 hover:text-[#c9a227] border border-[#c9a227]/40 font-semibold text-xs uppercase tracking-[0.18em] py-3.5 px-6 rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </AnimatedFadeUp>

          {/* Interactive Google Map Embed */}
          <AnimatedFadeUp delay={0.2}>
            <div className="bg-[#faf8f0]/95 backdrop-blur-md rounded-md p-6 shadow-md border border-[#c9a227]/25 flex flex-col justify-between space-y-4 h-full">
              <div className="px-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a227]">Location Map</span>
                <h3 className="text-2xl font-serif text-brand-green-900 font-normal tracking-tight mt-0.5">
                  Interactive Location Map
                </h3>
                <p className="text-xs text-[#3a4a40] font-medium mt-0.5">
                  Located near Army Training Command & adjacent to The Mall, Shimla
                </p>
              </div>

              <div className="w-full flex-1 min-h-[340px] rounded-md overflow-hidden shadow-inner border border-[#c9a227]/30 relative bg-brand-green-950/10">
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

              <div className="px-1 pt-1 flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-green-900">📍 Central Mall Road Access</span>
                <a 
                  href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#c9a227] uppercase tracking-wider hover:underline"
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
