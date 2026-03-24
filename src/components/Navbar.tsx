"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hide nav when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl flex items-center justify-between">
        <Link href="#home" className="text-xl font-extrabold tracking-tighter text-white hover:text-accent transition-colors">
          AP<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <Link href="#contact" className="text-sm font-medium border border-white/20 px-4 py-2 rounded-full text-white/90">
            Contact Me
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
