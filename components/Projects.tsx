import Image from "next/image";
import { ExternalLink, Link as LinkIcon } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionReveal>
        <div className="mb-8 text-center">
          <h2 className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500" />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="glass-panel overflow-hidden">
              <Image src={project.image} alt="" width={640} height={320} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="tag">{tech}</span>)}</div>
                <div className="mt-6 flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"><LinkIcon size={15} /> GitHub</a>
                  {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-400"><ExternalLink size={15} /> Live demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
