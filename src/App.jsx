import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";

const skillsList = [
  "HTML",
  "PHP",
  "JavaScript",
  "CSS",
  "SCSS",
  "Python",
  "Twig",
  "React",
  "Pico CMS",
  "Bootstrap",
  "Material-UI",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "Visual Studio Code",
  "Figma",
  "Photoshop",
  "REST API",
  "Postman",
];

function App() {
  return (
    <Router>
      <div className="mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col max-h-screen md:sticky top-0 pt-0">
              <Header />
            </div>

            <div className="py-4 md:py-28">
              <Home />
              <Skills skills={skillsList} />
              <Projects />
              <Footer />
              <ScrollTop>
                <button
                  aria-label="scroll back to top"
                  className="scroll-top rounded-full p-2 cursor-pointer"
                >
                  <MdKeyboardArrowUp size={24} />
                </button>
              </ScrollTop>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
