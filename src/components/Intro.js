import React, { Fragment } from "react";
import "../styles/Intro.css";
import ReactTypingEffect from "react-typing-effect";

function Intro() {
  return (
    <Fragment>
      <ReactTypingEffect
        className="intro-text"
        text={["Hey, I'm Sean, and I'm a Sofware Developer"]}
        speed={50}
        eraseDelay={300}
      />
    </Fragment>
  );
}

export default Intro;
