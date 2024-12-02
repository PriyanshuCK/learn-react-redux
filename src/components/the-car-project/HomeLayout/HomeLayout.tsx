import React, { FC } from "react";
import "./HomeLayout.css";
import { NavLink, Outlet } from "react-router-dom";

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = () => (
  <>
    <nav className="global-header">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/car-home"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        The Car Project
      </NavLink>
      <NavLink
        to={"/task-scheduler-react"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Task Scheduler
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        About Us
      </NavLink>
    </nav>
    <Outlet />
  </>
);

export default HomeLayout;
