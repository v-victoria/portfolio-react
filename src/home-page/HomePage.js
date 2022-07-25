import React from "react";
import "./HomePage.css";
import homeImg from "../svg/homepage-img.svg";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Fade";

export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      <div className="center-block">
        <div className="text-block">
          <Slide left delay={0}>
            <div className="name-block">
              Hello, my name is <h2 className="name">Victoria</h2>.
            </div>
          </Slide>
          <Slide left delay={1000}>
            <div className="profession-block">
              I'm a{" "}
              <h1 className="profession text-underline-fist-color">
                Front-end Developer
              </h1>
              <br />
              based in England.
            </div>
          </Slide>
        </div>
        <Zoom delay={2000}>
          <img src={homeImg} alt="homepage girl" />
        </Zoom>
      </div>
      <a href="/#about-me" className="d-none d-md-inline">
        <i className="fa-solid fa-arrow-down-long"></i>
      </a>
    </div>
  );
}
