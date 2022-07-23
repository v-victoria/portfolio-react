import React from "react";
import "./Button.css";

export default function Button({ button }) {
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
}
