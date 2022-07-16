import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../svg/logo.svg";

export default function Navbar() {
  function clearNavActiveLinks() {
    document.querySelectorAll(".nav-link").forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", function (e) {
    let navbarElem = document.querySelector(".navbar");
    let navbarSizeReplaceElem = document.querySelector(".navbar-size-replace");

    let scrollDistance = window.scrollY;

    if (scrollDistance > window.innerHeight) {
      // Fix navbar at the top
      navbarElem.classList.add("fixed-top");
      navbarSizeReplaceElem.classList.remove("d-none");
      navbarSizeReplaceElem.classList.add("d-block");

      let navAboutMeElem = document.querySelector("#nav-about-me");
      let navProjectsElem = document.querySelector("#nav-projects");
      let navExperienceElem = document.querySelector("#nav-experience");
      let navContactsElem = document.querySelector("#nav-contacts");

      let aboutMeElem = document.querySelector("#about-me");
      let projectsElem = document.querySelector("#projects");
      let experienceElem = document.querySelector("#experience");
      let contactsElem = document.querySelector("#contacts");

      let navbarHeight = document.querySelector(".navbar").clientHeight;

      // set the active menu item depending on the scroll distance
      if (aboutMeElem.offsetTop - navbarHeight <= scrollDistance) {
        clearNavActiveLinks();
        navAboutMeElem.classList.add("active");
      }
      if (projectsElem.offsetTop - navbarHeight <= scrollDistance) {
        clearNavActiveLinks();
        navProjectsElem.classList.add("active");
      }
      if (experienceElem.offsetTop - navbarHeight <= scrollDistance) {
        clearNavActiveLinks();
        navExperienceElem.classList.add("active");
      }
      if (contactsElem.offsetTop - navbarHeight <= scrollDistance) {
        clearNavActiveLinks();
        navContactsElem.classList.add("active");
      }
    } else {
      navbarElem.classList.remove("fixed-top");
      navbarSizeReplaceElem.classList.add("d-none");
      navbarSizeReplaceElem.classList.remove("d-block");
    }
  });
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
              <a className="nav-link" href="#experience" id="nav-experience">
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
