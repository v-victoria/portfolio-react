import React from "react";
import "./AboutMe.css";
import aboutMeImg from "../svg/personal_information.svg";
import Profile from "./Profile";

export default function AboutMe() {
  return (
    <div className="AboutMe" id="about-me">
      <h3>About Me</h3>
      <div className="info-block">
        <div className="row">
          <div className="col-md-4">
            <img src={aboutMeImg} alt="personal information" />
          </div>
          <div className="col-md-8">
            <p>
              My name is <b>Victoria Martynenko</b>.
            </p>
            <p>
              I was born and studied in Ukraine in the city of Dnipro. I
              currently live in England.
            </p>
            <p>
              Graduated from university with a degree in software engineering.
              At the same time, I studied computer graphics and design courses.
            </p>
            <p>
              I like drawing, listening to music, and reading new scientific
              research on various topics.
            </p>
            <p>
              Most of the time I worked as a <b>3D Artist</b> in the field of
              Architectural Visualization. You can see my work in my{" "}
              <a
                href="https://victoriamartynenko.wixsite.com/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                portfolio
              </a>
              .
            </p>
            <p>
              I have realised that I am satisfied with my achievements in the
              field of computer graphics and have decided to return to my main
              profession - <b>programming</b>, to be challenged and see new
              achievements.
            </p>
            <p>
              I completed the SheCodes courses towards{" "}
              <b>Full Stack Developer</b> and completed several projects during
              the course, which can be viewed in more detail on this page.
            </p>
          </div>
        </div>
        <Profile />
      </div>
    </div>
  );
}
