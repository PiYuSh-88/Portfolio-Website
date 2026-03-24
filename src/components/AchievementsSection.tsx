"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Trophy, Shield } from "lucide-react";

const achievements = [
  {
    icon: <Shield className="text-accent" size={22} />,
    title: "ML Systems Builder",
    period: null,
    description:
      "Designed and implemented machine learning-based systems including recommendation engines and NLP-based analyzers.",
    color: "from-accent/10 to-accent/5",
    borderHover: "hover:border-accent/40",
  },
  {
    icon: <Trophy className="text-accent" size={22} />,
    title: "Coding Milestone",
    period: "Feb 2026",
    description:
      "Achieved advanced milestone through consistent problem solving and practical implementation in AI/ML and DSA.",
    color: "from-amber-500/10 to-amber-500/5",
    borderHover: "hover:border-amber-500/40",
  },
];

export default function AchievementsSection() {
  return (
    <Section id="achievements">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight text-center">
        Achievements<span className="text-accent">.</span>
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

        <div className="flex flex-col gap-10">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-6 items-start group"
            >
              {/* Timeline node */}
              <div className="relative shrink-0 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-cardBg border border-white/10 group-hover:border-accent/50 transition-colors duration-300 flex items-center justify-center z-10">
                  {item.icon}
                </div>
              </div>

              {/* Card */}
              <div
                className={`flex-1 p-6 rounded-2xl bg-cardBg border border-white/5 ${item.borderHover} transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="sm:hidden">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
                    {item.period && (
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
