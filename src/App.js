import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Helalo, World! </h1>
      </div>
    );
  }
}

// module.hot.accept();

export default hot(module)(App);