import React, { Component} from "react";
import {hot} from "react-hot-loader";
import RKLogo from "../src/assets/RKLOGOpng.png"
import "./App.css";


class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="Header"> Roma Kucherenko </h1>
        <div className="rk-image margin-centered">
          <img src={RKLogo} alt="RKLogo"/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);