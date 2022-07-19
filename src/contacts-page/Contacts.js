import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <footer className="Contacts" id="contacts">
      <div className="get-in-touch">
        <p className="resume">
          I believe it’s important to <span className="love">love</span> doing
          what you do,
          <br />
          so the passion will continue to <span>motivate</span>
          <br />
          and <span>improve</span> yourself.
        </p>
        <p>Let's get in touch</p>
        <img
          src={require("../svg/contacts-decor-background.svg").default}
          alt="Decor background"
        />
      </div>
      <div className="contact-content">
        <div className="email-info">
          <a href="mailto:i.v.v@live.com">Please do contact me</a> at{" "}
          <span className="email">i.v.v@live.com</span>
        </div>
        <div className="contact-icons">
          <a href="/">
            <img
              src={require("../svg/cv-download.svg").default}
              alt="CV download icon"
            />
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
        <div className="copyright">
          © 2022. This website was coded by Victoria Martynenko, and it is{" "}
          <a
            href="https://github.com/v-victoria/portfolio-react"
            title="Link to my GitHub"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
