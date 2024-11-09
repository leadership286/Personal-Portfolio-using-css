import React from "react";
import Image from "next/image";
import calculator from "@/public/Project-1.jpg";
import gallery from "@/public/Project-2.jpg";
import music from "@/public/Project-3.jpg";
import atm from "@/public/Project-4.jpg";
import counter from "@/public/Project-5.jpg";
import management from "@/public/Project-6.jpg";
import game from "@/public/project-7.jpg";
import converter from "@/public/Project-8.jpg";
import timer from "@/public/Project-9.jpg";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <Image src={calculator} alt="Project 1" className="project-image" />
            <h2 className="project-title">Calculator</h2>
            <a href="https://simple-calculator-zeta-olive.vercel.app" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={gallery} alt="Project 2" className="project-image" />
            <h2 className="project-title">Image Gallery</h2>
            <a href="https://project-image-gallery.vercel.app" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={music} alt="Project 3" className="project-image" />
            <h2 className="project-title">Music Player</h2>
            <a href="https://music-player-gules-alpha.vercel.app" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={atm} alt="Project 4" className="project-image" />
            <h2 className="project-title">ATM Machine</h2>
            <a href="https://github.com/leadership286/CLI-based-ATM-Machine.git" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={counter} alt="Project 5" className="project-image" />
            <h2 className="project-title">Word Counter</h2>
            <a href="https://github.com/leadership286/Word-Counter.git" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={management} alt="Project 6" className="project-image" />
            <h2 className="project-title">Student Management System</h2>
            <a href="https://github.com/leadership286/Student-Management-System.git" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={game} alt="Project 7" className="project-image" />
            <h2 className="project-title">Adventure Game</h2>
            <a href="https://github.com/leadership286/Adventure-Game.git" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <Image src={converter} alt="Project 8" className="project-image" />
            <h2 className="project-title">Currency Converter</h2>
            <a href="https://github.com/leadership286/Currncy-Converter.git" className="project-link">View Project</a>
          </div>

       
        </div>
      </div>
    </div>
  );
}
