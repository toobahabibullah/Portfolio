import { SectionReveal } from "./SectionReveal";

const stats = [
  { value: "1+", label: "Years of Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "2+", label: "Certifications" },
  { value: "2+", label: "Competitions Participated" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionReveal>
        <div className="mb-10 text-center">
          <h2 className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-6xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6 text-lg leading-8 text-slate-200 md:text-[1.1rem]">
            <p>
              I am a passionate and dedicated AI developer with a strong interest in building practical and intelligent software solutions. I enjoy turning complex problems into efficient applications by combining programming, backend development, and modern AI technologies.
            </p>
            <p>
              I am a curious and detail-oriented developer who enjoys exploring new technologies and turning ideas into working solutions. I believe in continuous learning, thoughtful problem-solving, and writing clean, efficient code. My goal is to keep growing as a developer while working on projects that make a meaningful impact.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] backdrop-blur-sm"
              >
                <div className="text-center text-5xl font-black tracking-tight text-cyan-400 md:text-6xl">{stat.value}</div>
                <div className="mt-3 text-center text-base text-slate-300 md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
