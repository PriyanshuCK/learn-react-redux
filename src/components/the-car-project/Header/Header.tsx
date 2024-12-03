import React, { FC } from "react";
import "./Header.css";

const Header: FC = () => (
  <>
    <nav className="header-nav" id="car-header">
      <div className="logo">
        <a href="#car-header">The Car Project</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#car-header">Home</a>
        </li>
        <li>
          <a href="#new-cars">New</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#featured-cars">Featured</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
