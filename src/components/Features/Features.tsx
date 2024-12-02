import React from "react";
import "./Features.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "flaticon-car",
      title: "Largest Dealership of Cars",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    },
    {
      icon: "flaticon-car-repair",
      title: "Unlimited Repair Warranty",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    },
    {
      icon: "flaticon-car-1",
      title: "Insurance Support",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
