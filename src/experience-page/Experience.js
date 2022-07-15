import React from "react";
import { experience } from "./experienceInfo";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="Experience">
      <h3>My Background</h3>
      <div className="experience-block">
        {experience.map((item, index) => {
          return (
            <div key={index}>
              <div className="header">
                <span className="years">{item.year}</span>
                <span className="job">{item.header}</span>
              </div>
              <div className="row">
                <div className="col-1 skill-header">Skills</div>
                <div className="col-5">
                  <ul>
                    {item.skills.map((skill, i) => {
                      return (
                        <li key={i}>
                          <i class="fa-solid fa-check"></i>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-6">
                  {item.descriptions.map((description, k) => {
                    return <p key={k}>{description}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
