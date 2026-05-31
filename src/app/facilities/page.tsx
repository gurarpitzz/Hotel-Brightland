"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, TreePine, Car, Clock } from "lucide-react";

const facilities = [
  {
    title: "Multi-Cuisine Restaurant",
    description: "Enjoy delicious local Himachali, Indian, Chinese, and Continental dishes prepared fresh by our expert chefs.",
    icon: <Utensils className="w-6 h-6 text-brand-green-700" />,
    image: "/assets/Restaurant/Restaurant 1.jpg",
  },
  {
    title: "Terrace Garden",
    description: "Relax in our beautiful terrace garden with a cup of tea while enjoying the panoramic views of the Shimla mountains.",
    icon: <TreePine className="w-6 h-6 text-brand-green-700" />,
    image: "/assets/Terrace Garden/Garden (2).jpg",
  },
  {
    title: "Free Parking",
    description: "Ample and safe parking space available for all our guests right at the hotel premises—a rare luxury in Shimla.",
    icon: <Car className="w-6 h-6 text-brand-green-700" />,
    image: "/assets/Hotel building/Hotel building (1).jpg",
  },
  {
    title: "24/7 Room Service",
    description: "Round-the-clock room service to cater to all your needs, ensuring a hassle-free and luxurious stay.",
    icon: <Clock className="w-6 h-6 text-brand-green-700" />,
    image: "/assets/Reception/reception.JPG",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
};

export default function FacilitiesPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-6 font-cursive tracking-wider">
            Premium Facilities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience exceptional hospitality with our curated amenities designed to make your Shimla vacation unforgettable.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-brand-green-100 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-white p-4 rounded-full shadow-lg border border-brand-green-50">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-green-900 mb-4 pr-12">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
