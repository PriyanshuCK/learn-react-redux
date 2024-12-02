import React, { FC } from "react";
import "./FeaturedCars.css";

interface Car {
  img: string;
  model: string;
  price: string;
  description: string;
}

const featuredCars: Car[] = [
  {
    img: "assets/images/featured-cars/fc1.png",
    model: "BMW 6-series gran coupe",
    price: "$89,395",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc2.png",
    model: "chevrolet camaro wmv20",
    price: "$66,575",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc3.png",
    model: "lamborghini v520",
    price: "$125,250",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc4.png",
    model: "audi a3 sedan",
    price: "$95,500",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc4.png",
    model: "infiniti z5",
    price: "$36,850",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc5.png",
    model: "porsche 718 cayman",
    price: "$48,500",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc7.png",
    model: "bmw 8-series coupe",
    price: "$56,000",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    img: "assets/images/featured-cars/fc8.png",
    model: "BMW xseries-6",
    price: "$75,800",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
];

const FeaturedCars: FC = () => (
  <section className="featured-cars-section" id="featured-cars">
    <div className="featured-cars-container">
      <div className="featured-cars-header">
        <p>
          Checkout <span>the</span> featured cars
        </p>
        <h2>Featured Cars</h2>
      </div>
      <div className="featured-cars-grid">
        {featuredCars.map((car, index) => (
          <div key={index} className="featured-car-card">
            <div className="featured-car-image">
              <img src={car.img} alt={car.model} />
            </div>
            <div className="featured-car-details">
              <div className="car-info">
                <p>
                  Model: 2017 <span>3100 mi</span> <span>240HP</span> Automatic
                </p>
              </div>
              <h2>
                <a href=" ">{car.model}</a>
              </h2>
              <h3>{car.price}</h3>
              <p>{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCars;
