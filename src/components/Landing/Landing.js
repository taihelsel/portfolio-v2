import React from 'react';
import '../.././App.css';

const Landing = () => {
    return (
      <section id="landing-page">
        <div id="landing-about">
            <div id="landing-headshot"><img src="" alt=""/></div>
            <div id="about-info">
                <h1>Tai Helsel</h1>
                <h2>Full Stack Developer</h2>
                <h2>Seattle, WA</h2>
                <h2>tai.helsel@gmail.com</h2>
            </div>
            <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nemo accusantium ad ea expedita voluptate in sapiente unde, fugit esse veritatis maxime natus commodi reprehenderit alias quos enim? Hic, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint illo quasi, cum cumque quibusdam assumenda accusamus, doloremque nostrum quis voluptate magnam totam nam porro autem earum necessitatibus laborum quisquam.</p>
        </div>
        <div id="landing-skills">
            <h1 id="landing-skills-label">Skills</h1>
            <ul className="skills-list">
                <li className="skill-label">Front End</li>
                <li className="skill-item">JavaScript</li>
                <li className="skill-item">JQuery</li>
                <li className="skill-item">HTML</li>
                <li className="skill-item">CSS3</li>
                <li className="skill-label">Frameworks / Templates</li>
                <li className="skill-item">React</li>
                <li className="skill-item">EJS</li>
                <li className="skill-item">Jinja2</li>
            </ul>
            <ul className="skills-list">
                <li className="skill-label">Back End</li>
                <li className="skill-item">PostgreSQL</li>
                <li className="skill-item">Sequelize</li>
                <li className="skill-item">MongoDB</li>
                <li className="skill-item">Mongoose</li>
                <li className="skill-item">Django</li>
                <li className="skill-label">Python</li>
                <li className="skill-item">Python3</li>
                <li className="skill-item">Django</li>
                <li className="skill-item">Tensorflow</li>
            </ul>
            <ul className="skills-list">
                <li className="skill-label">Version Control</li>
                <li className="skill-item">Git / GitHub</li>
                <li className="skill-item">Workflow</li>
                <li className="skill-item">Agile Methodoloiges</li>
                <li className="skill-item">Trello</li>
                <li className="skill-item">OS</li>
                <li className="skill-label">Windows</li>
                <li className="skill-item">Mac OS</li>
                <li className="skill-item">Linux</li>
            </ul>
        </div>
        <div id="landing-portfolio-btn"><a>Portfolio</a></div>
      </section>
    );
}

export default Landing;
