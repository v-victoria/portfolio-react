import React from "react";
import "./Button.css";
import Fade from "react-reveal/Fade";

export default function Button({ button }) {
  return (
    <div className="Button col-12 col-sm col-md-6">
      <Fade bottom delay={800}>
        <a
          href={button.href}
          className={"btn-" + button.style}
          target="_blank"
          rel="noreferrer"
        >
          {button.name}
        </a>
      </Fade>
    </div>
  );
}
