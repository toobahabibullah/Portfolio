export const personalInfo = {
  name: "TOOBA",
  fullName: "Tooba Habibullah",
  role: "BS Artificial Intelligence Student & AI Developer",
  email: "toobahabibullah@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/tooba-habibullah",
    github: "https://github.com/toobahabibullah",
  },
  bio: "I build practical AI products and polished web experiences that make complex ideas feel simple.",
  shortDescription:
    "Passionate about machine learning, modern web development, and building intelligent applications with thoughtful user experiences.",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Authentication", "Redis", "Caching", "LLM Integration"],
  },
  { title: "Databases", items: ["SQL", "Vector Databases", "PostgreSQL", "Oracle SQL"] },
  { title: "AI/ML", items: ["RAG", "Embeddings", "Scikit-learn", "Prompt Engineering"] },
  { title: "DevOps", items: ["Git", "GitHub", "CI/CD Pipeline", "AWS", "Vercel"] },
];

export const projects = [
  {
    title: "Emotion Detector",
    description: "A machine learning project that classifies text into Anger, Joy, or Fear.",
    image: "/project-placeholder.svg",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Regex"],
    github: "https://github.com/toobahabibullah/Emotion-Detector",
    liveDemo: undefined,
  },
  {
    title: "Bookshop Management System",
    description: "A bookshop management system demonstrating OOP principles with inventory, search, sales, and stock management.",
    image: "/project-placeholder.svg",
    tech: ["Java", "OOP", "ArrayList"],
    github: "https://github.com/toobahabibullah/Bookshop-Management-System",
    liveDemo: undefined,
  },
];

export const education = [
  {
    title: "BS Artificial Intelligence",
    subtitle: "2024-Present",
    description: "Dawood University of Engineering and Technology",
  },
  {
    title: "Web-Development Course",
    subtitle: "June 2026- July 2026",
    description: "OTS Education and Vocational Centre",
  },
  {
    title: "Intermediate",
    subtitle: "2022-2024",
    description: "St. Lawrence's G.G.D.C, Karachi",
  },
];

export const experience = [
  {
    title: "AI Intern",
    subtitle: "OTS Education and Vocational Centre",
    description: "Worked on an AI chatbot project, gaining hands-on experience with FastAPI, PostgreSQL, RAG, embeddings, and Qdrant vector databases. Contributed to data integration, bug fixing, and chatbot improvements while learning practical concepts in LLM-based applications and AI automation.",
  },
];
