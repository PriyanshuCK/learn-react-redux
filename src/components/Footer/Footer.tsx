import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h1 className="brand-name">
          <a href="#hero">The Car Project</a>
        </h1>
        <p className="brand-description">
          Ased do eiusm tempor incidi ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        <p className="brand-contact">lrrt.vercel.app</p>
        <p className="brand-contact">+91 99999 99999</p>
      </div>

      <div className="footer-section">
        <h2>About Us</h2>
        <ul className="footer-links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="footer-section top-brands">
        <h2>Top Brands</h2>
        <ul className="footer-links">
          {["BMW", "Lamborghini", "Camaro", "Audi"].map((brand) => (
            <li key={brand}>
              <a href="/">{brand}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-section newsletter">
        <h2>Newsletter</h2>
        <p>Subscribe to get the latest news and updates.</p>
        <div className="newsletter-form">
          <input
            type="text"
            placeholder="Add Email"
            className="newsletter-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      <div className="footer-section copy">
        <p>
          © Copyright. Designed and developed by{" "}
          <a href="/">Aryan & Priyanshu</a>.
        </p>
        <div className="social-links">
          {["Facebook", "Instagram", "LinkedIn", "Pinterest", "Behance"].map(
            (platform) => (
              <a href="/" key={platform}>
                <i>{platform}</i>
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
