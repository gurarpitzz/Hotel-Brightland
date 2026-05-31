"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, FileWarning, CreditCard, Users, Ban } from "lucide-react";

const policies = [
  {
    title: "Check-In & Check-Out",
    icon: <Clock className="w-8 h-8 text-brand-green-700" />,
    items: [
      "Check-in Time: 12:00 PM (Noon)",
      "Check-out Time: 11:00 AM",
      "Early check-in and late check-out are subject to availability and may incur additional charges."
    ]
  },
  {
    title: "Mandatory Identification",
    icon: <ShieldCheck className="w-8 h-8 text-brand-green-700" />,
    items: [
      "Valid original photo ID is mandatory at the time of check-in.",
      "Accepted IDs: Aadhar Card, Passport, Voter ID, or Driving License.",
      "Note: PAN Cards are strictly not accepted."
    ]
  },
  {
    title: "Booking & Cancellations",
    icon: <CreditCard className="w-8 h-8 text-brand-green-700" />,
    items: [
      "A booking deposit is required to confirm reservations.",
      "Cancellations 7 days prior to arrival date will receive a full refund.",
      "Cancellations within 7 days of arrival will be charged a one-night retention fee.",
      "No-shows will be charged the full booking amount."
    ]
  },
  {
    title: "Guest Rules",
    icon: <Users className="w-8 h-8 text-brand-green-700" />,
    items: [
      "Unmarried couples must be at least 18 years old and provide valid ID.",
      "Loud music or parties are not allowed in the rooms to respect other guests.",
      "The hotel reserves the right of admission."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function PolicyPage() {
  return (
    <div className="bg-brand-yellow-50 min-h-screen py-16 relative overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-green-100 rounded-full mb-4">
            <FileWarning className="w-8 h-8 text-brand-green-800" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-900 mb-6 font-cursive tracking-wider">
            Hotel Policies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To ensure a safe and comfortable stay for all our guests, please review our hotel regulations and booking policies.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {policies.map((policy, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-brand-green-100 hover:shadow-xl hover:border-brand-green-200 transition-all duration-300"
            >
              <div className="flex items-center mb-6 border-b border-brand-green-50 pb-4">
                <div className="p-3 bg-brand-yellow-50 rounded-2xl mr-4">
                  {policy.icon}
                </div>
                <h2 className="text-2xl font-bold text-brand-green-900">{policy.title}</h2>
              </div>
              <ul className="space-y-4">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-green-700 mt-2 mr-3"></span>
                    <span className="text-gray-600 leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a 
            href="/terms" 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-green-200 text-brand-green-800 font-semibold rounded-full hover:bg-brand-green-50 hover:border-brand-green-300 transition-all duration-300"
          >
            View Comprehensive Terms & Conditions
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-center text-gray-500 flex items-center justify-center space-x-2"
        >
          <Ban className="w-5 h-5 text-gray-400" />
          <p className="text-sm">Brightland Hotel Shimla maintains a strict no-smoking policy in all indoor areas.</p>
        </motion.div>
      </div>
    </div>
  );
}
