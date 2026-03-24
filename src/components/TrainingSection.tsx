import Section from "./ui/Section";
import { BookOpen, ExternalLink } from "lucide-react";

export default function TrainingSection() {
  const trainings = [
    {
      provider: "CipherSchools",
      title: "Data Structures and Algorithms with Java",
      period: "Jun – Jul 2025",
      points: [
        "Completed structured training focused on core and advanced Data Structures & Algorithms using Java",
        "Covered arrays, strings, linked lists, stacks, queues, trees, graphs, hashing",
        "Learned recursion, sorting, searching, greedy, divide & conquer, dynamic programming",
        "Improved logical thinking and Big-O analysis",
        "Strengthened OOP and clean coding practices",
      ],
      tags: ["Java", "DSA", "Algorithms", "Problem Solving"],
      link: "https://www.cipherschools.com/certificate/preview?id=688c4c8839a767513ab91544"
    },
  ];

  return (
    <Section id="training">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
        Training<span className="text-accent">.</span>
      </h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        {trainings.map((training, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-cardBg border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/5 group-hover:to-accent/10 transition-colors duration-500 pointer-events-none rounded-2xl" />
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <BookOpen className="text-accent" size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent inline-block mb-2">
                    {training.provider}
                  </span>
                  <h3 className="text-xl font-semibold text-white/90">{training.title}</h3>
                  <p className="text-sm text-white/45 mt-1">{training.period}</p>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                {training.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/65 text-sm leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {training.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white/5 text-white/80 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Certificate Link */}
              {training.link && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href={training.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <ExternalLink size={15} /> View Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
