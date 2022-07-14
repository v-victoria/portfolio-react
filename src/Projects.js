import React from "react";

export default function Projects() {
  return (
    <div className="portfolio" id="projects">
      <h3 className="portfolio-title">Portfolio</h3>
      <div className="portfolio-title-description">
        A selection of my personal website
        <br />
        and app projects
      </div>

      <div className="project-row">
        <img
          src="/img/portfolio-web.png"
          alt="Portfolio Website"
          className="project-img"
        />
        <div className="project-info">
          <h6>Project made on SheCodes course</h6>
          <h5>Portfolio Website</h5>
          <p className="project-description">
            Multi-page portfolio site with examples of my projects, information
            about me and a contact page.
          </p>
          <p className="tech-features">
            Built with HTML, CSS/Bootstrap, JavaScript
          </p>
          <div className="project-links">
            <a href="#" className="btn-fill">
              You are here ;)
            </a>
            <a href="" className="btn-transparent">
              Project Info
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="project-row">
        <img
          src="/img/weather-app.png"
          alt="Weather App"
          className="project-img"
        />
        <div className="project-info">
          <h6>Project made on SheCodes course</h6>
          <h5>Weather App</h5>
          <p className="project-description">
            The web app for searching weather conditions at your current
            location or across more than 200,000 cites around the world. View
            the current temperature, humidity and windspeed, and a 5-day
            forecast including minimum and maximum temperatures for the day.
          </p>
          <p className="tech-features">
            Built with HTML, CSS/Bootstrap, JavaScript, API/Axios
          </p>
          <div className="project-links">
            <a href="#" className="btn-fill">
              Launch project
            </a>
            <a href="" className="btn-transparent">
              Project Info
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="project-row">
        <img
          src="/img/oil-paint-shop.png"
          alt="Weather App"
          className="project-img"
        />
        <div className="project-info">
          <h6>The first project on SheCodes Basic course</h6>
          <h5>Oil Paint Shop</h5>
          <p className="project-description">
            Here you can find information about oil paints, their production,
            history and place an order.
          </p>
          <p className="tech-features">Built with HTML and CSS</p>
          <div className="project-links">
            <a
              href="/projects/oil-paint-shop/oil-paint-shop-project.html"
              className="btn-fill"
            >
              Launch project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
