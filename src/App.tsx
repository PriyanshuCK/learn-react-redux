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
import About from "./components/About/About";
import CarHome from "./components/CarHome/CarHome";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout/HomeLayout";

function App() {
  return (
    <>
      <Router>
        {/* <Route path="/" element={} */}
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/car-home" element={<CarHome />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
