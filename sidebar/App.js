import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    /* 사이드바 펴짐 */
    isSidebarEcpanded: true
  };

  /* 사이드바 펴진 상태 */
  sidebarExpanded = () => (
    <div className="sidebar">
      <span onClick={() => this.setState({ isSidebarEcpanded: false })}>
        접기
      </span>
      <ul>
        <li>메뉴100000000000000</li>
        <li>메뉴200000000000000</li>
        <li>메뉴300000000000000</li>
        <li>메뉴400000000000000</li>
        <li>메뉴500000000000000</li>
      </ul>
    </div>
  );

  /* 사이드바 접힌 상태 */
  sidebarCollapsed = () => (
    <div className="sidebar collapsed">
      <span onClick={() => this.setState({ isSidebarEcpanded: true })}>
        펴기
      </span>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );

  render() {
    const { isSidebarEcpanded } = this.state;

    return (
      <div className="app">
        {isSidebarEcpanded && this.sidebarExpanded()}
        {isSidebarEcpanded || this.sidebarCollapsed()}
        <div className="content"></div>
      </div>
    );
  }
}

export default App;
