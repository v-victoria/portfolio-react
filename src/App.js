import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Navbar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
