import React from "react";
import Project from "./Project";
import "./Projects.css";
import { projects } from "./projectsInfo";
import Zoom from "react-reveal/Zoom";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <Zoom delay={200}>
        <h3 className="portfolio-title">Portfolio</h3>
      </Zoom>
      <Zoom delay={400}>
        <div className="portfolio-title-description">
          A selection of my personal website{" "}
          <br className="d-none d-sm-block" />
          and app projects
        </div>
      </Zoom>

      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
}
