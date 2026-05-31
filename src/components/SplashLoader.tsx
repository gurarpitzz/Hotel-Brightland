"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-yellow-50 h-screen w-screen"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6">
              {/* Using a standard img tag prevents Next.js hydration delays for critical splash screens */}
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/assets/logo/logo.png"
                alt="Brightland Hotel Logo"
                className="w-full h-full object-contain"
                width={256}
                height={256}
              />
            </div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="text-5xl sm:text-6xl font-cursive text-brand-green-800 text-center"
            >
              Brightland Hotel
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
