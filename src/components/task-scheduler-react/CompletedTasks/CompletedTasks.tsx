import React, { FC } from "react";
import "./CompletedTasks.css";
import { TasksTable } from "../components/TasksTable";

interface CompletedTasksProps {}

const CompletedTasks: FC<CompletedTasksProps> = () => (
  <>
    <div>
      <TasksTable />
    </div>
  </>
);

export default CompletedTasks;
