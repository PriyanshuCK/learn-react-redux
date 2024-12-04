import React, { FC, useReducer } from "react";
import "./TaskSchedulerReact.css";
import { Outlet } from "react-router-dom";
import {
  defaultTask,
  TaskContext,
  TaskDispatchContext,
  taskReducer,
} from "../components/TaskContext";

interface TaskSchedulerReactProps {}

const TaskSchedulerReact: FC<TaskSchedulerReactProps> = () => {
  const [task, dispatch] = useReducer(taskReducer, defaultTask);
  return (
    <>
      <TaskContext.Provider value={task}>
        <TaskDispatchContext.Provider value={dispatch}>
          <Outlet />
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
};

export default TaskSchedulerReact;
