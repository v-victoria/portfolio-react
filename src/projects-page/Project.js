import React from "react";
import Button from "./Button";
import "./Project.css";

export default function Project({ project }) {
  return (
    <div className="Project">
      <img
        src={require("" + project.img)}
        alt={project.name}
        className="project-img"
      />
      <div className="project-info">
        <h6>{project.header}</h6>
        <h5>{project.name}</h5>
        <p className="project-description">{project.description}</p>
        <p className="tech-features">{project.tech}</p>
        {project.buttons.map((buttonsRow, index) => {
          return (
            <div key={index} className="project-links">
              {buttonsRow.map((button, i) => {
                return <Button key={i} button={button} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
