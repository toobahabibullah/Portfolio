import { Link as LinkIcon, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p>© 2025 {personalInfo.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href={personalInfo.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><LinkIcon size={17} /></a>
          <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><LinkIcon size={17} /></a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Mail size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
