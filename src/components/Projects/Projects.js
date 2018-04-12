import React, { Component } from 'react';
import '../.././App.css';
/*React Components*/
import SingleProject from "./SingleProject.js";
class Projects extends Component {
  constructor() {
    super();
    this.state = {
      singleproject: false,
      projectName: "Loading",
      projectDesc: "",
      projectSkills: "",
      projectRole: "",
      projectPreview:"",
      projectLinks: "",
    }
  }
  handleProjClick = (e) => {
    let el = e.currentTarget;
    this.setState({
      projectName: el.getAttribute("data-name"),
      projectDesc: el.getAttribute("data-desc"),
      projectSkills: el.getAttribute("data-skills"),
      projectRole: el.getAttribute("data-role"),
      projectPreview: el.getAttribute("data-img"),
      projectLinks: el.getAttribute("data-links"),
    })
    const x = document.getElementsByClassName("projects-item");
    x[0].classList.remove("animation-fadein");
    x[1].classList.remove("animation-fadein");
    x[0].classList.remove("animation-leftin");
    x[1].classList.remove("animation-rightin");
    x[2].classList.remove("animation-leftin");
    x[3].classList.remove("animation-rightin");
    x[4].classList.remove("animation-leftin");
    x[0].classList.add("animation-leftout");
    x[1].classList.add("animation-rightout");
    x[2].classList.add("animation-leftout");
    x[3].classList.add("animation-rightout");
    x[4].classList.add("animation-leftout");
    document.getElementById("single-project").setAttribute("style", "visibility:visible;opacity:1;");
    document.getElementsByClassName("close-btn")[0].setAttribute("style", "visibility:visible;opacity:1;");
  }
  handleCloseClick = (e) => {
    const x = document.getElementsByClassName("projects-item");
    x[0].classList.remove("animation-leftout");
    x[1].classList.remove("animation-rightout");
    x[2].classList.remove("animation-leftout");
    x[3].classList.remove("animation-rightout");
    x[4].classList.remove("animation-leftout");
    x[0].classList.add("animation-leftin");
    x[1].classList.add("animation-rightin");
    x[2].classList.add("animation-leftin");
    x[3].classList.add("animation-rightin");
    x[4].classList.add("animation-leftin");
    e.currentTarget.setAttribute("style", "visibility:hidden;opacity:0;");
    document.getElementById("single-project").setAttribute("style", "visibility:hidden;opacity:0;");
  }
  render() {
    return (
      <section id="projects-page">
        <ul className="projects-wrapper">
          <li data-links="https://taihelsel.github.io/kayt-mockup/,https://github.com/taihelsel/kayt-mockup" data-img="https://media.giphy.com/media/l2RC08fN7sGnytSxck/giphy.gif" data-name="KayT Portfolio" data-role="Front End Developer" data-desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae provident corrupti laborum beatae tempora similique unde repellendus reiciendis alias ducimus pariatur inventore aperiam mollitia odit, assumenda dolor a commodi?" data-skills="JavaScript,HTML5,CSS3" onClick={this.handleProjClick} className="projects-item"><div><h1>KayT Portfolio</h1></div><img src={require("../.././media/images/project-photos/kt-preview.png")} /></li>
          <li data-links="https://cryptocurrencyalert.herokuapp.com/auth/signup,https://github.com/taihelsel/project2-cryptoApp,https://trello.com/b/4OQcMTO5/project-2" data-img="https://thumbs.gfycat.com/GorgeousAgileChick-size_restricted.gif" data-name="Crypto App" data-role="Front & Back End Developer" data-desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae provident corrupti laborum beatae tempora similique unde repellendus reiciendis alias ducimus pariatur inventore aperiam mollitia odit, assumenda dolor a commodi?" data-skills="JavaScript,HTML5,CSS3,Bootstrap,EJS,NodeJS,Express,PostgreSQL,Sequelize" onClick={this.handleProjClick} className="projects-item"><div><h1>Crypto App</h1></div><img src={require("../.././media/images/project-photos/crypto-preview.png")} /></li>
          <li data-links="https://taihelsel.github.io/restaurant-mockup/,https://github.com/taihelsel/restaurant-mockup,https://trello.com/b/oKXyDPxI/rest-mockup" data-img="https://i.giphy.com/2Yc1KEenclmWrPt63C.gif" data-name="Restaurant Redesign" data-role="Front End Developer" data-desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae provident corrupti laborum beatae tempora similique unde repellendus reiciendis alias ducimus pariatur inventore aperiam mollitia odit, assumenda dolor a commodi?" data-skills="JavaScript,React,HTML5,CSS3" onClick={this.handleProjClick} className="projects-item"><div><h1>Restaurant Redesign</h1></div><img src={require("../.././media/images/project-photos/gorgai-preview.png")} /></li>
          <li data-links="https://taihelsel.github.io/game-project-host/games/2048/index.html,https://github.com/taihelsel/game-project-host/tree/master/games/2048" data-img="https://thumbs.gfycat.com/IdioticScarceGalapagosmockingbird-size_restricted.gif" data-name="2048 Remake" data-role="Front End Developer" data-desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae provident corrupti laborum beatae tempora similique unde repellendus reiciendis alias ducimus pariatur inventore aperiam mollitia odit, assumenda dolor a commodi?" data-skills="JavaScript,HTML5,CSS3" onClick={this.handleProjClick} className="projects-item"><div><h1>2048 Remake</h1></div><img src={require("../.././media/images/project-photos/2048-preview.png")} /></li>
          <li data-links="https://taihelsel.github.io/action-tat-mock/,https://github.com/taihelsel/action-tat-mock" data-img="https://thumbs.gfycat.com/CourageousLameEstuarinecrocodile-size_restricted.gif" data-name="Action Tattoo Redesign" data-role="Front End Developer" data-desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil debitis iusto ullam numquam expedita illum, architecto adipisci. Dignissimos, vitae, similique voluptatem enim vel sint, hic necessitatibus sapiente earum maxime maiores?" data-skills="JavaScript,React,HTML5,CSS3" className="projects-item" onClick={this.handleProjClick}><div><h1>Action Tattoo Redesign</h1></div><img src={require("../.././media/images/project-photos/action-preview.png")} /></li>
        </ul>
        <SingleProject links={this.state.projectLinks} name={this.state.projectName} role={this.state.projectRole} desc={this.state.projectDesc} skills={this.state.projectSkills} preview={this.state.projectPreview}/>
        <h1 onClick={this.handleCloseClick} className="close-btn">&#8592;</h1>
      </section>
    );
  }
}

export default Projects;
