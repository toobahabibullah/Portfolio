"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const target = personalInfo.role;
    const timer = window.setTimeout(() => {
      if (!deleting && index < target.length) {
        setText(target.slice(0, index + 1));
        setIndex((value) => value + 1);
      } else if (deleting && index > 0) {
        setText(target.slice(0, index - 1));
        setIndex((value) => value - 1);
      } else if (!deleting) {
        window.setTimeout(() => setDeleting(true), 1200);
      } else {
        setDeleting(false);
      }
    }, deleting ? 35 : 65);

    return () => window.clearTimeout(timer);
  }, [deleting, index]);

  return (
    <section id="home" className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
  Hello I am Tooba
  <br />
  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    AI Developer
  </span>
</h1>
        <p className="mt-6 min-h-8 text-lg font-medium text-blue-200 sm:text-2xl" aria-live="polite">
          {text}<span className="ml-1 animate-pulse text-purple-300">|</span>
        </p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{personalInfo.shortDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">View projects <ArrowRight size={17} /></a>
          <a href="/cv.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300"><Download size={17} /> Download Resume </a>
        </div>
      </div>
    </section>
  );
}
