import React, { FC } from "react";
import "./CarHome.css";
import Hero from "../Hero/Hero";
import SearchComponent from "../Search/Search";
import Caraousal from "../Caraousal/Caraousal";
import Features from "../Features/Features";
import FeaturedCars from "../Featured_cars/FeaturedCars";
import Testimonials from "../Testimonial/Testimonial";
import Companies from "../Companies/Companies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface CarHomeProps {}

const CarHome: FC<CarHomeProps> = () => (
  <>
    <Header />
    <Hero />
    <SearchComponent />
    <Caraousal />
    <Features />
    <FeaturedCars />
    <Testimonials />
    <Companies />
    <Footer />
  </>
);

export default CarHome;
