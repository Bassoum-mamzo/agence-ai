"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  stack: string[];
  impact: string;
  emoji: string;
  highlight: boolean;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
        project.highlight
          ? "border-[#3B82F6]/40 bg-[#13131C] hover:border-[#3B82F6]/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          : "border-[#1F2028] bg-[#13131C] hover:border-[#2a2a38]"
      }`}
    >
      {project.highlight && (
        <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/20">
          Projet phare
        </span>
      )}
      <div className="text-3xl mb-4">{project.emoji}</div>
      <h3 className="text-[#F0F0F5] font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded-md bg-[#1F2028] text-[#9CA3AF] border border-[#2a2a38]">
            {tech}
          </span>
        ))}
      </div>
      <div className="pt-4 border-t border-[#1F2028]">
        <p className="text-xs text-[#3B82F6] font-medium">Impact</p>
        <p className="text-sm text-[#9CA3AF] mt-1">{project.impact}</p>
      </div>
    </motion.div>
  );
}
