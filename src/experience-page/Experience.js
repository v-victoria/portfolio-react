import React from "react";
import { experience } from "./experienceInfo";
import "./Experience.css";
import Zoom from "react-reveal/Zoom";

export default function Experience() {
  return (
    <div className="Experience" id="experience">
      <Zoom delay={200}>
        <h3>My Background</h3>
      </Zoom>
      <div className="experience-block">
        {experience.map((item, index) => {
          return (
            <div key={index}>
              <div className="header">
                <Zoom delay={600}>
                  <span className="years">{item.year}</span>
                </Zoom>
                <Zoom delay={400}>
                  <span className="job">{item.header}</span>
                </Zoom>
              </div>
              <div className="row">
                <Zoom delay={800}>
                  <div className="col-3 col-md-1 text-center skill-header">
                    Skills
                  </div>
                </Zoom>
                <Zoom delay={1000}>
                  <div className="col-9 col-md-5">
                    <ul>
                      {item.skills.map((skill, i) => {
                        return (
                          <li key={i}>
                            <i className="fa-solid fa-check"></i>
                            {skill}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Zoom>
                <Zoom delay={1200}>
                  <div className="col-12 col-md-6">
                    {item.descriptions.map((description, k) => {
                      return <p key={k}>{description}</p>;
                    })}
                  </div>
                </Zoom>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
