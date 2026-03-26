"use client";

import Section from "./ui/Section";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GitHub Repo Explainer",
      description: "An LLM-powered application that takes a GitHub repository URL, analyzes the codebase using OpenRouter API, and generates structured explanations for developers.",
      tech: ["Next.js", "TypeScript", "LLMs", "Tailwind CSS"],
      github: "https://github.com/Projects1424/Github-Repo-Explainer",
    },
    {
      title: "RecoSphere – Recommendation System",
      description: "A robust ML-based recommendation engine capable of providing highly accurate suggestions based on user behavior and collaborative filtering algorithms.",
      tech: ["Python", "Scikit-Learn", "FastAPI", "Pandas"],
      github: "https://github.com/Projects1424/RecoSphere---Recommendation-system",
      live: "https://reco-sphere-recommendation-system.vercel.app/",
    },
    {
      title: "SmartPark – Parking System",
      description: "A smart parking management system using Machine Learning and Computer Vision (CNN + OpenCV) to detect parking slot occupancy with a PyQt desktop interface.",
      tech: ["Python", "CNN", "OpenCV", "PyQt"],
      github: "https://github.com/Projects1424/SmartPark-Parking-System",
    },
    {
      title: "LeetCode Progress Analyzer",
      description: "A developer dashboard that fetches LeetCode user data via GraphQL, visualizes problem-solving trends with Chart.js, and provides AI-powered study suggestions.",
      tech: ["Next.js", "TypeScript", "GraphQL", "Chart.js"],
      github: "https://github.com/Projects1424/Leetcode-Progress-Analyzer",
      live: "https://leetcode-progress-analyzer.vercel.app/",
    },
    {
      title: "Gov FAQ – NLP Chatbot",
      description: "An NLP-powered chatbot that answers government-related frequently asked questions, making public information more accessible through natural language queries.",
      tech: ["Python", "NLP", "TF-IDF", "Flask"],
      github: "https://github.com/Projects1424/Government-related-Frequently-asked-Questions-using-NLP",
    },
    {
      title: "Learning Management System",
      description: "A full-featured Learning Management System that enables course creation, student enrollment, progress tracking, and assignment management for educators.",
      tech: ["Java", "MySQL", "Spring Boot", "REST API"],
      github: "https://github.com/Projects1424/Learning-Management-System",
    },
  ];

  return (
    <Section id="projects" className="bg-black/20 w-full max-w-none">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center">
          Projects1424 Projects<span className="text-accent">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => window.open(project.github, "_blank")}
              className="flex flex-col p-8 rounded-3xl bg-cardBg border border-white/10 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 group-hover:from-accent/10 transition-colors duration-500 pointer-events-none" />

              <h3 className="text-2xl font-bold mb-3 text-white transition-colors">{project.title}</h3>
              <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs font-semibold px-2 py-1 bg-white/10 text-accent rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto" onClick={(e) => e.stopPropagation()}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  <Github size={18} /> View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All on GitHub CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/Projects1424/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 font-medium"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </Section>
  );
}
