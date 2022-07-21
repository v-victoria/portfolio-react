import React from "react";
import "./HomePage.css";
import homeImg from "../svg/homepage-img.svg";

export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      <div className="center-block">
        <div className="text-block">
          <h1>
            Hello, my name is <span className="name">Victoria</span>.
          </h1>
          <h2>
            I'm a{" "}
            <span className="profession text-underline-fist-color">
              Front-end Developer
            </span>
            <br />
            based in England.
          </h2>
        </div>
        <img src={homeImg} alt="homepage girl" />
      </div>
      <a href="/#about-me">
        <i className="fa-solid fa-arrow-down-long"></i>
      </a>
    </div>
  );
}
