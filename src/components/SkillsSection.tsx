import Section from "./ui/Section";

export default function SkillsSection() {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C++"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL"] },
    { category: "AI / ML", items: ["Machine Learning", "NLP", "LLMs", "TensorFlow", "Scikit-Learn"] },
  ];

  return (
    <Section id="skills">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
        Technical Skills<span className="text-accent">.</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, i) => (
          <div key={i} className="p-6 rounded-2xl bg-cardBg border border-white/5 hover:border-white/20 transition-all group">
            <h3 className="text-xl font-semibold mb-6 text-white/90 group-hover:text-accent transition-colors">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, j) => (
                <span 
                  key={j} 
                  className="px-3 py-1.5 bg-white/5 text-white/80 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
