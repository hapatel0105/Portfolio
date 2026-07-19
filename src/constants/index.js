import project8 from "../assets/projects/project-8.webp";
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";
import project9 from "../assets/projects/project-9.webp";
import project10 from "../assets/projects/project-10.webp";

/* ------------------------------------------------------------------ *
 * PROFILE — source of truth: Harsh Patel's LinkedIn profile export
 * Nothing here is fabricated. Empty fields are intentionally omitted.
 * ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Harsh Patel",
  firstName: "Harsh",
  role: "Full Stack Developer",
  headline: "SDE I Intern · Full Stack Developer · MS CS @ ASU",
  location: "Phoenix, Arizona, United States",
  email: "hpate251@asu.edu",
  phone: "+1 (623) 200 1604",
  linkedin: "https://www.linkedin.com/in/harsh-patel-139521230",
  github: "https://github.com/hapatel0105",
  // Short, sharp value proposition shown under the hero headline.
  tagline:
    "I build scalable, user-focused web applications — from React front ends to Node back ends and cloud infrastructure.",
};

export const NAV_SECTIONS = [
  { id: "home", label: "Home", key: "F1" },
  { id: "about", label: "About", key: "F2" },
  { id: "skills", label: "Skills", key: "F3" },
  { id: "experience", label: "Work", key: "F4" },
  { id: "projects", label: "Projects", key: "F5" },
  { id: "education", label: "Education", key: "F6" },
  { id: "contact", label: "Contact", key: "F7" },
];

export const HERO_CONTENT = `Graduate Computer Science student and Full Stack Developer with 2 years of industry experience building scalable, user-focused web applications. Proficient in Next.js, React, Node.js, and Express, with a strong foundation in software engineering and academic research.`;

export const ABOUT_TEXT = `I'm a Full Stack Developer and MS Computer Science student at Arizona State University, currently interning as an SDE I at Carbon3, where I build a B2B carbon-accounting platform for California SB 253 compliance. Over two years in industry I've shipped enterprise-grade web apps end to end — designing responsive React and Next.js front ends, architecting Node.js and Express APIs, and modelling data in PostgreSQL and MongoDB. I care about clean, maintainable code, thoughtful UX, and measurable performance. Backed by AWS Academy certifications in cloud and machine learning, I enjoy turning complex problems into fast, reliable products.`;

export const HIGHLIGHTS = [
  { value: "2+", label: "Years building for production" },
  { value: "10+", label: "Shipped web applications" },
  { value: "3", label: "AWS Academy certifications" },
  { value: "~60%", label: "Faster simulations engineered" },
];

export const EXPERIENCES = [
  {
    year: "Jun 2026 — Present",
    role: "SDE I Intern",
    company: "Carbon3 (C3)",
    location: "California, United States",
    description: `Full-stack engineer on a B2B Scope 3 carbon-accounting platform for California SB 253 compliance (React 19, TypeScript, Supabase/PostgreSQL, Vercel serverless).
Built a System-Dynamics + Agent-Based Monte Carlo simulator that turns live supplier data into emissions-risk scenarios with uncertainty bands and an AI-generated narrative.
Designed adaptive Monte Carlo sampling that scales draw count to population size, keeping large-supplier runs ~60% faster (≈65 ms → 26 ms at 250 suppliers) with no loss of fidelity, plus a seeded PRNG for fully reproducible runs.
Hardened authentication with per-tab session isolation and persistence, and modularized the simulation UI for maintainability.`,
    technologies: [
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Monte Carlo",
      "OAuth",
    ],
  },
  {
    year: "Jan 2026 — Present",
    role: "Graduate Service Assistant",
    company: "Arizona State University",
    location: "United States",
    description: `Teaching Assistant for CHS 300: Well-Being under Dr. Cara Sidman. Assist with grading, student support, and course engagement while promoting well-being, curiosity, and positive learning experiences.`,
    technologies: ["Teaching", "Grading", "Student Support"],
  },
  {
    year: "Jul 2023 — Jul 2025",
    role: "Full Stack Developer",
    company: "BitFront Infotech",
    location: "Surat, Gujarat, India",
    description: `Developed responsive and interactive user interfaces using React.js, ensuring modern design compliance and optimal user experience across devices.
Integrated RESTful APIs and managed scalable application state with Redux, promoting consistent and efficient data flow.
Built and maintained reusable component libraries and custom hooks to standardize development patterns and enhance productivity.
Collaborated with backend teams to define API contracts and consume endpoints effectively for seamless full-stack integration.`,
    technologies: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React.js",
      "Tailwind",
      "Bootstrap",
      "Redux",
      "Material UI",
      "Mantine UI",
      "REST API",
      "WebSocket",
      "Git",
      "Jira",
    ],
  },
  {
    year: "Jan 2023 — Jun 2023",
    role: "Frontend Web Developer",
    company: "MBH Technologies Private Limited",
    location: "Bharuch, Gujarat, India",
    description: `Contributed to multiple client-facing projects by designing and implementing interactive web pages using React.js, HTML5, CSS3, and supporting libraries. Developed reusable components and responsive layouts to enhance user experience across desktop and mobile platforms. Assisted in debugging, testing, and documenting frontend features, ensuring high-quality and maintainable code. Collaborated with cross-functional teams to integrate APIs and streamline workflows while adopting best coding practices and agile methodologies.`,
    technologies: ["JavaScript", "React.js", "HTML", "CSS", "Tailwind", "Bootstrap"],
  },
];

export const EDUCATION = [
  {
    school: "Arizona State University",
    degree: "Master's degree, Computer Science",
    year: "Aug 2025 — May 2027",
    note: "Graduate coursework in computer science with a focus on software engineering and applied research.",
  },
  {
    school: "SVMIT",
    degree: "Bachelor of Engineering (BE), Computer Science",
    year: "2021 — 2024",
    note: "Foundations in algorithms, data structures, databases, and full-stack web development.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services (AWS) Academy",
  },
  {
    name: "AWS Academy Graduate — Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS) Academy",
  },
  {
    name: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services (AWS) Academy",
  },
];

/* Skills grouped like key clusters on a keyboard.
   `key` is the short legend printed on the keycap. */
