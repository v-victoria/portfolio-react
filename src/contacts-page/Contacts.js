import React from "react";
import "./Contacts.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

export default function Contacts() {
  return (
    <footer className="Contacts" id="contacts">
      <div className="get-in-touch">
        <Zoom delay={200}>
          <p className="resume ms-4 me-4 ms-sm-0 me-sm-0">
            I believe it’s important to <span className="love">love</span> doing
            what you do, <br className="d-none d-sm-block" /> so the passion
            will continue to <span>motivate</span>
            <br className="d-none d-sm-block" /> and <span>improve</span>{" "}
            yourself.
          </p>
        </Zoom>
        <Fade top delay={400}>
          <p>Let's get in touch</p>
        </Fade>
        <img
          src={require("../svg/contacts-decor-background.svg").default}
          alt="Decor background"
        />
      </div>
      <div className="contact-content">
        <div className="email-info">
          <Flip top delay={600}>
            <a href="mailto:i.v.v@live.com">Please do contact me</a>
            <span> at </span>
            <span className="email">i.v.v@live.com</span>
          </Flip>
        </div>
        <Zoom delay={800}>
          <div className="contact-icons">
            <a
              href={require("./CV.pdf")}
              download="CV - Junior Front-end Developer - Victoria Martynenko"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../svg/cv-download.svg").default}
                alt="CV download icon"
              />
            </a>
            <a
              href="https://linkedin.com/in/victoria-martynenko"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../svg/linkedin-white.svg").default}
                alt="LinkedIn icon"
              />
            </a>
            <a
              href="https://github.com/v-victoria"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../svg/github.svg").default}
                alt="GitHub icon"
              />
            </a>
          </div>
        </Zoom>
        <Zoom delay={1000}>
          <div className="copyright">
            © 2022. This website was designed and coded by Victoria Martynenko,
            and it is{" "}
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
        </Zoom>
      </div>
    </footer>
  );
}
