import React, { FC } from "react";
import "./Hero.css";

const Hero: FC = () => (
  <div className="hero-container" id="hero">
    <div className="hero-title">
      <h2 className="hero-name"> GET YOUR DESIRED CAR IN REASONABLE PRICE </h2>
      <p className="hero-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="hero-button">
        <button>Contact Us</button>
      </div>
    </div>
  </div>
);

export default Hero;
