import React from "react";
import "./Button.css";

export default function Button({ button }) {
  return (
    <div className="Button col-12 col-sm col-md-6">
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
