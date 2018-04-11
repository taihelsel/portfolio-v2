import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery'; 
/*React Components*/
import Home from "./components/Home.js";
import KayT from "./components/Projects/KayT.js";
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
      });
    }
  }
  render() {
    return (
      this.state.initialImageCached?
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/projects/kayt" component={KayT} />
          </div>
        </Router>:<div></div>
    );
  }
}
export default App;
