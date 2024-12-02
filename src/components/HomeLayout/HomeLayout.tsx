import React, { FC } from "react";
import "./HomeLayout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, Outlet } from "react-router-dom";

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = () => (
  <>
    <nav className="global-header">
      <Link to={"/"}>Home</Link>
      <Link to={"/car-home"}>The Car Project</Link>
      <Link to={"/about"}>About Us</Link>
    </nav>
    <Outlet />
  </>
);

export default HomeLayout;
