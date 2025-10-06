import project8 from "../assets/projects/project-8.jpg";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";

export const HERO_CONTENT = `Results-oriented Full Stack Developer specializing in designing and delivering enterprise-grade web applications and scalable digital solutions. Skilled in modern frontend frameworks such as Next.js, React.js, and TypeScript, complemented by robust backend development expertise. Proficient in state management with Redux, UI component libraries including Material-UI and Mantine UI, and responsive design using Tailwind CSS and Bootstrap. Experienced in building RESTful APIs, implementing WebSocket communication, and leveraging Git for version control. Thrives in collaborative environments, consistently delivering high-performance, maintainable applications aligned with business objectives. Committed to continuous learning and adopting emerging technologies to drive innovative solutions.`;

export const ABOUT_TEXT = `Dedicated Full Stack Developer with over 2 years of experience building end-to-end web applications and scalable digital platforms. Proficient in frontend technologies including Next.js, Node.js, React.js, and TypeScript, with a strong focus on responsive design using Tailwind CSS. Skilled in backend development, API integration, and database management, with hands-on experience in state management using Redux and leveraging UI component libraries such as Material-UI and Mantine UI. Holds a degree in Computer Science and Engineering, bringing a solid technical foundation and problem-solving mindset. Recognized for delivering high-quality, user-centric applications through effective collaboration, clean code practices, and a balance between frontend aesthetics and backend functionality.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - July 2025",
    role: "Full Stack Developer",
    company: "BitFront Infotech",
    description: `Developed responsive and interactive user interfaces using React JS, ensuring modern design compliance and optimal user experience across devices.
    Integrated RESTful APIs and managed scalable application state with Redux, promoting consistent and efficient data flow.
    Built and maintained reusable component libraries and custom hooks to standardize development patterns and enhance productivity.
    Collaborated with backend teams to define API contracts and consume endpoints effectively for seamless full-stack integration.
    Work environment was good there, learnt how to manage & how to build good relationship with Manager and colleagues.`,
    technologies: [
      "Javascript",
      "TypeScript",
      "Next JS",
      "React.js",
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "Redux",
      "Material UI",
      "Mantine UI",
      "REST API",
      "GIT",
      "Jira",
      "monday.com",
      "Websocket",
    ],
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Frontend Developer Intern",
    company: "MBH Techonologies Pvt. Ltd.",
    description: `Contributed to multiple client-facing projects by designing and implementing interactive web pages using React.js, HTML5, CSS3, and supporting libraries. Developed reusable components and responsive layouts to enhance user experience across desktop and mobile platforms. Assisted in debugging, testing, and documenting frontend features, ensuring high-quality and maintainable code. Collaborated with cross-functional teams, including designers and backend developers, to integrate APIs and streamline workflows. Shadowed senior developers to adopt best coding practices, improve performance, and maintain consistency across projects, gaining hands-on experience with modern frontend tools, Git version control, and agile development methodologies.`,
    technologies: [
      "Javascript",
      "React.js",
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Bank Sathi",
    image: project8,
    description:
      "Led the development of a comprehensive workflow and appointment management platform, leveraging Next.js, React, and TypeScript. The platform features a modern UI built with Tailwind CSS and component libraries like MUI and Mantine UI. Implemented secure authentication via Google OAuth and Facebook Login, along with advanced scheduling capabilities This project is a cutting-edge fintech platform designed to democratize access to financial products and empower a network of financial advisors. The application provides a comprehensive suite of tools for advisors to connect with customers, recommend tailored financial solutions, and manage their business efficiently. Built with a focus on performance and security, the front-end leverages the power of React and Next.js, styled with Tailwind CSS, to deliver a fast and intuitive user interface. The back-end is supported by a robust infrastructure that includes Webpack, and the application's performance is optimized with Cloudflare Browser Insights and Rocket Loader, ensuring a secure and reliable experience for all users. This project not only showcases my technical expertise in modern web development but also my ability to contribute to a platform with a significant social and economic impact.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mantine UI",
      "MUI",
      "Redux Toolkit",
      "React Query",
      "Facebook Login",
    ],
    link: "https://banksathi.com/",
  },
  {
    title: "AI Skill Gap Analyzer",
    image: project10,
    description:
      "Engineered an AI-driven platform to analyze resumes and job descriptions, identifying skill gaps and providing actionable insights. Developed personalized learning paths and project recommendations with curated resources and timelines. Built a responsive frontend using Next.js, React, and TypeScript, and integrated backend APIs with Node.js, Express, and Axios for seamless data processing. Optimized state management and performance to handle multiple concurrent analyses efficiently, enhancing user experience and practical skill development.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Axios",
      "REST API",
      "NLP",
      "Responsive Design",
    ],
    link: "https://skill-gap-analyzer-bay.vercel.app/",
  },
  {
    title: "AI-Powered Content Generator",
    image: project9,
    description:
      "Developed a dynamic content generation platform leveraging Next.js, React, and TypeScript, featuring an AI-powered modal interface for seamless text generation. Integrated backend APIs using Node.js and Express, with Axios for efficient API communication. Built a responsive and modern UI using Tailwind CSS, ensuring smooth user interactions and real-time content updates. Optimized performance and state management to handle multiple user requests and AI responses efficiently.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Axios",
      "REST API",
      "OpenAI API",
      "Responsive Design",
    ],
    link: "https://ai-powerd-content-generator.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Tailwind"],
    link: "https://portfolio-harsh-patels-projects-83ad2735.vercel.app/",
  },
  {
    title: "Click4Karmachari-Landing",
    image: project1,
    description:
      "Working with the portal, I have designed a landing website for the portal. From where the user can know everything about the portal and how it works.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "JavaScript"],
    link: "https://click4karmachari.com/",
  },
  {
    title: "Click4Karmachari-Portal",
    image: project2,
    description:
      "Designed employee management system, where employees can manage everything starting from attendance to salary slips adding daily tasks or project tasks requesting leave or voucher everything at one place.",
    technologies: ["HTML", "CSS", "Bootstrap", "React", "JavaScript"],
  },
  {
    title: "Drone-Design",
    image: project4,
    description:
      "An E-commerce webpage for selling drones, which includes all the relevent information about drones, customers review, and FAQ.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "JavaScript"],
  },
  {
    title: "RealEstate Website",
    image: project6,
    description:
      "An E-commerce website for Real Estate bussiness development tool, webpage holds pricing cards, features, testimonials and login-signup",
    technologies: ["HTML", "CSS", "React", "Tailwind", "JavaScript"],
    link: "https://real-estate-theta-two.vercel.app/",
  },
  {
    title: "Who will pay the bill game",
    image: project7,
    description:
      "It is a game in which user has to add list of players and it will predict random player which will show result on next page",
    technologies: ["HTML", "React", "JavaScript"],
    link: "https://who-pays-the-bill-game.vercel.app/",
  },
  {
    title: "Edu-Scholar",
    image: project5,
    description:
      "It is a scholarship management portal, where students can apply for scholarships, and they will be shortlisted on every scholarship they are eligible for directly from the portal.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
  },
];

export const CONTACT = {
  address: "200 E Fillmore St, Phoenix, AZ 85004",
  phoneNo: "+1 (623) 200-1604 ",
  email: "hpate251@asu.edu",
};
