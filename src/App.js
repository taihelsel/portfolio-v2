import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'; 
/*React Components*/
import Home from "./components/Home.js";
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
      this.state.initialImageCached ?
        <div className="App">
          <Home />
        </div> : <div></div>
    );
  }
}
export default App;
