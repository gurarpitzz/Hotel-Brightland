"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, Tag, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferDropdownOpen, setIsOfferDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { setIsCartOpen, calculateTotal } = useBooking();
  const calc = calculateTotal();

  // Reset splash screen on double click logo for debugging
  const handleLogoDoubleClick = () => {
    sessionStorage.removeItem("hasShownSplash");
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-open offer box popup as a slider from above on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasClosed = sessionStorage.getItem("hasClosedOfferBanner");
      if (!hasClosed) {
        setIsOfferDropdownOpen(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOfferDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCloseOffer = () => {
    setIsOfferDropdownOpen(false);
    sessionStorage.setItem("hasClosedOfferBanner", "true");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Tariff", href: "/tariff" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Policy", href: "/policy" },
    { name: "Travel Desk", href: "/travel-desk" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <Link href="/"
            className="flex-shrink-0 cursor-pointer select-none flex items-center space-x-2 sm:space-x-3"
            onDoubleClick={handleLogoDoubleClick}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image 
                src="/assets/logo/logo.png" 
                alt="Brightland Hotel Logo" 
                fill 
                className="object-contain" 
              />
            </div>
            <span className="font-cursive text-[1.4rem] sm:text-3xl tracking-tight text-brand-green-800 mt-1 sm:mt-2 whitespace-nowrap">
              Brightland Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-serif text-base xl:text-lg font-bold tracking-wide transition-colors hover:text-brand-green-700 whitespace-nowrap ${
                  pathname === link.href ? "text-brand-green-800 border-b-2 border-brand-green-700 py-0.5" : "text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA with Slide-Down Popover & Cart Icon */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* 1. Book via WhatsApp Button (Left) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOfferDropdownOpen(!isOfferDropdownOpen)}
                className="bg-brand-green-700 hover:bg-brand-green-800 text-white px-5 py-2.5 rounded-full font-bold text-xs xl:text-sm transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Book via WhatsApp (Save Extra)</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isOfferDropdownOpen ? "rotate-180" : ""}`} 
                />
              </button>

              {/* Oberoi-style Slide-Down Popup Card */}
              <AnimatePresence>
                {isOfferDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -45, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -45, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="absolute right-0 top-full mt-3 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl z-50 border border-brand-green-800/20 origin-top-right"
                  >
                    <div className="relative h-[380px] w-full p-6 flex flex-col justify-between text-white">
                      <Image
                        src="/assets/View from Hotel/slide-show-03.gif"
                        alt="Brightland Hotel Scenic View"
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-brand-green-950/70 to-black/40" />

                      {/* Top Badge & Close Button */}
                      <div className="relative z-10 flex justify-between items-center">
                        <span className="bg-brand-yellow-400 text-brand-green-950 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Tag size={12} />
                          Direct Booking Offer
                        </span>
                        <button
                          onClick={handleCloseOffer}
                          className="text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-1.5 rounded-full transition-colors backdrop-blur-sm"
                          aria-label="Close offer dropdown"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      {/* Content & Action */}
                      <div className="relative z-10 space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-serif">
                            ENJOY <span className="text-brand-yellow-400">EXTRA SAVINGS</span>
                          </h3>
                          <div className="w-14 h-1 bg-brand-yellow-400 rounded-full" />
                        </div>

                        <p className="text-sm text-gray-200 leading-relaxed font-normal">
                          Book directly with Brightland Hotel via WhatsApp to receive an exclusive discount on all room & suite reservations, plus instant support.
                        </p>

                        <button
                          onClick={() => {
                            setIsOfferDropdownOpen(false);
                            setIsCartOpen(true);
                          }}
                          className="w-full mt-2 bg-brand-green-700 hover:bg-brand-green-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm border border-brand-green-500/30"
                        >
                          <span>Book via WhatsApp Now</span>
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Cart Icon Button (Right of WhatsApp Button) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-brand-green-900 hover:bg-brand-green-50 rounded-full transition-all border border-brand-green-300 hover:border-brand-green-700 shadow-sm shrink-0"
              aria-label="View Reservation Cart"
            >
              <ShoppingBag size={22} />
              {calc.totalRooms > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a227] text-brand-green-950 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                  {calc.totalRooms}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu & Cart buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-brand-green-900 hover:bg-brand-green-50 rounded-full transition-colors border border-brand-green-200"
              aria-label="View Reservation Cart"
            >
              <ShoppingBag size={22} />
              {calc.totalRooms > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c9a227] text-brand-green-950 font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-sm">
                  {calc.totalRooms}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-green-700 p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-24 space-y-1 shadow-2xl fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 rounded-md font-serif text-xl font-bold tracking-wide ${
                pathname === link.href
                  ? "bg-brand-yellow-50 text-brand-green-800"
                  : "text-gray-800 hover:bg-gray-50 hover:text-brand-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3 pb-8">
            <button
              onClick={() => {
                setIsOfferDropdownOpen(!isOfferDropdownOpen);
              }}
              className="w-full bg-brand-green-700 hover:bg-brand-green-800 text-white px-6 py-3 rounded-full font-bold text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Book via WhatsApp (Save Extra)</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isOfferDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isOfferDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-3 rounded-2xl overflow-hidden shadow-xl border border-brand-green-800/20 relative h-[360px] p-5 flex flex-col justify-between text-white"
                >
                  <Image
                    src="/assets/View from Hotel/slide-show-03.gif"
                    alt="Brightland Hotel Scenic View"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-brand-green-950/70 to-black/40" />

                  <div className="relative z-10 flex justify-between items-center">
                    <span className="bg-brand-yellow-400 text-brand-green-950 font-extrabold text-xs px-2.5 py-0.5 rounded-full uppercase">
                      Direct Offer
                    </span>
                    <button onClick={handleCloseOffer} className="text-white/80 p-1">
                      <X size={18} />
                    </button>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-bold text-white font-serif">
                      ENJOY <span className="text-brand-yellow-400">EXTRA SAVINGS</span>
                    </h3>
                    <p className="text-xs text-gray-200 leading-relaxed">
                      Book directly via WhatsApp for an exclusive discount on all room reservations.
                    </p>
                    <button
                      onClick={() => {
                        setIsOfferDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                        setIsCartOpen(true);
                      }}
                      className="w-full mt-1 bg-brand-green-700 hover:bg-brand-green-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1 shadow-lg"
                    >
                      <span>Book via WhatsApp</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </header>
  );
}
