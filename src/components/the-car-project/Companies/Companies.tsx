import React, { FC } from "react";
import "./Companies.css";

const Companies: FC = () => {
  const brandImages: string[] = [
    "assets/images/brand/br1.png",
    "assets/images/brand/br2.png",
    "assets/images/brand/br3.png",
    "assets/images/brand/br4.png",
    "assets/images/brand/br5.png",
    "assets/images/brand/br6.png",
  ];

  return (
    <section className="companies-section">
      <div className="companies-grid">
        {brandImages.map((image, index) => (
          <div key={index} className="company-logo">
            <a href=" ">
              <img src={image} alt={`Brand ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
