import React from "react";
import "./Testimonial.css";

type Testimonial = {
  img: string;
  comment: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    img: "assets/images/clients/c1.png",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium.",
    name: "Tomas Lili",
    location: "New York",
  },
  {
    img: "assets/images/clients/c2.png",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium.",
    name: "Romi Rain",
    location: "London",
  },
  {
    img: "assets/images/clients/c3.png",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium.",
    name: "John Doe",
    location: "Washington",
  },
];

const Testimonials: React.FC = () => (
  <section className="testimonials" id="testimonials">
    <h2 className="testimonials-heading">What Our Clients Say</h2>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <img
            className="testimonial-img"
            src={testimonial.img}
            alt={testimonial.name}
          />
          <p className="testimonial-comment">{testimonial.comment}</p>
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-location">{testimonial.location}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
