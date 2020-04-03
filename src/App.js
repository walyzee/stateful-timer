import React, { Component } from "react";
import './App.css';
import Timer from "./timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='speaker'></div>
       <Timer />
        <div className='menu-btn'></div>
      </div>
    );
  }
}
export default App;