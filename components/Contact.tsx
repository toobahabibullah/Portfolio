import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-24">
      <SectionReveal>
        <div className="mb-8 text-center">
          <h2 className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Get in touch
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-500" />
          <p className="mt-4 text-base text-slate-300">Have a project in mind? Let&apos;s work together!</p>
        </div>
        <div className="glass-panel grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mt-6 flex flex-wrap gap-4" aria-label="Social links">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex size-14 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 transition hover:border-blue-300/60 hover:bg-blue-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                  <FaLinkedinIn size={23} />
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="flex size-14 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 transition hover:border-blue-300/60 hover:bg-blue-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                  <FaGithub size={23} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={`Email ${personalInfo.email}`}
                className="flex size-14 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 transition hover:border-blue-300/60 hover:bg-blue-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <Mail size={23} />
              </a>
            </div>
          </div>
          <form action={`mailto:${personalInfo.email}`} method="post" encType="text/plain" className="space-y-4">
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" name="name" required placeholder="Your name" className="field" />
            <label className="sr-only" htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" required placeholder="Your email" className="field" />
            <label className="sr-only" htmlFor="message">Your message</label>
            <textarea id="message" name="message" required rows={5} placeholder="Your message" className="field resize-y" />
            <button type="submit" className="rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">Send message</button>
          </form>
        </div>
      </SectionReveal>
    </section>
  );
}
