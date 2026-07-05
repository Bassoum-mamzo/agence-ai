"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="text-[#3B82F6] text-sm font-medium uppercase tracking-widest">À propos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] mt-2">Qui suis-je ?</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-5">
            <p className="text-[#9CA3AF] leading-relaxed">
              Je m'appelle <strong className="text-[#F0F0F5]">Mamoudou Bassoum</strong>, j'ai {personalInfo.age} ans et je suis basé entre Kaolack et Dakar, au Sénégal. Fondateur solo d'une agence d'automatisation IA, j'aide les PME africaines à intégrer l'intelligence artificielle dans leurs processus — sans complexité, avec un impact concret.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed">
              Autodidacte dans l'âme, j'ai construit mes compétences en dev web, en orchestration d'APIs IA et en automatisation de workflows à travers des projets réels : chatbots WhatsApp pour qualifier des leads immobiliers, CRM automatisés, systèmes de reconnaissance Python à grande échelle.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed">
              En parallèle, j'apprends l'anglais et le mandarin — parce que les opportunités sont globales, mais mon ancrage reste africain.
            </p>
            <div className="pt-4 rounded-xl border border-[#3B82F6]/20 bg-[#3B82F6]/5 p-4">
              <p className="text-sm text-[#60A5FA] font-medium mb-1">🎓 {personalInfo.certification.title}</p>
              <p className="text-sm text-[#9CA3AF]">{personalInfo.certification.issuer} — {personalInfo.certification.date}</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
            <div className="rounded-xl border border-[#1F2028] bg-[#13131C] p-6 space-y-4">
              <h3 className="text-[#F0F0F5] font-semibold">Langues</h3>
              <ul className="space-y-2">
                {personalInfo.languages.map((lang) => (
                  <li key={lang} className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
                    <span className="text-[#9CA3AF]">{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4+", label: "Projets livrés" },
                { value: "500+", label: "Contacts CRM gérés" },
                { value: "61", label: "Modules Python (PRIMEMAX)" },
                { value: "3", label: "Secteurs couverts" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-[#1F2028] bg-[#13131C] p-4 text-center">
                  <p className="text-2xl font-bold text-[#3B82F6]">{stat.value}</p>
                  <p className="text-xs text-[#9CA3AF] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
