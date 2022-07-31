import React from "react";
import "./AboutMe.css";
import aboutMeImg from "../svg/personal_information.svg";
import Profile from "./Profile";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function AboutMe() {
  return (
    <div className="AboutMe" id="about-me">
      <Zoom>
        <h3>About Me</h3>
      </Zoom>
      <div className="info-block">
        <div className="row">
          <div className="col-md-4">
            <Zoom delay={200}>
              <img src={aboutMeImg} alt="personal information" />
            </Zoom>
          </div>

          <div className="col-md-8">
            <Fade bottom delay={200}>
              <p>
                My name is <b>Victoria Martynenko</b>.
              </p>
            </Fade>
            <Fade bottom delay={300}>
              <p>
                I was born and studied in Ukraine in the city of Dnipro. I
                currently live in England.
              </p>
            </Fade>
            <Fade bottom delay={400}>
              <p>
                Graduated from university with a degree in software engineering.
                At the same time, I studied computer graphics and design
                courses.
              </p>
            </Fade>
            <Fade bottom delay={500}>
              <p>
                I like drawing, listening to music, and reading new scientific
                research on various topics.
              </p>
            </Fade>
            <Fade bottom delay={600}>
              <p>
                Most of the time I worked as a <b>3D Artist</b> in the field of
                Architectural Visualization. You can see my work in my{" "}
                <a
                  href="http://victoria-martynenko.art/"
                  target="_blank"
                  rel="noreferrer"
                >
                  portfolio
                </a>
                .
              </p>
            </Fade>
            <Fade bottom delay={700}>
              <p>
                I have realised that I am satisfied with my achievements in the
                field of computer graphics and have decided to return to my main
                profession - <b>programming</b>, to be challenged and see new
                achievements.
              </p>
            </Fade>
            <Fade bottom delay={800}>
              <p>
                I completed the SheCodes courses towards{" "}
                <b>Front-end Web Developer</b> and completed several projects
                during the course, which can be viewed in more detail on this
                page.
              </p>
            </Fade>
          </div>
        </div>
        <Profile />
      </div>
    </div>
  );
}
