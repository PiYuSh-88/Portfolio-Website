"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Section({ id, children, className = "", delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-32 w-full mx-auto px-6 md:px-12 max-w-6xl ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} 
    >
      {children}
    </motion.section>
  );
}
