"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  BrainCircuit,
  Code2,
  Cpu,
  Link,
  Mail,
  Rocket,
  Sparkles,
  TerminalSquare,
  Wand2,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "C++", "Java", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "LLMs", "Data Science"],
  },
  {
    title: "Web Development",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "Authentication"],
  },
  {
    title: "Databases",
    items: ["Oracle SQL", "Data Modeling", "Query Optimization"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Docker", "Cursor"],
  },
];

const projects = [
  {
    title: "Emotion Detector",
    description:
      "An AI-powered assistant that interprets visual inputs and helps automate document workflows with multimodal reasoning.",
    tech: ["Python", "FastAPI", "PyTorch", "React"],
    github: "https://github.com/toobahabibullah/Emotion-Detector",
    demo: "https://example.com",
  },
  {
    title: "Predictive Analytics Hub",
    description:
      "A modern dashboard for forecasting trends, monitoring KPIs, and turning raw data into clear strategic insights.",
    tech: ["Next.js", "Tailwind", "Oracle SQL", "ML"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Intelligent Web Platform",
    description:
      "A premium AI-enabled product experience with conversational interfaces, fast APIs, and elegant UX patterns.",
    tech: ["React", "Next.js", "FastAPI", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const timelineItems = [
  {
    title: "BS Artificial Intelligence",
    subtitle: "Current academic focus",
    body: "Exploring intelligent systems, data-driven reasoning, and applied machine learning with a strong foundation in computing.",
  },
  {
    title: "Relevant Coursework",
    subtitle: "Core studies",
    body: "Machine Learning, Deep Learning, Data Structures, Algorithms, Probability, Software Engineering, and AI Applications.",
  },
  {
    title: "Certifications",
    subtitle: "Growing expertise",
    body: "Building practical skills through hands-on projects, technical workshops, and continuous self-directed learning.",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];
      const current = sections.findLast((section) => section.offsetTop <= window.scrollY + 140);
      if (current?.id) setActiveSection(current.id);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(64,112,255,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(120,85,255,0.25),_transparent_35%)] text-slate-100">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.2em] text-slate-100">
            TOOBA HABIBULLAH
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm transition ${activeSection === item.id ? "text-cyan-300" : "text-slate-400 hover:text-slate-200"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Let&apos;s Connect
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Hi I am Tooba Habibullah
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI Engineer
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              BS Artificial Intelligence Student & AI Developer. I&apos;m passionate about machine learning, modern web development, and creating products that feel smart, fast, and human-centered.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-slate-950 transition hover:scale-105">View Projects</a>
              <a href="/cv.pdf" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-200 transition hover:bg-white/10">Download CV</a>
              <a href="#contact" className="rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-3 font-medium text-violet-200 transition hover:bg-violet-500/20">Contact Me</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus</p>
                <p className="mt-1 text-xl font-semibold text-slate-100">Tooba Habibullah • Builder • Learner</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                <Cpu size={24} />
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div className="flex items-center gap-3 text-cyan-200">
                <TerminalSquare size={18} />
                <span>Building intelligent apps and scalable products</span>
              </div>
              <div className="flex items-center gap-3 text-violet-200">
                <Wand2 size={18} />
                <span>Blending AI, web development, and design thinking</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Rocket size={18} />
                <span>Focused on real-world impact and growth</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur-xl lg:p-12"
        >
          <div className="flex items-center gap-3 text-cyan-300">
            <Code2 size={20} />
            <p className="text-sm uppercase tracking-[0.3em]">About Me</p>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-slate-300">
              <p>
                I am an AI-focused developer who enjoys transforming ideas into intelligent, useful software. My work sits at the intersection of machine learning, thoughtful product design, and modern web engineering.
              </p>
              <p>
                Through continuous learning and hands-on building, I have developed a strong interest in creating systems that not only work well technically, but also feel seamless and intuitive for users.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
              <h3 className="text-xl font-semibold text-white">My journey</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7">
                <li>• Building AI-powered applications with practical impact.</li>
                <li>• Learning through independent projects, internships, and real-world experimentation.</li>
                <li>• Aiming to grow into a strong engineering professional who bridges AI and software product development.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Skills</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Tools, languages, and domains I work with</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Selected work you can update anytime</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 shadow-xl shadow-slate-950/30"
            >
              <div className="h-40 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={project.github} className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">GitHub</a>
                  <a href={project.demo} className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 text-sm font-medium text-slate-950 transition hover:scale-105">Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Education Timeline</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Academic path and growth</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {timelineItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-300">{item.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Experience</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">AI Intern</h3>
            <p className="mt-4 text-slate-300">A space for future professional experience, internships, and impactful contributions to AI-driven projects.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Contact</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Let&apos;s build something exceptional</h3>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <a href="mailto:your@email.com" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><Mail size={16} /> your@email.com</a>
              <a href="https://linkedin.com" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><Link size={16} /> LinkedIn</a>
              <a href="https://github.com" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><Mail size={16} /> GitHub</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 backdrop-blur-xl lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">I&apos;m always open to exciting opportunities</h2>
              <p className="mt-4 text-slate-300">Reach out for collaborations, portfolio feedback, or conversations around AI and modern product development.</p>
            </div>
            <form className="space-y-4">
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Your name" />
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Your email" />
              <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" placeholder="Your message" />
              <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-slate-950 transition hover:scale-105">Send Message</button>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/70 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 Tooba Habibullah. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="https://github.com" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"><Mail size={18} /></a>
            <a href="https://linkedin.com" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"><Link size={18} /></a>
            <a href="mailto:your@email.com" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"><Mail size={18} /></a>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-3 text-slate-950 shadow-lg shadow-cyan-950/40 transition ${showScrollTop ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ArrowUp size={20} />
      </button>
    </main>
  );
}
