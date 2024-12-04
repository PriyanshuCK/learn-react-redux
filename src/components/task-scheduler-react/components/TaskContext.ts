import { createContext, Dispatch, useContext } from "react";

interface taskProps {
  taskTitle: string;
  priority: "low" | "medium" | "high" | undefined;
  startDateTime: Date | undefined;
  endDateTime: Date | undefined;
  status: "incomplete" | "complete";
}

interface actionProps extends Partial<taskProps> {
  type: string;
}

export function taskReducer(task: taskProps, action: actionProps) {
  switch (action.type) {
    case "set_taskTitle": {
      return {
        ...task,
        taskTitle: action.taskTitle,
      };
    }
    case "set_startDate": {
      return {
        ...task,
        startDateTime: action.startDateTime,
      };
    }
    case "set_endDate": {
      return {
        ...task,
        endDateTime: action.endDateTime,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const defaultTask: taskProps = {
  taskTitle: "",
  priority: undefined,
  startDateTime: undefined,
  endDateTime: undefined,
  status: "incomplete",
};

export const TaskContext = createContext(defaultTask);
export const TaskDispatchContext = createContext<Dispatch<actionProps>>(() => {
  throw new Error("TaskDispatchContext.Provider is missing!");
});

export function useTask() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}
