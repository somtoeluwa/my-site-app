import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Timeline from "./components/timeline";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Home />
          <About />
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
