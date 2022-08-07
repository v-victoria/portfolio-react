import React from "react";
import "./Profile.css";
import Fade from "react-reveal/Fade";

export default function Profile() {
  return (
    <div className="Profile">
      <div className="row line">
        <div className="col-12 col-sm-2 col-md-4 mb-4">
          <Fade bottom delay={200}>
            <h4 className="text-center text-sm-end me-0 me-md-4">Profile</h4>
          </Fade>
        </div>
        <div className="col-12 col-sm-10 col-md-8 text-center text-sm-start fw-semibold">
          <div className="row mb-4">
            <Fade bottom delay={400}>
              <div className="col-6">
                <i className="fa-solid fa-location-dot"></i>Banbury, England
              </div>
            </Fade>
            <Fade bottom delay={600}>
              <div className="col-6">
                <i className="fa-brands fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/in/victoria-martynenko/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin/victoria-martynenko
                </a>
              </div>
            </Fade>
          </div>
          <Fade bottom delay={800}>
            <div className="row mb-4 accent">
              <div className="col-6">
                <i className="fa-solid fa-graduation-cap"></i>Dnipropetrovsk
                National University of Railway Transport
              </div>
              <div className="col-6">
                <i className="fa-solid fa-briefcase"></i>SOFTWARE ENGINEER
              </div>
            </div>
          </Fade>
          <Fade bottom delay={1000}>
            <div className="row mb-4">
              <div className="col-6">
                <i className="fa-solid fa-cube"></i>Computer Academy “STEP”
              </div>
              <div className="col-6">
                <i className="fa-solid fa-briefcase"></i>Computer graphics and
                design
              </div>
            </div>
          </Fade>
          <Fade bottom delay={1200}>
            <div className="row accent">
              <div className="col-6">
                <i className="fa-solid fa-laptop-code"></i>SheCodes
              </div>
              <div className="col-6">
                <i className="fa-solid fa-briefcase"></i>front-end web developer
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="row line">
        <Fade bottom delay={200}>
          <div className="col-12 col-sm-2 col-md-4 mb-4">
            <h4 className="text-center text-sm-end me-0 me-md-4">Expertise</h4>
          </div>
        </Fade>
        <div className="col-12 col-sm-10 col-md-8 text-center text-sm-start fw-semibold">
          <div className="row">
            <Fade bottom delay={400}>
              <div className="col-4 col-sm-3">
                <ul>
                  <li>JAVASCRIPT</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </Fade>
            <Fade bottom delay={600}>
              <div className="col-4 col-sm-3">
                <ul>
                  <li>REACT</li>
                  <li>API</li>
                  <li>Hosting</li>
                </ul>
              </div>
            </Fade>
            <Fade bottom delay={800}>
              <div className="col-4 col-sm-6">
                <ul>
                  <li>SEO</li>
                  <li>Responsive</li>
                  <li>Flexbox</li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="row line">
        <Fade bottom delay={200}>
          <div className="col-12 col-sm-2 col-md-4 mb-4">
            <h4 className="text-center text-sm-end me-0 me-md-4">Tech Tools</h4>
          </div>
        </Fade>
        <div className="col-12 col-sm-10 col-md-8 text-center text-sm-start fw-semibold">
          <div className="row">
            <Fade bottom delay={400}>
              <div className="col-6">
                <ul>
                  <li>Visual Studio Code</li>
                  <li>GITHUB</li>
                </ul>
              </div>
            </Fade>
            <Fade bottom delay={600}>
              <div className="col-6">
                <ul>
                  <li>FIGMA</li>
                  <li>PHOTOSHOP</li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
