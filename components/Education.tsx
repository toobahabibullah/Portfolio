import { education } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionReveal>
        <div className="mb-8 text-center">
          <h2 className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Education
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500" />
        </div>
        <div className="relative mt-8 space-y-6 border-l border-blue-400/30 pl-6">
          {education.map((item) => (
            <article key={item.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-slate-950" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{item.subtitle}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
