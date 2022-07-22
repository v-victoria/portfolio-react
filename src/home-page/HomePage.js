import React from "react";
import "./HomePage.css";
import homeImg from "../svg/homepage-img.svg";

export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      <div className="center-block">
        <div className="text-block">
          <div className="name-block">
            Hello, my name is <h2 className="name">Victoria</h2>.
          </div>
          <div className="profession-block">
            I'm a{" "}
            <h1 className="profession text-underline-fist-color">
              Front-end Developer
            </h1>
            <br />
            based in England.
          </div>
        </div>
        <img src={homeImg} alt="homepage girl" />
      </div>
      <a href="/#about-me">
        <i className="fa-solid fa-arrow-down-long"></i>
      </a>
    </div>
  );
}
