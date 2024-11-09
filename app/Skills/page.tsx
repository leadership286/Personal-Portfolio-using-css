import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'; 

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="container" id="skills">
        <h1 className="section-title">My Skills</h1>
        
        <div className="skills-grid">

          {/* HTML */}
          <div className="skill-card">
            <div className="icon-title">
              <FaHtml5 className="icon html-icon" />
              <h2 className="skill-title">HTML</h2>
            </div>
          </div>

          {/* CSS */}
          <div className="skill-card">
            <div className="icon-title">
              <FaCss3Alt className="icon css-icon" />
              <h2 className="skill-title">CSS</h2>
            </div>
          </div>

          {/* JavaScript */}
          <div className="skill-card">
            <div className="icon-title">
              <FaJsSquare className="icon js-icon" />
              <h2 className="skill-title">JavaScript</h2>
            </div>
          </div>

          {/* React */}
          <div className="skill-card">
            <div className="icon-title">
              <FaReact className="icon react-icon" />
              <h2 className="skill-title">React</h2>
            </div>
          </div>

          {/* Node.js */}
          <div className="skill-card">
            <div className="icon-title">
              <FaNodeJs className="icon nodejs-icon" />
              <h2 className="skill-title">Node.js</h2>
            </div>
          </div>

          {/* GitHub */}
          <div className="skill-card">
            <div className="icon-title">
              <FaGithub className="icon github-icon" />
              <h2 className="skill-title">GitHub</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
