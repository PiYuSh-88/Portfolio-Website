"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const hackathons = [
  {
    title: "Smart Healthcare Hackathon",
    tag: "NLP + Healthcare",
    description:
      "Developed an AI-powered healthcare assistant that analyzes user symptoms and provides basic guidance using NLP techniques and machine learning concepts.",
    bullets: [
      "Implemented natural language processing for symptom understanding",
      "Designed a clean full-stack interface for real-time interaction",
      "Focused on building a practical and socially impactful solution",
    ],
    color: "from-emerald-500/10 to-emerald-500/5",
    borderHover: "hover:border-emerald-500/40",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-400/20",
  },
  {
    title: "AI Innovation Hackathon",
    tag: "ML + Full Stack",
    description:
      "Built a recommendation system that suggests personalized content based on user behavior and preferences.",
    bullets: [
      "Applied machine learning concepts for recommendation logic",
      "Integrated APIs and developed a responsive frontend",
      "Improved user experience through intelligent suggestions",
    ],
    color: "from-accent/10 to-accent/5",
    borderHover: "hover:border-accent/40",
    tagColor: "text-accent bg-accent/10 border-accent/20",
  },
];

export default function HackathonsSection() {
  return (
    <Section id="hackathons">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
        Hackathons<span className="text-accent">.</span>
      </h2>

      <div className="max-w-3xl mx-auto grid gap-6">
        {hackathons.map((hackathon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`p-6 rounded-2xl bg-cardBg border border-white/5 ${hackathon.borderHover} transition-all duration-300 group relative overflow-hidden`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hackathon.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-accent" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white/90">{hackathon.title}</h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${hackathon.tagColor}`}
                >
                  {hackathon.tag}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-3">{hackathon.description}</p>
              <ul className="space-y-1.5">
                {hackathon.bullets.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/50 text-sm leading-relaxed">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
