"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative w-full overflow-hidden">
      {/* Background glow effects for premium Apple-like dark aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/10 rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center md:text-left"
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
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight"
            >
              Akshit Prashar
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl text-white/80 font-medium mb-8"
            >
              AI/ML Engineer &amp; Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed mx-auto md:mx-0"
            >
              Building intelligent, scalable systems. I specialize in training models, engineering robust backends, and crafting stunning frontend experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
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

          {/* RIGHT: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 flex justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/40 via-white/10 to-accent/10 blur-md scale-105 animate-pulse pointer-events-none" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/profile.png"
                  alt="Akshit Prashar"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
