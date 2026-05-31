"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setIsCartOpen } = useBooking();

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Tariff", href: "/tariff" },
    { name: "Facilities", href: "/facilities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Policy", href: "/policy" },
    { name: "Travel Desk", href: "/travel-desk" },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-green-700 ${
                  pathname === link.href ? "text-brand-green-800 border-b-2 border-brand-green-700 py-1" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-brand-green-700 hover:bg-brand-green-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md"
            >
              Book via WhatsApp (Save 15%)
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-green-700 p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                pathname === link.href
                  ? "bg-brand-yellow-50 text-brand-green-800"
                  : "text-gray-600 hover:bg-gray-50 hover:text-brand-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full bg-brand-green-700 hover:bg-brand-green-800 text-white px-6 py-3 rounded-full font-bold text-center shadow-md"
            >
              Book via WhatsApp (Save 15%)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
