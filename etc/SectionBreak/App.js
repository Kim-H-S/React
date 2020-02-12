import React, { Component } from "react";
import "./App.css";
import Contens from "./components/Contens";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contens></Contens>
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
