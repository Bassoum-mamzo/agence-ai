"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="text-[#3B82F6] text-sm font-medium uppercase tracking-widest">Compétences</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] mt-2">Stack technique</h2>
          <p className="text-[#9CA3AF] mt-3 max-w-xl">Des outils choisis pour leur efficacité réelle sur le terrain — pas pour impressionner sur un CV.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[#1F2028] bg-[#13131C] p-5 hover:border-[#3B82F6]/30 transition-colors duration-300"
            >
              <h3 className="text-[#F0F0F5] font-semibold text-sm mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-xs px-3 py-1.5 rounded-lg bg-[#1F2028] text-[#9CA3AF] border border-[#2a2a38] hover:text-[#60A5FA] hover:border-[#3B82F6]/30 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
