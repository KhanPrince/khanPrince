import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import logo from "../assets/kplogo.png";
import photo from "../assets/photo.webp";
import resume from "../public/Basharat-Ashraf-Resume.pdf";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiGithubFill,
} from "@remixicon/react";
import { RiDatabaseLine, RiCodeSSlashLine } from "@remixicon/react";

export const LOGO = {
  logo: logo,
};

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  photo: photo,
  resume: resume,
  name: "Basharat Ashraf",
  role: "Full Stack Developer",
  subheading: "Crafting digital experiences with code and creativity",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Movie Searching App",
    description:
      "A React-based movie discovery app with real backend integration. Users can search millions of movies, discover trending selections, and experience seamless infinite scroll. The app intelligently ranks movies based on user search history",
    techStack: [
      "React",
      "Node.js",
      "Custom Hooks",
      "Appwrite",
      "TMDB API",
      "Vite",
      "Vercel",
    ],
    imgSrc: project1,
    link: "https://netflix-clone-seven-phi-52.vercel.app",
  },
  {
    id: 2,
    title: "AI-powered trip planning app",
    description:
      "Admins generate complete day-by-day itineraries with Gemini, and anyone can browse the results. Built with React Router 7 (SSR), Appwrite, Gemini and Unsplash.",
    techStack: ["React", "Appwrite", "Gemini", "Unsplash", "Vite", "Vercel"],
    imgSrc: project2,
    link: "https://travel-agency-dashboard-eight-gray.vercel.app/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GitHub",
    icon: <RiGithubFill className="text-pink-400" />,
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications",
    institution: "University of Kashmir",
    duration: "2013-2016",
    description:
      "Graduated in Computer Science, focusing on algorithms, data structures, and web development.",
  },
  {
    id: 2,
    degree: "Master of Computer Applications",
    institution: "University of Kashmir",
    duration: "2017 - 2020",
    description:
      "Focused on advanced software engineering concepts, system design, and database management systems",
  },
];
