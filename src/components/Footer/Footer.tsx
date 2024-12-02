import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h1 className="brand-name">
          <a href="index.html">CarVilla</a>
        </h1>
        <p className="brand-description">
          Ased do eiusm tempor incidi ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        <p className="brand-contact">info@themesine.com</p>
        <p className="brand-contact">+1 (885) 256-315-4554</p>
      </div>

      <div className="footer-section about">
        <h2>About Devloon</h2>
        <ul className="footer-links">
          <li>
            <a href="/">About Us</a>
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
          {[
            "BMW",
            "Lamborghini",
            "Camaro",
            "Audi",
            "Infiniti",
            "Nissan",
            "Ferrari",
            "Porsche",
            "Land Rover",
            "Aston Martin",
            "Mercedes",
            "Opel",
          ].map((brand) => (
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
          © Copyright. Designed and developed by <a href="/">Themesine</a>.
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
