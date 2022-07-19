import React from "react";
import "./Button.css";

export default function Button({ button }) {
  if (button.style === "fill" || button.style === "transparent") {
    return (
      <div className="Button col">
        <a
          href={button.href}
          className={"btn-" + button.style}
          target="_blank"
          rel="noreferrer"
        >
          {button.name}
        </a>
      </div>
    );
  } else {
    if (button.style === "github") {
      return (
        <div className="Button col">
          <a href={button.href} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}
