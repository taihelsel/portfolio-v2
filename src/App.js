import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 
/*React Components*/
import Landing from "./components/Landing/Landing.js";
import Projects from  "./components/Projects/Projects.js";
class App extends Component {
  constructor(){
    super();
    this.state = {
      initialImageCached:false,
    }
  }
  componentWillMount(){
    let img = new Image();
    img.src = require("./media/images/headshot.png");
    img.onload = () =>{
      this.setState({
        initialImageCached:true,
      })
    }
  }
  componentDidMount(){
    $("#landing-portfolio-btn").click(()=>{
      $('html, body').animate({
        scrollTop: $("#projects-page").offset().top
      }, 1000);
    });
    window.addEventListener("scroll", () => {
      const projects = document.getElementById("projects-page");
      const x = document.getElementsByClassName("projects-item");
      const offset =  window.screen.height/3;
      let shouldAnimate = x[0].classList.contains("animation-fadein");
      const projects_top = projects.getBoundingClientRect().top;
      console.log(projects_top);
      if(projects_top < offset && !(shouldAnimate)){
        x[0].classList.add("animation-fadein");
        x[1].classList.add("animation-fadein");
        x[2].classList.add("animation-leftin");
        x[3].classList.add("animation-rightin"); 
      }
  })
  }
  render() {
    return (
      this.state.initialImageCached?
      <div className="App">
        <Landing />
        <Projects />
      </div>:<div></div>
    );
  }
}

export default App;