export const SKILL_GROUPS = [
  {
    row: "Languages",
    items: [
      { name: "JavaScript", key: "JS" },
      { name: "TypeScript", key: "TS" },
      { name: "HTML5", key: "HTML" },
      { name: "CSS3", key: "CSS" },
      { name: "PHP", key: "PHP" },
    ],
  },
  {
    row: "Frameworks",
    items: [
      { name: "React", key: "React" },
      { name: "Next.js", key: "Next" },
      { name: "Node.js", key: "Node" },
      { name: "Express", key: "Exprs" },
      { name: "Redux", key: "Redux" },
    ],
  },
  {
    row: "UI & Styling",
    items: [
      { name: "Tailwind CSS", key: "TW" },
      { name: "Bootstrap", key: "BS" },
      { name: "Material UI", key: "MUI" },
      { name: "Mantine UI", key: "Mant" },
    ],
  },
  {
    row: "Backend & Data",
    items: [
      { name: "REST API", key: "REST" },
      { name: "WebSocket", key: "WS" },
      { name: "PostgreSQL", key: "PG" },
      { name: "MySQL", key: "SQL" },
      { name: "MongoDB", key: "Mongo" },
      { name: "Supabase", key: "Supa" },
      { name: "Firebase", key: "FB" },
    ],
  },
  {
    row: "Cloud & Tooling",
    items: [
      { name: "AWS Lambda", key: "AWS" },
      { name: "Docker", key: "Dock" },
      { name: "Vercel", key: "Vcl" },
      { name: "Git", key: "Git" },
      { name: "Jira", key: "Jira" },
      { name: "Agile", key: "Agile" },
      { name: "OAuth", key: "OAuth" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Bank Sathi",
    image: project8,
    tag: "Fintech Platform",
    description:
      "A fintech platform that democratizes access to financial products and empowers a network of financial advisors. Led development of a workflow and appointment-management suite with secure Google OAuth and Facebook Login, advanced scheduling, and a fast, intuitive UI. Performance is optimized with Cloudflare Browser Insights and Rocket Loader for a secure, reliable experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mantine UI",
      "MUI",
      "Redux Toolkit",
      "React Query",
    ],
    link: "https://banksathi.com/",
  },
  {
    title: "AI Skill Gap Analyzer",
    image: project10,
    tag: "AI · Full Stack",
    description:
      "An AI-driven platform that analyzes resumes against job descriptions to identify skill gaps and deliver actionable insights. Generates personalized learning paths and project recommendations with curated resources and timelines. Built with a Next.js/React/TypeScript front end and a Node.js/Express API optimized to handle multiple concurrent analyses.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "REST API",
      "NLP",
    ],
    link: "https://skill-gap-analyzer-bay.vercel.app/",
  },
  {
    title: "AI-Powered Content Generator",
    image: project9,
    tag: "AI · Full Stack",
    description:
      "A dynamic content-generation platform with an AI-powered modal interface for seamless text generation. Next.js/React/TypeScript front end talking to a Node.js/Express backend via Axios, with real-time content updates and state management tuned to handle many concurrent requests.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "OpenAI API",
    ],
    link: "https://ai-powerd-content-generator.vercel.app/",
  },
  {
    title: "Real Estate Website",
    image: project6,
    tag: "Marketing Site",
    description:
      "A marketing and business-development site for a real-estate product — pricing cards, feature sections, testimonials, and a full login / sign-up flow with a clean, responsive layout.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://real-estate-theta-two.vercel.app/",
  },
  {
    title: "Click4Karmachari — Landing",
    image: project1,
    tag: "Product Landing",
    description:
      "The landing site for the Click4Karmachari HR portal — explaining the product, how it works, and its value, so prospective users understand the platform at a glance.",
    technologies: ["React", "Bootstrap", "JavaScript"],
    link: "https://click4karmachari.com/",
  },
  {
    title: "Click4Karmachari — Portal",
    image: project2,
    tag: "HR Management",
    description:
      "An employee-management system where staff handle everything in one place — attendance, salary slips, daily and project tasks, and leave or voucher requests.",
    technologies: ["React", "Bootstrap", "JavaScript"],
  },
  {
    title: "Who Pays the Bill",
    image: project7,
    tag: "Mini Game",
    description:
      "A lightweight party game — add a list of players and it randomly predicts who pays the bill, revealing the result on the next screen.",
    technologies: ["React", "JavaScript"],
    link: "https://who-pays-the-bill-game.vercel.app/",
  },
  {
    title: "Drone Design",
    image: project4,
    tag: "E-commerce",
    description:
      "An e-commerce concept for selling drones, with product information, customer reviews, and an FAQ section wrapped in a responsive layout.",
    technologies: ["React", "Bootstrap", "JavaScript"],
  },
  {
    title: "Edu-Scholar",
    image: project5,
    tag: "EdTech Portal",
    description:
      "A scholarship-management portal where students apply once and are automatically shortlisted for every scholarship they're eligible for, directly from the portal.",
    technologies: ["JavaScript", "Bootstrap", "PHP"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    tag: "Personal Site",
    description:
      "This portfolio — a keyboard-inspired, single-frame scroll experience built with React, Vite, Tailwind CSS, and Framer Motion.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-harsh-patels-projects-83ad2735.vercel.app/",
  },
];

export const CONTACT = {
  location: "Phoenix, Arizona, United States",
  phone: "+1 (623) 200 1604",
  email: "hpate251@asu.edu",
};

export const SOCIALS = {
  github: "https://github.com/hapatel0105",
  linkedin: "https://www.linkedin.com/in/harsh-patel-139521230",
  email: "mailto:hpate251@asu.edu",
};
