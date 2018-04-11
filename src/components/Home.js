import React, { Component } from 'react';
import '.././App.css';
import $ from 'jquery'; 
/*React Components*/
import Landing from "./Landing/Landing.js";
import Projects from  "./Projects/Projects.js";
class Home extends Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            if(window.location.pathname === "/"){
                const projects = document.getElementById("projects-page");
                const x = document.getElementsByClassName("projects-item");
                const offset = window.screen.height / 3;
                const shouldAnimate = x[0].classList.contains("animation-fadein");
                const projects_top = projects.getBoundingClientRect().top;
                if (projects_top < offset && !(shouldAnimate)&&document.getElementById("single-project").style.visibility==="hidden") {
                    document.getElementById("landing-portfolio-btn").setAttribute("style", "opacity:0");
                    x[0].classList.remove("animation-leftout");
                    x[1].classList.remove("animation-rightout");
                    x[2].classList.remove("animation-leftout");
                    x[3].classList.remove("animation-rightout");
                    x[0].classList.add("animation-fadein");
                    x[1].classList.add("animation-fadein");
                    x[2].classList.add("animation-leftin");
                    x[3].classList.add("animation-rightin");
                } else if (projects_top > offset && shouldAnimate) {
                    document.getElementById("landing-portfolio-btn").setAttribute("style", "opacity:1");
                    x[0].classList.remove("animation-fadein");
                    x[1].classList.remove("animation-fadein");
                    x[2].classList.remove("animation-leftin");
                    x[3].classList.remove("animation-rightin");
                    x[0].classList.add("animation-leftout");
                    x[1].classList.add("animation-rightout");
                    x[2].classList.add("animation-leftout");
                    x[3].classList.add("animation-rightout");
                }
            }
        });
        $("#landing-portfolio-btn > a").click(()=>{
            $('html, body').animate({
              scrollTop: $("#projects-page").offset().top
            }, 1000);
          });
    }
  render() {
    return (
      <div className="App">
        <Landing />
        <Projects />
      </div>
    );
  }
}
export default Home;
