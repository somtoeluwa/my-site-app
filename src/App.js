import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Home />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
