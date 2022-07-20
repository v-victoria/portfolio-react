import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile">
      <div className="row line">
        <div className="col-4">
          <h4>Profile</h4>
        </div>
        <div className="col-8 fw-semibold">
          <div className="row mb-4">
            <div className="col-6">
              <i className="fa-solid fa-location-dot"></i>Banbury, England
            </div>
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
          </div>
          <div className="row mb-4 accent">
            <div className="col-6">
              <i className="fa-solid fa-graduation-cap"></i>Dnipropetrovsk
              National University of Railway Transport
            </div>
            <div className="col-6">
              <i className="fa-solid fa-briefcase"></i>SOFTWARE ENGINEER
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-6">
              <i className="fa-solid fa-cube"></i>Computer Academy “STEP”
            </div>
            <div className="col-6">
              <i className="fa-solid fa-briefcase"></i>Computer graphics and
              design
            </div>
          </div>
          <div className="row accent">
            <div className="col-6">
              <i className="fa-solid fa-laptop-code"></i>SheCodes
            </div>
            <div className="col-6">
              <i className="fa-solid fa-briefcase"></i>full stack web developer
            </div>
          </div>
        </div>
      </div>
      <div className="row line">
        <div className="col-4">
          <h4>Expertise</h4>
        </div>
        <div className="col-2 fw-semibold">
          <ul>
            <li>JAVASCRIPT</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>REACT</li>
          </ul>
        </div>
        <div className="col-2 fw-semibold">
          <ul>
            <li>NODE JS</li>
            <li>API</li>
            <li>Hosting</li>
            <li>Flexbox</li>
          </ul>
        </div>
        <div className="col-4 fw-semibold">
          <ul>
            <li>SEO</li>
            <li>Responsive</li>
          </ul>
        </div>
      </div>
      <div className="row line">
        <div className="col-4">
          <h4>Tech Tools</h4>
        </div>
        <div className="col-4 fw-semibold">
          <ul>
            <li>Visual Studio Code</li>
            <li>GITHUB</li>
          </ul>
        </div>
        <div className="col-4 fw-semibold">
          <ul>
            <li>FIGMA</li>
            <li>PHOTOSHOP</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
