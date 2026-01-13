import scooterAdminMap from "../assets/scooter-admin-map.png";
import toDo from "../assets/to-do.png";
import trainDelayMap from "../assets/train-delay-map.png";
import lienCapital from "../assets/lien-capital.png";

export const skills = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Responsive Design",

  // Styling
  "Tailwind CSS",
  "SCSS",

  // Backend
  "Node.js",
  "Express.js",
  "PHP",
  "REST API",
  "MySQL",
  "JWT",
  "MongoDB",
  "Docker",

  "Git",
  "Agile",
  "Scrum",
];

export const projects = [
  {
    title: "E-scooter Rental",
    description:
      "A group project built by four students. Electric scooter rental system with backend, simulation, and three web clients: admin, customer (mobile) and customer (desktop). Everything runs in Docker for easy setup.",
    image: scooterAdminMap,
    altText: "E-scooter Rental",
    skills: [
      "React",
      "JavaScript",
      "MongoDB",
      "SCSS",
      "Node.js",
      "Express.js",
      "Git",
      "Docker",
      "REST API",
    ],
    link: "https://github.com/Teodor29/e-scooter-project-vteam",
  },
  {
    title: "To Do List",
    description:
      "A responsive to-do list app built with React and Tailwind CSS. Users can add and complete tasks. Deployed with GitHub Pages.",
    image: toDo,
    altText: "To Do",
    skills: ["React", "Vite", "JavaScript", "Tailwind CSS", "Git"],
    link: "https://github.com/Teodor29/to-do",
  },
  {
    title: "Train Delay Map",
    description:
      "An interactive web application for real-time monitoring of train delays across Sweden. The app displays train stations and delayed trains on a map with live updates. Users can save favorite stations and view detailed delay information.",
    image: trainDelayMap,
    altText: "Train Delay Map",
    skills: [
      "JavaScript",
      "SCSS",
      "Web Components",
      "WebSockets",
      "JWT",
      "Leaflet",
      "Git",
    ],
    link: "https://github.com/Teodor29/train-delay-map",
  },
  {
    title: "Lien Capital",
    description:
      "A simple and responsive website built with Pico CMS for an investment company.",
    image: lienCapital,
    altText: "Lien Capital",
    skills: ["PHP", "Composer", "Twig", "SCSS", "Git", "pico CMS"],
    link: "https://github.com/Teodor29/investment-company-design",
  },
];
