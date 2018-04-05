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
        <div id="landing-skills"></div>
        <a id="landing-portfolio-btn"></a>
      </section>
    );
}

export default Landing;
