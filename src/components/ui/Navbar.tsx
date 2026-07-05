"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1F2028]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-[#F0F0F5] font-bold text-lg tracking-tight hover:text-[#3B82F6] transition-colors">
          MB<span className="text-[#3B82F6]">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[#9CA3AF] hover:text-[#F0F0F5] text-sm transition-colors">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="px-4 py-2 bg-[#3B82F6] text-white text-sm rounded-lg hover:bg-[#60A5FA] transition-colors">
              Me contacter
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-[#9CA3AF] hover:text-[#F0F0F5] transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-5 space-y-1">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111118] border-b border-[#1F2028]"
          >
            <ul className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#F0F0F5] text-sm block transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 bg-[#3B82F6] text-white text-sm rounded-lg hover:bg-[#60A5FA] transition-colors text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Me contacter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
