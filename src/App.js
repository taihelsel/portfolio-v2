import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Landing from "./components/Landing/Landing.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
