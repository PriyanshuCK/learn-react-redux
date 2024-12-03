import React, { FC } from "react";
import "./CompletedTasks.css";
import { TasksTable } from "../components/tasks-table";

interface CompletedTasksProps {}

const CompletedTasks: FC<CompletedTasksProps> = () => (
  <>
    <div>
      <TasksTable />
    </div>
  </>
);

export default CompletedTasks;
