# Tooba Habibullah Portfolio

A clean, responsive AI developer portfolio built with Next.js App Router, React, Tailwind CSS, Framer Motion, and Lucide React.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Contact.tsx
  Education.tsx
  Experience.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Projects.tsx
  ScrollToTop.tsx
  SectionReveal.tsx
data/
  portfolio.ts
public/
  project-placeholder.svg
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit portfolio content

All personal information, skills, projects, education, and experience live in [`data/portfolio.ts`](data/portfolio.ts). Edit that one file to update your name, links, skills, project cards, education, or experience.

Put project images and your CV in `public/`. The CV button expects `public/cv.pdf`.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the default Next.js build settings.
4. Deploy.

Vercel will run the production build and provide a public URL.
