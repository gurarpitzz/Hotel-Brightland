"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the splash screen has already been shown in this session
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");
    if (!hasShownSplash) {
      setIsVisible(true);
      sessionStorage.setItem("hasShownSplash", "true");
      
      // Auto-dismiss after 2.5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible && typeof window !== 'undefined' && sessionStorage.getItem("hasShownSplash")) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-yellow-50 h-screen w-screen"
        >
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6">
              <Image
                src="/assets/logo/logo.png"
                alt="Brightland Hotel Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl sm:text-6xl font-cursive text-brand-green-800 text-center"
            >
              Brightland Hotel
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
