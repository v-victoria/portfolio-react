import React from "react";
import Project from "./Project";
import "./Projects.css";
import { projects } from "./projectsInfo";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <h3 className="portfolio-title">Portfolio</h3>
      <div className="portfolio-title-description">
        A selection of my personal website
        <br />
        and app projects
      </div>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
}
