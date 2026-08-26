"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactMapSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `Hello Brightland Hotel!%0A*New Website Inquiry*%0A• Name: ${encodeURIComponent(name)}%0A• Email: ${encodeURIComponent(email)}%0A• Inquiry Type: ${encodeURIComponent(subject)}%0A• Message: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/918219200074?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section 
      className="py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden text-[#1e1e1e]"
      style={{ backgroundImage: "url('/assets/contactbg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal font-serif text-[#1b3d2f] mb-3">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#4a5448] uppercase">
            HAVE QUESTIONS? WE&apos;RE HERE TO HELP.
          </p>
        </motion.div>

        {/* Content Row: Left Form, Right Map & Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Clean Minimalist Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-950">Thank You!</h3>
                <p className="text-emerald-800 text-sm">
                  Your message has been initiated via WhatsApp. Our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b6b6b] mb-2">
                      NAME
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Your Name" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-[#1e1e1e] focus:outline-none focus:border-[#3d2c23] transition-colors placeholder:text-gray-400 font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b6b6b] mb-2">
                      EMAIL
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="Your Email" 
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-[#1e1e1e] focus:outline-none focus:border-[#3d2c23] transition-colors placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b6b6b] mb-2">
                    SUBJECT
                  </label>
                  <input 
                    type="text" 
                    name="subject" 
                    required 
                    placeholder="Inquiry Type" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-[#1e1e1e] focus:outline-none focus:border-[#3d2c23] transition-colors placeholder:text-gray-400 font-medium"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6b6b6b] mb-2">
                    MESSAGE
                  </label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="How can we assist you?" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-base text-[#1e1e1e] focus:outline-none focus:border-[#3d2c23] transition-colors resize-none placeholder:text-gray-400 font-medium"
                  />
                </div>

                {/* Send Button */}
                <div>
                  <button 
                    type="submit"
                    className="bg-[#3d2c23] hover:bg-[#2b1f18] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-3"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Side: Map & Address Info (Harsha Layout) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Embedded Google Map with Rounded Border Shadow */}
            <div className="w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <iframe 
                src="https://maps.google.com/maps?q=Brightland+Hotel,+Shimla&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Brightland Hotel Location Map"
              />
            </div>

            {/* Address & Quick Contact Details (Horizontal Grid under map) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6b6b6b] mb-2">
                  ADDRESS
                </p>
                <p className="text-sm font-medium text-[#1e1e1e] leading-relaxed">
                  Brightland Hotel Shimla,<br />
                  Cosy Nook Estate, Near Army Training Command,<br />
                  Adjacent The Mall, Shimla - 171003,<br />
                  Himachal Pradesh
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6b6b6b] mb-2">
                  QUICK CONTACT
                </p>
                <div className="space-y-1 text-sm font-medium text-[#1e1e1e]">
                  <p>
                    <a href="tel:01772658275" className="hover:text-[#3d2c23] transition-colors">
                      +91 177 2658275
                    </a>
                  </p>
                  <p>
                    <a href="https://wa.me/918219200074" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 font-bold transition-colors">
                      +91 8219200074 (WhatsApp)
                    </a>
                  </p>
                  <p>
                    <a href="mailto:brightlandhotel@gmail.com" className="hover:text-[#3d2c23] transition-colors">
                      brightlandhotel@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
