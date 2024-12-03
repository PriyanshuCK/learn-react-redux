import React from "react";
import About from "./components/About/About";
import CarHome from "./components/the-car-project/CarHome/CarHome";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import TaskSchedulerReact from "./components/task-scheduler-react/TaskSchedulerReact/TaskSchedulerReact";
import LearningNextJS from "./components/LearningNextJS/LearningNextJS";

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
            <Route path="/learning-nextjs" element={<LearningNextJS />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
