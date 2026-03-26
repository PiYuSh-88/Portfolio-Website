"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Basic Python towards AI/ML",
    issuer: "CsePathshala",
    period: "Oct – Nov 2023",
    description:
      "Foundational Python training with a focus on AI/ML applications, covering programming basics, data manipulation, and introductory machine learning concepts.",
    color: "from-emerald-500/10 to-emerald-500/5",
    borderHover: "hover:border-emerald-500/40",
    accentColor: "text-emerald-400",
    nodeBorder: "group-hover:border-emerald-400/50",
  },
  {
    title: "Software Engineering (Implementation)",
    issuer: "Coursera",
    period: "May 2024",
    description:
      "Completed a Coursera course on Software Engineering implementation practices covering design patterns, agile methodologies, version control, testing strategies, and software project management.",
    color: "from-blue-500/10 to-blue-500/5",
    borderHover: "hover:border-blue-500/40",
    accentColor: "text-blue-400",
    nodeBorder: "group-hover:border-blue-400/50",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Jun – Jul 2024",
    description:
      "Comprehensive course on Cloud Computing covering cloud architecture, deployment models, service models (IaaS, PaaS, SaaS), and cloud security fundamentals.",
    color: "from-orange-500/10 to-orange-500/5",
    borderHover: "hover:border-orange-500/40",
    accentColor: "text-orange-400",
    nodeBorder: "group-hover:border-orange-400/50",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Google",
    period: "Mar 2026",
    description:
      "Explored the fundamental concepts of Artificial Intelligence, machine learning applications, and how AI is transforming various industries using Google's frameworks.",
    color: "from-sky-500/10 to-sky-500/5",
    borderHover: "hover:border-sky-500/40",
    accentColor: "text-sky-400",
    nodeBorder: "group-hover:border-sky-400/50",
  },
];

export default function CertificationsSection() {
  return (
    <Section id="certifications">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications<span className="text-accent">.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Credentials that validate my expertise across AI/ML, cloud, and software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="flex flex-col gap-10">
            {certifications.map((cert, i) => (
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
                    className={`w-10 h-10 rounded-full bg-cardBg border border-white/10 ${cert.nodeBorder} transition-colors duration-300 flex items-center justify-center z-10`}
                  >
                    <Award className={cert.accentColor} size={18} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 p-6 rounded-2xl bg-cardBg border border-white/5 ${cert.borderHover} transition-all duration-300 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="sm:hidden">{<Award className={cert.accentColor} size={16} />}</span>
                        <h3 className="text-lg font-semibold text-white/90">{cert.title}</h3>
                      </div>
                      <span className={`text-xs font-medium ${cert.accentColor} bg-white/5 border border-white/10 px-2 py-0.5 rounded-full`}>
                        {cert.period}
                      </span>
                    </div>
                    <p className={`text-sm font-bold uppercase tracking-widest ${cert.accentColor} mb-2`}>
                      {cert.issuer}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
