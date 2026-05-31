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
      <section className="relative min-h-screen w-full bg-brand-green-900">
        <Image
          src="/assets/Hotel building/Hotel building (5).jpg"
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

      {/* About & Legacy Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow-50 rounded-l-full opacity-50 -z-10 transform translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-brand-green-900 mb-6 tracking-tight">
              A Timeless Escape in the Heart of Shimla
            </h2>
            <h3 className="text-xl text-brand-green-700 font-medium mb-8 italic">
              Where Imperial Heritage Meets Modern Luxury
            </h3>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
              <p>
                As one of Shimla&apos;s most prestigious and historic properties, Brightland Hotel offers an unparalleled experience in the former summer capital of Imperial India. Open year-round, our estate provides a sanctuary for every season—whether you are seeking a romantic honeymoon, a distinguished corporate retreat, or a deeply relaxing mountain getaway. Step into our thoughtfully curated, luxuriously appointed suites and indulge in the finest authentic Indian cuisine.
              </p>
              <p>
                Lose yourself in the mesmerizing, ever-changing moods of the Himalayas. Awaken to the scent of whispering pines, watch the floating mists roll through the valleys, and cozy up as snowflakes gently blanket the slate roofs. By dusk, watch the horizon come alive as the distant twinkling lights of Tara Devi, Chail, Subathu, and Kasauli illuminate the mountain sky.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-brand-yellow-50 rounded-3xl p-8 md:p-12 border border-brand-yellow-100 shadow-sm">
            <div className="space-y-4">
              <div className="inline-block bg-brand-green-800 text-brand-yellow-200 font-bold px-4 py-2 rounded-full text-sm mb-2 shadow-sm">
                Established 1959
              </div>
              <h3 className="text-3xl font-bold text-brand-green-900">A Heritage Woven in Legend</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our legacy runs deep. Brightland is the proud successor to the legendary Imperial, Chambers, and Central Hotels—once housed within the sprawling Wyming Estate of the Murree Hills. Today, we are passionately managed by third and fourth-generation hoteliers who carry forward an unbroken tradition of excellence.
              </p>
              <p className="text-brand-green-800 font-bold text-xl mt-4 italic">
                At Brightland, hospitality is not just a service—it is a cherished way of life.
              </p>
            </div>
            
            <div className="relative h-72 md:h-full w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <Image 
                src="/assets/Hotel building/Hotel building (1).jpg" 
                alt="Brightland Hotel Legacy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-green-900/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
                <p className="text-brand-green-900 font-extrabold">The Best Address in Shimla</p>
                <p className="text-gray-600 text-sm font-medium">Since 1959</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-brand-green-800">The Perfect Starting Point</h2>
            <p className="text-gray-600 text-lg">
              Strategically positioned to offer the absolute best of both worlds: deep, tranquil mountain serenity combined with effortless walking access to Shimla&apos;s most iconic attractions.
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
          </div>
          <div className="flex-1 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl border border-brand-green-100">
            <iframe 
              src="https://maps.google.com/maps?q=Brightland+Hotel,+Shimla&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
