import Section from "./ui/Section";
import { Code2, BrainCircuit, Rocket } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <BrainCircuit className="text-accent" size={24} />,
      title: "AI/ML Focus",
      desc: "Passionate about NLP, LLMs, and building intelligent recommendation systems.",
    },
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: "Full Stack Mastery",
      desc: "Creating seamless end-to-end applications with modern web technologies.",
    },
    {
      icon: <Rocket className="text-accent" size={24} />,
      title: "Scalability Mindset",
      desc: "Architecting solutions designed to handle growth and solve real-world problems.",
    },
  ];

  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            About Me<span className="text-accent">.</span>
          </h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              I am a 3rd-year Computer Science Engineering student with an insatiable curiosity for how things work under the hood. My journey blends the analytical depth of Artificial Intelligence with the creative freedom of Full Stack Development.
            </p>
            <p>
              Whether I&apos;m fine-tuning an LLM to explain complex codebases or meticulously crafting a pixel-perfect, highly animated UI, I focus on delivering impactful tech that scales seamlessly.
            </p>
            <p>
              I thrive on problem-solving and continually push the boundaries of what is possible by building robust, real-world projects.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-cardBg border border-white/5 hover:border-white/20 transition-all duration-300 flex gap-5 items-start group"
            >
              <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white/90">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
