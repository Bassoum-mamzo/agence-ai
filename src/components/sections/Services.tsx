"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="text-[#3B82F6] text-sm font-medium uppercase tracking-widest">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] mt-2">Ce que je peux faire pour vous</h2>
          <p className="text-[#9CA3AF] mt-3 max-w-xl">Des solutions concrètes adaptées aux PME africaines — pragmatiques, rapides à déployer, mesurables.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-[#3B82F6]/20 bg-[#3B82F6]/5 p-8 text-center"
        >
          <h3 className="text-[#F0F0F5] font-semibold text-xl mb-2">Vous avez un projet spécifique ?</h3>
          <p className="text-[#9CA3AF] mb-6 max-w-md mx-auto">Chaque entreprise est unique. Décrivez-moi votre problème et je vous propose une solution sur mesure.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#3B82F6] text-white rounded-xl font-medium hover:bg-[#60A5FA] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            Discutons-en →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
