"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const contactMethods = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Envoyer un message",
    href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, "")}?text=Bonjour%20Mamoudou%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio.`,
    description: "Réponse rapide · généralement sous 2h",
    primary: true,
  },
  {
    icon: "📧",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Pour les demandes détaillées",
    primary: false,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Mamoudou Bassoum",
    href: personalInfo.linkedin,
    description: "Réseau professionnel",
    primary: false,
  },
  {
    icon: "💻",
    label: "GitHub",
    value: "bassoum-mamzo",
    href: personalInfo.github,
    description: "Code source & projets",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <span className="text-[#3B82F6] text-sm font-medium uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] mt-2">Travaillons ensemble</h2>
          <p className="text-[#9CA3AF] mt-3 max-w-lg mx-auto">
            Que vous soyez une PME à Dakar, Kaolack ou ailleurs — si vous avez un problème à automatiser, je suis là.
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.a
            href={contactMethods[0].href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 rounded-2xl border border-[#3B82F6]/40 bg-[#3B82F6]/10 p-6 mb-4 hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/60 transition-all duration-300 group"
          >
            <span className="text-3xl">{contactMethods[0].icon}</span>
            <div className="flex-1">
              <p className="text-[#F0F0F5] font-semibold">{contactMethods[0].label}</p>
              <p className="text-[#60A5FA] text-sm">{contactMethods[0].value}</p>
              <p className="text-[#9CA3AF] text-xs mt-1">{contactMethods[0].description}</p>
            </div>
            <span className="text-[#3B82F6] group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactMethods.slice(1).map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col gap-2 rounded-xl border border-[#1F2028] bg-[#13131C] p-4 hover:border-[#3B82F6]/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="text-2xl">{method.icon}</span>
                <p className="text-[#F0F0F5] text-sm font-medium">{method.label}</p>
                <p className="text-[#9CA3AF] text-xs">{method.description}</p>
              </motion.a>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-[#9CA3AF] text-sm mt-8"
          >
            📍 Basé à Kaolack/Dakar · Disponible pour des missions à distance et en présentiel
          </motion.p>
        </div>
      </div>
    </section>
  );
}
