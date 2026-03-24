import Section from "./ui/Section";
import { Briefcase } from "lucide-react";

export default function InternshipSection() {
  return (
    <Section id="internship">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
        Internship<span className="text-accent">.</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl bg-cardBg border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/5 group-hover:to-accent/10 transition-colors duration-500 pointer-events-none rounded-2xl" />

          <div className="relative z-10 flex gap-5 items-start">
            <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
              <Briefcase className="text-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white/90">Currently on the Hunt for an Internship</h3>
              <div className="space-y-3 text-white/65 text-base leading-relaxed">
                <p>
                  Currently on the hunt for an internship where I can actually put my skills to work.
                </p>
                <p>
                  I&apos;ve built AI-powered projects like recommendation systems, resume analyzers, and full-stack
                  applications — so I&apos;m not starting from zero.
                </p>
                <p>
                  Comfortable with machine learning concepts, APIs, and deploying real-world applications
                  <span className="text-white/40 italic"> (yes, things that actually run, not just notebooks)</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
