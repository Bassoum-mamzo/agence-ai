"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm mb-6">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
            Disponible pour de nouveaux projets
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F0F0F5] leading-tight mb-4"
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-[#3B82F6] font-medium mb-6"
        >
          {personalInfo.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-[#9CA3AF] text-lg leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-[#3B82F6] text-white rounded-xl font-medium hover:bg-[#60A5FA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            Me contacter
          </a>
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 border border-[#1F2028] text-[#F0F0F5] rounded-xl font-medium hover:border-[#3B82F6]/50 hover:text-[#60A5FA] transition-all duration-300">
            Voir mes projets
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 text-sm text-[#9CA3AF]"
        >
          <span className="flex items-center gap-2"><span>📍</span> {personalInfo.location}</span>
          <span className="hidden sm:block w-px h-4 bg-[#1F2028]" />
          <span className="flex items-center gap-2"><span>🎓</span> Certifié GoMyCode 2025</span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9CA3AF]"
      >
        <span className="text-xs">Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#3B82F6] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
