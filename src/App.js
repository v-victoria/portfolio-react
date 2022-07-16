import React from "react";
import "./App.css";
import HomePage from "./home-page/HomePage";
import Navbar from "./navbar/Navbar";
import AboutMe from "./about-me-page/AboutMe";
import Projects from "./projects-page/Projects";
import Experience from "./experience-page/Experience";
import Contacts from "./contacts-page/Contacts";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Navbar />
      <AboutMe />
      <Projects />
      <Experience />
      <Contacts />
    </div>
  );
}

export default App;
