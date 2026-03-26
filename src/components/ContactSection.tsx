import Section from "./ui/Section";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Let&apos;s Connect<span className="text-accent">.</span>
        </h2>
        <p className="text-lg text-white/60 mb-10 leading-relaxed">
          Whether you have a question about my work, want to collaborate on a project, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Email */}
          <a
            href="mailto:piyushpat3388@gmail.com"
            className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto"
          >
            <Mail size={22} />
            Drop me an Email
          </a>

        </div>

        {/* Contact details */}
          <span>piyushpat3388@gmail.com</span>
      </div>
    </Section>
  );
}
