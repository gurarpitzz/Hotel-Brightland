"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function Home() {
  const { setIsCartOpen } = useBooking();

  const trustIndicators = [
    "Family Friendly",
    "Prime Shimla Location",
    "Free Parking",
    "Direct Booking Savings",
    "Mountain Views",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-brand-green-900">
        <Image
          src="/assets/Hotel building/Hotel building (1).jpg"
          alt="Brightland Hotel Building"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 shadow-sm">
            Experience the True <br className="hidden sm:block" />
            <span className="text-brand-yellow-100">Beauty of Shimla</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8">
            Enjoy premium comfort, breathtaking mountain views, and exceptional hospitality at Brightland Hotel. Just minutes away from Shimla's finest attractions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/rooms"
              className="bg-brand-green-700 hover:bg-brand-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Explore Rooms
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-white hover:bg-brand-yellow-50 text-brand-green-900 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Book Directly
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-brand-yellow-50 py-8 border-b border-brand-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle2 className="text-brand-green-700" size={24} />
                <span className="text-brand-green-900 font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-brand-green-800">Prime Location in Shimla</h2>
            <p className="text-gray-600 text-lg">
              Nestled strategically to give you the best of both worlds: tranquil mountain serenity and proximity to major attractions.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-green-700" />
                <span>5 minutes from Old ISBT</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-brand-green-700" />
                <span>15 minutes walk to the historic Toy Train</span>
              </li>
            </ul>
            <a
              href="https://maps.app.goo.gl/aBS4dAoDwjUdKePy5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-brand-green-50 text-brand-green-800 border border-brand-green-200 px-6 py-3 rounded-lg font-semibold hover:bg-brand-yellow-50 transition-colors"
            >
              Get Directions via Google Maps
            </a>
          </div>
          <div className="flex-1 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl">
             <Image
              src="/assets/View from Hotel/View  (2).jpg"
              alt="View from Brightland Hotel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
