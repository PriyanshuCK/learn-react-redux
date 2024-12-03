import React, { FC } from "react";
import "./TaskReactHome.css";
import { Input } from "../../ui/input";

interface TaskReactHomeProps {}

const TaskReactHome: FC<TaskReactHomeProps> = () => (
  <>
    <div className="flex justify-center items-center h-dvh w-full -mt-[69px]">
      <Input
        className="w-96 rounded-none focus-visible:ring-0 shadow-none border-t-0 border-r-0 border-l-0 md:text-lg border-b-2 border-emerald-500 focus-visible:border-b text-center"
        placeholder="What do you want to accomplish?"
      />
    </div>
  </>
);

export default TaskReactHome;
