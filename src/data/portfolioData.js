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
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS/SCSS',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Other',
    items: ['Git', 'Vite', 'Vitest', 'Docker'],
  },
]
export const projects = [
  {
    title: 'Slicr Budget App',
    description:
      'A personal budgeting web app that allows users to set monthly income, create spending categories, and track expenses in real time. Data is stored in localStorage. Focus was on clean component architecture and a intuitive UI',
    image: slicr,
    altText: 'Slicr Budget App',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://slicr-budget-app.vercel.app/',
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
      'A full-stack group project featuring an electric scooter rental system with backend services, simulation layer, and three clients (admin, mobile, and desktop). I was responsible for frontend development and Docker-based containerization for local development.',
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
]
