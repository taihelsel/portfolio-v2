import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 
/*React Components*/
import Landing from "./components/Landing/Landing.js";
import Projects from  "./components/Projects/Projects.js";
class App extends Component {
  componentDidMount(){
    $("#landing-portfolio-btn").click(()=>{
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

export default App;
