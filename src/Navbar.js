import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "./svg/logo.svg";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand mt-2" href="#home">
            <Logo />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
              <a className="nav-link active" href="#about-me" id="nav-about-me">
                About me
              </a>
              <a className="nav-link" href="#projects" id="nav-projects">
                Projects
              </a>
              <a className="nav-link" href="#projects" id="nav-projects">
                Experience
              </a>
              <a className="nav-link" href="#contacts" id="nav-contacts">
                Contacts
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="navbar-size-replace d-none"></div>
    </div>
  );
}
