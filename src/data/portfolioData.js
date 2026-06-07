import scooterAdminMap from '../assets/scooter-admin-map.png'
import toDo from '../assets/to-do.png'
import trainDelayMap from '../assets/train-delay-map.png'
import lienCapital from '../assets/lien-capital.png'
import slicr from '../assets/slicr.png'

export const email = 'teodor.lien@gmail.com'

export const skills = [
  {
    category: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'CSS/SCSS',
      'HTML',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Vercel', 'Docker'],
  },
]
export const projects = [
  {
    title: 'Slicr Budget App',
    description:
      'A personal budgeting web app that allows users to set monthly income, create spending categories, and track expenses in real time. Built with React, TypeScript, and Tailwind CSS. Data is stored in localStorage.',
    image: slicr,
    altText: 'Slicr Budget App',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://slicr-budget-app.vercel.app/',
  },
  {
    title: 'To Do List',
    description:
      'A task management app built with React and Tailwind CSS. Users can create, complete, and manage tasks with a clean and minimal UI.',
    image: toDo,
    altText: 'To Do App',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://to-do-teodor29.vercel.app/',
  },
  {
    title: 'Train Delay Map',
    description:
      'A real-time web application for monitoring train delays across Sweden. Displays stations and live delay data on an interactive Leaflet map with WebSocket-based updates. Users can save favorite stations for quick access.',
    image: trainDelayMap,
    altText: 'Train Delay Map',
    skills: ['JavaScript', 'SCSS', 'WebSockets', 'Leaflet', 'Vercel'],
    link: 'https://train-delay.vercel.app/',
  },
  {
    title: 'E-scooter Rental',
    description:
      'A full-stack group project featuring an electric scooter rental system with backend services, simulation layer, and three clients (admin, mobile, and desktop). Responsible for frontend development and Docker-based containerization for local development.',
    image: scooterAdminMap,
    altText: 'E-scooter Rental Platform',
    skills: [
      'React',
      'JavaScript',
      'MongoDB',
      'Node.js',
      'Express.js',
      'Docker',
      'REST API',
    ],
    link: 'https://github.com/Teodor29/e-scooter-project-vteam',
  },
  {
    title: 'Lien Capital',
    description:
      'A responsive corporate website built with Pico CMS for an investment company. Focused on clean design, performance, and maintainable structure using Twig templates and SCSS.',
    image: lienCapital,
    altText: 'Lien Capital Website',
    skills: ['PHP', 'Twig', 'SCSS', 'Pico CMS'],
    link: 'https://github.com/Teodor29/investment-company-design',
  },
]
