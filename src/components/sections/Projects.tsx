"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="text-[#3B82F6] text-sm font-medium uppercase tracking-widest">Projets</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] mt-2">Ce que j'ai construit</h2>
          <p className="text-[#9CA3AF] mt-3 max-w-xl">Des projets réels, pour des clients réels ou comme preuves de concept opérationnelles.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
