import React, { FC } from "react";
import "./TaskReactHome.css";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TasksTable } from "../components/TasksTable";
import { useTask, useTaskDispatch } from "../components/TaskContext";

interface TaskReactHomeProps {}

const TaskReactHome: FC<TaskReactHomeProps> = () => {
  const task = useTask();
  const dispatch = useTaskDispatch();

  return (
    <>
      <div className="flex justify-center items-center h-dvh w-full -mt-[69px] gap-8 flex-col">
        <Input
          className="w-96 rounded-none focus-visible:ring-0 shadow-none border-t-0 border-r-0 border-l-0 md:text-lg border-b-2 border-slate-500 focus-visible:border-b text-center"
          placeholder="What do you want to accomplish?"
          value={task.taskTitle}
          onChange={(e) => {
            dispatch({
              type: "set_taskTitle",
              taskTitle: e.target.value,
            });
          }}
        />
        <Link
          to={"set-deadline"}
          className={`${task.taskTitle ? "visible" : "invisible"}`}
        >
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
