import React, { FC } from "react";
import "./Header.css";

const Header: FC = () => (
  <>
    <section>
      <div>
        <nav className="header-nav">
          <div className="logo">
            <a href=" ">carvilla</a>
          </div>
          <ul className="nav-links">
            <li>
              <a href=" ">home</a>
            </li>
            <li>
              <a href=" ">service</a>
            </li>
            <li>
              <a href=" ">featured cars</a>
            </li>
            <li>
              <a href=" ">new cars</a>
            </li>
            <li>
              <a href=" ">brands</a>
            </li>
            <li>
              <a href=" ">contracts</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </>
);

export default Header;
