"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, TreePine, Car, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const facilities = [
  {
    title: "Multi-Cuisine Restaurant",
    description: "Embark on a culinary journey at our signature restaurant, where every meal is a celebration of flavor and tradition. Our expert chefs meticulously craft a diverse menu featuring authentic Himachali delicacies, aromatic Indian curries, zesty Chinese woks, and elegant Continental plates. Sourced from the freshest local ingredients, our dining experience is thoughtfully designed to indulge the senses and cater to every discerning palate.",
    icon: <Utensils className="w-8 h-8 text-brand-green-700" />,
    images: [
      "/assets/Restaurant/Restaurant 1.jpg",
      "/assets/Restaurant/Restaurant 2.jpg",
      "/assets/Restaurant/Restaurant 3.jpg"
    ],
    pdfEmbed: "/assets/BL-Menu.pdf"
  },
  {
    title: "The Terrace Garden",
    description: "Step into our lush, beautifully manicured Terrace Garden—a serene oasis suspended above the bustling world below. Surrounded by the majestic Shimla mountains, it is the ultimate sanctuary for morning meditation, afternoon high tea, or an intimate evening under the stars. Breathe in the crisp Himalayan air as you unwind amidst vibrant blooms and panoramic valley views.",
    icon: <TreePine className="w-8 h-8 text-brand-green-700" />,
    images: [
      "/assets/Terrace Garden/Garden (4).JPG",
      "/assets/Terrace Garden/Garden (5).JPG",
      "/assets/Terrace Garden/Garden (2).jpg",
      "/assets/Terrace Garden/Garden (1).JPG",
    ]
  },
  {
    title: "Exclusive Private Parking",
    description: "Navigating the winding roads of Shimla is thrilling, but finding parking shouldn't be. We offer the rare luxury of ample, secure, and complimentary on-site parking exclusively for our guests. Drive directly into our private premises and enjoy complete peace of mind, knowing your vehicle is safe and accessible at all times.",
    icon: <Car className="w-8 h-8 text-brand-green-700" />,
    images: [
      "/assets/Hotel building/Hotel building (1).jpg",
      "/assets/Hotel building/brightland hotel complex.jpg",
      "/assets/Hotel building/Hotel building (4).JPG",
      "/assets/Hotel building/Hotel building (5).jpg"
    ]
  },
  {
    title: "24/7 Guest Services",
    description: "True luxury lies in effortless convenience. Our dedicated reception and room service teams are at your disposal around the clock. Whether you require a midnight snack, early morning travel arrangements, or a sudden change in itinerary, our staff is committed to anticipating your needs and delivering flawless, highly personalized service throughout your stay.",
    icon: <Clock className="w-8 h-8 text-brand-green-700" />,
    images: [
      "/assets/Reception/reception.JPG"
    ]
  },
];

// Carousel Component for each Facility
function FacilityCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (images.length === 1) {
    return (
      <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
        <Image src={images[0]} alt="Facility Image" fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group bg-black/5">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, idx) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full" key={idx}>
              <Image src={src} alt={`Facility Image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/80 text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">
        <ChevronLeft size={24} />
      </button>
      <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/80 text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-6 font-cursive tracking-wider">
            Premium Facilities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience exceptional hospitality with our curated amenities designed to make your Shimla vacation unforgettable.
          </p>
        </motion.div>

        <div className="space-y-24">
          {facilities.map((facility, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 items-center lg:items-stretch ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Images Side */}
                <div className="w-full lg:w-1/2">
                  <FacilityCarousel images={facility.images} />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center justify-center p-4 bg-brand-green-100 rounded-2xl shadow-sm text-brand-green-800">
                    {facility.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900">
                    {facility.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* PDF Embed for Restaurant */}
                  {facility.pdfEmbed && (
                    <div className="mt-8 rounded-xl overflow-hidden border border-brand-green-200 shadow-md bg-white">
                      <div className="bg-brand-green-900 text-white py-2 px-4 font-semibold text-sm tracking-wide">
                        View Our Menu
                      </div>
                      <iframe 
                        src={`${facility.pdfEmbed}#view=FitH`} 
                        className="w-full h-[400px]" 
                        title={`${facility.title} Menu`}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
