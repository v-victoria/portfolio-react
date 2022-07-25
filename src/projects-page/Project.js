import React from "react";
import Button from "./Button";
import "./Project.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function Project({ project }) {
  return (
    <div
      className={
        "Project d-flex flex-column flex-md-row justify-content-between " +
        project.class
      }
    >
      <Zoom delay={200}>
        <img
          src={require("" + project.img)}
          alt={project.name}
          className="project-img"
        />
      </Zoom>
      <div className="project-info">
        <Fade bottom delay={400}>
          <h6>{project.header}</h6>
        </Fade>
        <Fade bottom delay={600}>
          <h5>{project.name}</h5>
        </Fade>
        <Fade bottom delay={800}>
          <p className="project-description">{project.description}</p>
        </Fade>
        <Fade bottom delay={1000}>
          <p className="tech-features">{project.tech}</p>
        </Fade>
        {project.buttons.map((buttonsRow, index) => {
          return (
            <div key={index} className="project-links row">
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
