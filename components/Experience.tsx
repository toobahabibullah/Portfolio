import { experience } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionReveal>
        <div className="mb-8 text-center">
          <h2 className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Work Experience
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500" />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {experience.map((item) => (
            <article key={item.title} className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-300">{item.subtitle}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
