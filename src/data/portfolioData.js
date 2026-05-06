import scooterAdminMap from "../assets/scooter-admin-map.png";
import toDo from "../assets/to-do.png";
import trainDelayMap from "../assets/train-delay-map.png";
import lienCapital from "../assets/lien-capital.png";

export const email = "teodor.lien@gmail.com";

export const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "CSS/SCSS", "HTML"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API", "MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Vite", "Vercel", "Docker"],
  },
];
export const projects = [
  {
    title: "Train Delay Map",
    description:
      "An interactive web application for real-time monitoring of train delays across Sweden. The app displays train stations and delayed trains on a map with live updates. Users can save favorite stations and view detailed delay information.",
    image: trainDelayMap,
    altText: "Train Delay Map",
    skills: ["JavaScript", "SCSS", "WebSockets", "Leaflet", "Git"],
    link: "https://train-delay.vercel.app/",
  },
  {
    title: "To Do List",
    description:
      "A responsive to-do list app built with React and Tailwind CSS. Users can add and complete tasks. Deployed with GitHub Pages.",
    image: toDo,
    altText: "To Do",
    skills: ["React", "Vite", "JavaScript", "Tailwind CSS", "Git"],
    link: "https://teodor29.github.io/to-do/",
  },
  {
    title: "E-scooter Rental",
    description:
      "Group project. Electric scooter rental system with backend, simulation, and three web clients: admin, customer (mobile) and customer (desktop). I was responsible for the frontend and Docker setup. Fully containerized for easy local development.",
    image: scooterAdminMap,
    altText: "E-scooter Rental",
    skills: [
      "React",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Git",
      "Docker",
      "REST API",
    ],
    link: "https://github.com/Teodor29/e-scooter-project-vteam",
  },
  {
    title: "Lien Capital",
    description:
      "A simple and responsive website built with Pico CMS for an investment company.",
    image: lienCapital,
    altText: "Lien Capital",
    skills: ["PHP", "Twig", "SCSS", "Git", "Pico CMS"],
    link: "https://github.com/Teodor29/investment-company-design",
  },
];
