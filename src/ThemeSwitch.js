import React from "react";
import "./ThemeSwitch.css";

export default function ThemeSwitch() {
  return (
    <div className="ThemeSwitch">
      <input type="checkbox" />
      <label htmlFor="switch"></label>
      <span className="theme-text ps-2">Night</span>
    </div>
  );
}
