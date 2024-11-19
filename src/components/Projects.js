import { useState } from "react";
import ProjectItem from "./ProjectItem";
import ImagePlaceholder from "../assets/images/ImagePlaceholder.webp";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      html_url: "https://github.com/KaymMikael/node-file-sorter",
      imgURL: ImagePlaceholder,
      name: "Node.js File Sorter",
      languages: ["Javascript"],
    },
    {
      id: 2,
      html_url: "https://github.com/KaymMikael/weather-app",
      imgURL: ImagePlaceholder,
      name: "Weather Web App",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      html_url: "https://github.com/KaymMikael/ProgrammingQuotesGenerator",
      imgURL: ImagePlaceholder,
      name: "Programming Quote Generator",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      html_url: "https://github.com/KaymMikael/blog-app",
      imgURL: ImagePlaceholder,
      name: "Blog Web App",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 5,
      html_url:
        "https://github.com/KaymMikael/simple-javascript-student-manager",
      imgURL: ImagePlaceholder,
      name: "Student Manager",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      html_url: "https://github.com/KaymMikael/simple-rock-paper-and-scissors",
      imgURL: ImagePlaceholder,
      name: "Rock Paper and Scissors",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 7,
      html_url: "https://github.com/KaymMikael/ConsoleTicTacToe",
      imgURL: ImagePlaceholder,
      name: "Tic Tac Toe",
      languages: ["C#"],
    },
    {
      id: 8,
      html_url: "https://github.com/KaymMikael/To-Do-MobileApplication-SQLite",
      imgURL: ImagePlaceholder,
      name: "To Do List Mobile Application",
      languages: ["Java"],
    },
    {
      id: 9,
      html_url: "https://kaym-recipe-finder.onrender.com/",
      imgURL: ImagePlaceholder,
      name: "Recipe Finder",
      languages: ["HTML", "CSS", "JavaScript", "ReactJs"],
    },
    {
      id: 10,
      html_url: "https://digital-journal-landing-page.onrender.com",
      imgURL: ImagePlaceholder,
      name: "Journal Lading Page",
      languages: ["HTML", "CSS", "JavaScript", "TailWindCSS"],
    },
  ]);

  return (
    <div className="bg-white" id="project">
      <section className="container-lg">
        <h1 className="text-center">Projects</h1>
        <p className="text-muted text-center">
          Throughout my development journey, I've worked on various projects
          that showcase my skills in front-end and back-end technologies. These
          projects demonstrate my ability to create functional, responsive, and
          dynamic applications that solve real-world problems.
        </p>
        <div className="row row-gap-3 justify-content-center">
          {projects.length
            ? projects.map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))
            : ""}
        </div>
      </section>
    </div>
  );
};

export default Projects;
