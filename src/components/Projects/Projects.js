import React from 'react';
import '../.././App.css';

const Projects = () => {
    return (
      <section id="projects-page">
        <ul className="projects-wrapper">
            <li className="projects-item"><div><h1>KayT Portfolio</h1></div><img src={require("../.././media/images/project-photos/kt-preview.png")} /></li>
            <li className="projects-item"><div><h1>Crypto App</h1></div><img src={require("../.././media/images/project-photos/crypto-preview.png")} /></li>
            <li className="projects-item"><div><h1>Restaurant Redesign</h1></div><img src={require("../.././media/images/project-photos/gorgai-preview.png")} /></li>
            <li className="projects-item"><div><h1>2048 Remake</h1></div><img src={require("../.././media/images/project-photos/2048-preview.png")} /></li>
        </ul>
      </section>
    );
}

export default Projects;
