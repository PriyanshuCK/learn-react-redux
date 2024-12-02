import React from "react";
import About from "./components/About/About";
import CarHome from "./components/the-car-project/CarHome/CarHome";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeLayout from "./components/the-car-project/HomeLayout/HomeLayout";
import TaskSchedulerReact from "./components/task-scheduler-react/TaskSchedulerReact/TaskSchedulerReact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/car-home" element={<CarHome />} />
            <Route
              path="/task-scheduler-react"
              element={<TaskSchedulerReact />}
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
