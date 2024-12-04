import React, { FC, useState } from "react";
import "./TaskReactHome.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TasksTable } from "../components/tasks-table";

interface TaskReactHomeProps {}

const TaskReactHome: FC<TaskReactHomeProps> = () => {
  const [task, setTask] = useState("");
  return (
    <>
      <div className="flex justify-center items-center h-dvh w-full -mt-[69px] gap-8 flex-col">
        <Input
          className="w-96 rounded-none focus-visible:ring-0 shadow-none border-t-0 border-r-0 border-l-0 md:text-lg border-b-2 border-emerald-500 focus-visible:border-b text-center"
          placeholder="What do you want to accomplish?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Link to={"set-deadline"} className={`${task ? "block" : "hidden"}`}>
          <Button className="">
            Set Deadline
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div>
        <TasksTable />
      </div>
    </>
  );
};

export default TaskReactHome;
