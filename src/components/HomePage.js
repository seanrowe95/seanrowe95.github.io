import React from "react";
import Intro from "./Intro";
import headshot from "../images/headshot.jpg";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="intro-container">
      <Intro className="intro-flex-item" />
      <img src={headshot} alt="headshot" className="intro-flex-item"></img>
    </div>
  );
}

export default HomePage;
