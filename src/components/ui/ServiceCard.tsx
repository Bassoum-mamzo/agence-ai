"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl p-6 border border-[#1F2028] bg-[#13131C] hover:border-[#3B82F6]/40 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="text-[#F0F0F5] font-semibold text-lg mb-2 group-hover:text-[#60A5FA] transition-colors">{service.title}</h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
            <span className="text-[#3B82F6] mt-0.5 shrink-0">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
