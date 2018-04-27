import React from 'react';
import '../.././App.css';

const Landing = () => {
    return (
      <section id="landing-page">
        <div id="landing-about">
            <div id="landing-headshot"><img src={require("../.././media/images/headshot.png")} alt="Headshot of Tai Helsel"/></div>
            <div id="about-info">
                <h1>Tai Helsel</h1>
                <h2>Full Stack Developer</h2>
                <h2>Seattle, WA</h2>
                <h2>tai.helsel@gmail.com</h2>
                <ul className="about-links">
                    <li><a href="https://github.com/taihelsel" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/taihelsel/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://resume.creddle.io/resume/v8ri9fi0fi" target="_blank">Resume</a></li>
                </ul>
            </div>
            <p id="about-text">Hi my name is Tai Helsel and I'm a Full Stack Developer. I have studied web development for almost two years now, and recently graduated from General Assembly's WDI course.  While studying at General Assembly I learned the best practices for the skills I had been teaching myself throughout High School. My favorite stack to work with so far is the PERN stack (PostgreSQL,Express,React,NodeJs). I am a very self-motivated person with a hunger for knowledge. I have experience not only in contributing to team projects, but also leading them.</p>
        </div>
        <div id="landing-skills">
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
                <li className="skill-label">Workflow</li>
                <li className="skill-item">Agile Methodoloiges</li>
                <li className="skill-item">Trello</li>
                <li className="skill-label">OS</li>
                <li className="skill-item">Windows</li>
                <li className="skill-item">Mac OS</li>
                <li className="skill-item">Linux</li>
            </ul>
        </div>
        <div id="landing-portfolio-btn"><a>Portfolio</a></div>
      </section>
    );
}

export default Landing;
