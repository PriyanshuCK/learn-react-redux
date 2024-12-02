import React, { FC } from "react";
import "./TaskSchedulerReact.css";
import TaskReactHome from "../TaskReactHome/TaskReactHome";
// import { Provider } from "../../ui/provider";

interface TaskSchedulerReactProps {}

const TaskSchedulerReact: FC<TaskSchedulerReactProps> = () => (
  <>
    {/* <Provider> */}
    <TaskReactHome />
    {/* </Provider> */}
  </>
);

export default TaskSchedulerReact;
