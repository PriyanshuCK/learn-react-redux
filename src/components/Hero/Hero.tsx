import React, { FC } from "react";
import "./Hero.css";

const Hero: FC = () => (
  <section id="hero">
    <div className="hero-div">
      <h2 className="hero-name">GET YOUR DESIRED CAR IN REASONABLE PRICE</h2>
      <p className="hero-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <button className="contact-us">Contact Us</button>
    </div>
  </section>
);

export default Hero;
