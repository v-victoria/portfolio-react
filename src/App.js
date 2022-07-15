import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./projects-page/Projects";
import Experience from "./experience-page/Experience";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Navbar />
      <AboutMe />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
