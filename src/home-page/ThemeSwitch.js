import React, { useState, useEffect } from "react";
import "./ThemeSwitch.css";
import { ReactComponent as MoonIcon } from "../svg/moon.svg";
import { ReactComponent as SunIcon } from "../svg/sun.svg";

export default function ThemeSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [localStorageCheck, setLocalStorageCheck] = useState(false);

  function changeColorDark() {
    let navbarElem = document.querySelector(".navbar");
    navbarElem.classList.add("navbar-dark");
    document.documentElement.style.setProperty("--main-text-color", "#fcfcfd");
    document.documentElement.style.setProperty("--theme-background", "#13293D");
    document.documentElement.style.setProperty(
      "--theme-highlight-color",
      "#13293D"
    );
    document.documentElement.style.setProperty(
      "--first-switch-accent-color",
      "#ffb188"
    );
    document.documentElement.style.setProperty(
      "--second-switch-accent-color",
      "#057f84"
    );
  }

  function changeColorLight() {
    let navbarElem = document.querySelector(".navbar");
    navbarElem.classList.remove("navbar-dark");
    document.documentElement.style.setProperty("--main-text-color", "#000000");
    document.documentElement.style.setProperty("--theme-background", "#fcfcfd");
    document.documentElement.style.setProperty(
      "--theme-highlight-color",
      "#ffb188"
    );
    document.documentElement.style.setProperty(
      "--first-switch-accent-color",
      "#057f84"
    );
    document.documentElement.style.setProperty(
      "--second-switch-accent-color",
      "#ffb188"
    );
  }

  // Select the theme preference from localStorage
  let currentTheme = localStorage.getItem("theme");

  // If the current theme in localStorage is "dark"...
  if (currentTheme === "dark" && localStorageCheck === false) {
    setLocalStorageCheck(true);
    setIsEnabled(true);
  }

  useEffect(() => {
    let theme = "light";

    // If the body contains the .dark-theme class...
    if (isEnabled) {
      theme = "dark";
      changeColorDark();
    } else {
      changeColorLight();
    }
    // Then save the choice in localStorage
    localStorage.setItem("theme", theme);
  }, [isEnabled]);

  function toggleState() {
    setIsEnabled(!isEnabled);
  }

  return (
    <div className="ThemeSwitch">
      <input
        type="checkbox"
        id="switch"
        checked={isEnabled}
        onChange={toggleState}
      />
      <label htmlFor="switch">
        <div className="icons">
          <SunIcon className="sun" />
          <MoonIcon className="moon" />
        </div>
      </label>
    </div>
  );
}
