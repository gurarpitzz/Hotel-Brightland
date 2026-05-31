"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedFadeUp({ children, className = "", delay = 0 }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps extends AnimatedProps {
  direction?: "left" | "right";
}

export function AnimatedSlideIn({ children, className = "", delay = 0, direction = "left" }: SlideInProps) {
  const xOffset = direction === "left" ? -30 : 30;
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedScaleUp({ children, className = "", delay = 0 }: AnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
