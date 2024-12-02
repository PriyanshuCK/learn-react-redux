import React, { FC } from "react";
import "./TaskSchedulerReact.css";
import TaskReactHome from "../TaskReactHome/TaskReactHome";

interface TaskSchedulerReactProps {}

const TaskSchedulerReact: FC<TaskSchedulerReactProps> = () => (
  <>
    <TaskReactHome />
  </>
);

export default TaskSchedulerReact;
