import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import SearchComponent from "./components/Search/Search";
import Testimonials from "./components/Testimonial/Testimonial";
import Features from "./components/Features/Features";
import FeaturedCars from "./components/Featured_cars/FeaturedCars";
import Companies from "./components/Companies/Companies";
import Caraousal from "./components/Caraousal/Caraousal";

function App() {
  return (
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
}

export default App;
