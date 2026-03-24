"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Matriculation",
    school: "Mount Litera Zee School",
    location: "Kathua, Jammu & Kashmir",
    period: "Apr 2019 – Mar 2021",
    detail: "Percentage: 91",
    color: "from-green-500/10 to-green-500/5",
    borderHover: "hover:border-green-500/40",
    accentColor: "text-green-400",
    nodeBorder: "group-hover:border-green-400/50",
  },
  {
    degree: "Intermediate",
    school: "Mount Litera Zee School",
    location: "Kathua, Jammu & Kashmir",
    period: "Apr 2021 – Mar 2023",
    detail: "Percentage: 92",
    color: "from-sky-500/10 to-sky-500/5",
    borderHover: "hover:border-sky-500/40",
    accentColor: "text-sky-400",
    nodeBorder: "group-hover:border-sky-400/50",
  },
  {
    degree: "Bachelor of Technology",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "Present",
    detail: "Computer Science and Engineering · CGPA: 7.86",
    color: "from-accent/10 to-accent/5",
    borderHover: "hover:border-accent/40",
    accentColor: "text-accent",
    nodeBorder: "group-hover:border-accent/50",
  },
];

export default function EducationSection() {
  return (
    <Section id="education">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight text-center">
        Education<span className="text-accent">.</span>
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

        <div className="flex flex-col gap-10">
          {education.map((edu, i) => (
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
                <div
                  className={`w-10 h-10 rounded-full bg-cardBg border border-white/10 ${edu.nodeBorder} transition-colors duration-300 flex items-center justify-center z-10`}
                >
                  <GraduationCap className={edu.accentColor} size={18} />
                </div>
              </div>

              {/* Card */}
              <div
                className={`flex-1 p-6 rounded-2xl bg-cardBg border border-white/5 ${edu.borderHover} transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white/90">{edu.degree}</h3>
                    <span className={`text-xs font-medium ${edu.accentColor} bg-white/5 border border-white/10 px-2 py-0.5 rounded-full`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-white/70 font-medium mb-0.5">{edu.school}</p>
                  <p className="text-white/40 text-sm mb-3">{edu.location}</p>
                  <p className={`text-sm font-semibold ${edu.accentColor}`}>{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
