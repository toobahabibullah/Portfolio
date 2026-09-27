import { BiServer, BiSolidData } from "react-icons/bi";
import {
  SiFastapi,
  SiGit,
  SiGithub,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { Cloud, Code2, Database, Server, Wrench } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const skillGroups = [
  {
    title: "Backend",
    accent: "bg-emerald-500",
    panelClass: "bg-emerald-500/95",
    items: [
      { label: "Python", icon: SiPython },
      { label: "FastAPI", icon: SiFastapi },
      { label: "Authentication", icon: Wrench },
      { label: "Redis", icon: Server },
      { label: "Caching", icon: Server },
      { label: "LLM Integration", icon: BiServer },
    ],
  },
  {
    title: "Databases",
    accent: "bg-cyan-500",
    panelClass: "bg-cyan-500/95",
    items: [
      { label: "SQL", icon: Database },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "Vector Databases", icon: BiSolidData },
      { label: "Oracle SQL", icon: Database },
    ],
  },
  {
    title: "AI/ML",
    accent: "bg-violet-500",
    panelClass: "bg-violet-500/95",
    items: [
      { label: "RAG", icon: BiSolidData },
      { label: "Embeddings", icon: Code2 },
      { label: "Scikit-learn", icon: Wrench },
      { label: "Prompt Engineering", icon: BiServer },
    ],
  },
  {
    title: "DevOps",
    accent: "bg-orange-500",
    panelClass: "bg-orange-500/95",
    items: [
      { label: "Git", icon: SiGit },
      { label: "GitHub", icon: SiGithub },
      { label: "CI/CD Pipeline", icon: Code2 },
      { label: "AWS", icon: Cloud },
      { label: "Vercel", icon: Server },
    ],
  },
];

function SkillPill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }> | string;
  label: string;
}) {
  const content =
    typeof Icon === "string" ? (
      <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-slate-200 text-[10px] font-black text-slate-900">
        {Icon}
      </span>
    ) : (
      <Icon className="h-5 w-5" />
    );

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3.5 py-2 text-sm font-semibold text-slate-100 shadow-inner shadow-slate-950/30">
      <span className="text-cyan-300">{content}</span>
      <span>{label}</span>
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionReveal>
        <div className="mb-8 text-center">
          <h2 className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500" />
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl shadow-slate-950/20">
              <div className={`${group.panelClass} px-4 py-3`}>
                <h3 className="text-xl font-bold uppercase text-slate-950">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 px-4 py-4">
                {group.items.map((item) => (
                  <SkillPill key={item.label} icon={item.icon} label={item.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
