import Section from "./ui/Section";
import { Award, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      issuerShort: "NPTEL",
      description: "Completed a comprehensive course on Cloud Computing covering cloud architecture, deployment models, service models (IaaS, PaaS, SaaS), and cloud security fundamentals.",
      badge: "🏛️",
      color: "from-orange-500/20 to-amber-500/5",
      borderHover: "hover:border-orange-500/40",
      accentColor: "text-orange-400",
      link: null, // Will be updated when the user provides the link
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      issuerShort: "HackerRank",
      description: "Demonstrated proficiency in advanced SQL concepts including complex joins, window functions, query optimization, subqueries, and database design principles.",
      badge: "🟢",
      color: "from-green-500/20 to-emerald-500/5",
      borderHover: "hover:border-green-500/40",
      accentColor: "text-green-400",
      link: null,
    },
    {
      title: "Software Engineering",
      issuer: "Coursera",
      issuerShort: "Coursera",
      description: "Gained expertise in software engineering principles, design patterns, agile methodologies, version control, testing strategies, and software project management.",
      badge: "🔵",
      color: "from-blue-500/20 to-sky-500/5",
      borderHover: "hover:border-blue-500/40",
      accentColor: "text-blue-400",
      link: null,
    },
  ];

  return (
    <Section id="certifications">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Certifications<span className="text-accent">.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Credentials that validate my expertise across cloud, data, and software engineering.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-3xl bg-cardBg border border-white/10 ${cert.borderHover} transition-all duration-300 group hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Issuer badge */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 ${cert.accentColor}`}>
                  {cert.issuerShort}
                </span>
                <Award size={22} className={`${cert.accentColor} opacity-70`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{cert.title}</h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed flex-grow relative z-10">
                {cert.description}
              </p>

              {/* View Certificate link */}
              <div className="mt-8 relative z-10">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${cert.accentColor} hover:text-white transition-colors`}
                  >
                    <ExternalLink size={15} /> View Certificate
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/25 cursor-default">
                    <ExternalLink size={15} /> Certificate Link Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
