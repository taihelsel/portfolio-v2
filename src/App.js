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
