import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2028] bg-[#111118]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#9CA3AF] text-sm">
          © {new Date().getFullYear()} {personalInfo.name} — Tous droits réservés
        </p>
        <div className="flex items-center gap-4 text-sm text-[#9CA3AF]">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#3B82F6] transition-colors">Email</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">LinkedIn</a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
