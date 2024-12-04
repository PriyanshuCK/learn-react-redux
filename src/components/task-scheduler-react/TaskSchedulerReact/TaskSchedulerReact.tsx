import React, { FC } from "react";
import "./TaskSchedulerReact.css";
import TaskReactHome from "../TaskReactHome/TaskReactHome";
import { Outlet } from "react-router-dom";

interface TaskSchedulerReactProps {}

const TaskSchedulerReact: FC<TaskSchedulerReactProps> = () => (
  <>
    <Outlet />
  </>
);

export default TaskSchedulerReact;
