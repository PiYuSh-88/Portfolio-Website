"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative w-full overflow-hidden">
      {/* Background glow effects for premium Apple-like dark aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-accent font-medium tracking-wide mb-4 inline-block"
          >
            Hi, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white leading-tight"
          >
            Akshit Prashar
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-4xl text-white/80 font-medium mb-8"
          >
            AI/ML Engineer & Full Stack Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent, scalable systems. I specialize in training models, engineering robust backends, and crafting stunning frontend experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:bg-white/90"
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
            </Link>

            <a href="https://drive.google.com/file/d/1j9LR-Uy21W-hyIdHE43r-9etH3-Wem1_/view" download="Akshit_Prashar_CV.pdf">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:bg-white/20"
              >
                Download CV <Download size={18} />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
