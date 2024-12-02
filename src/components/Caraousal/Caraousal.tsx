import React, { FC } from "react";
import "./Caraousal.css";

interface Car {
  img: string;
  title: string;
  description: string;
  link: string;
}

const cars: Car[] = [
  {
    img: "assets/images/new-cars-model/ncm2.png",
    title: "BMW Series-3 Wagon",
    description: "Experience the unmatched performance and luxury of BMW.",
    link: "#",
  },
  {
    img: "assets/images/new-cars-model/ncm3.png",
    title: "Ferrari 488 Superfast",
    description: "Feel the thrill of driving a high-performance Ferrari.",
    link: "#",
  },
  {
    img: "assets/images/new-cars-model/ncm1.png",
    title: "Chevrolet Camaro ZA100",
    description: "Power and style combined in the Camaro ZA100.",
    link: "#",
  },
];

const Caraousal: FC = () => (
  <section className="caraousal-section" id="new-cars">
    <div className="caraousal-container">
      <h2 className="caraousal-title">Newest Cars</h2>
      <div className="caraousal-wrapper">
        {cars.map((car, index) => (
          <div key={index} className="caraousal-item">
            <img src={car.img} alt={car.title} className="caraousal-img" />
            <h3 className="caraousal-item-title">{car.title}</h3>
            <p className="caraousal-item-desc">{car.description}</p>
            <button
              className="caraousal-button"
              onClick={() => (window.location.href = car.link)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Caraousal;
