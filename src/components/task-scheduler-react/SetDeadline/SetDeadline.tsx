import React, { FC, useCallback } from "react";
import "./SetDeadline.css";
import {
  format,
  isToday,
  isBefore,
  isEqual,
  set,
  addMinutes,
  subMinutes,
} from "date-fns";
import { TimePicker } from "../../ui/time-picker";
import { DatePicker } from "../../ui/date-picker";
import { Button } from "components/ui/button";
import { Link } from "react-router-dom";
import { useTask, useTaskDispatch } from "../components/TaskContext";

interface SetDeadlineProps {}

const SetDeadline: FC<SetDeadlineProps> = () => {
  const task = useTask();
  const dispatch = useTaskDispatch();

  const setDateWithTimeCheck = useCallback(
    (date: Date | undefined, isStartDate: boolean) => {
      if (date) {
        const now = new Date();
        let newDate = new Date(date);

        if (isToday(newDate)) {
          newDate = set(newDate, {
            hours: now.getHours(),
            minutes:
              now.getMinutes() -
              (now.getMinutes() % 5) +
              (isStartDate ? 5 : 10),
          });
        } else {
          const existingTime = isStartDate
            ? task.startDateTime
            : task.endDateTime;
          if (existingTime) {
            newDate = set(newDate, {
              hours: existingTime.getHours(),
              minutes: existingTime.getMinutes(),
            });
          } else {
            newDate = set(newDate, { hours: 0, minutes: 0 });
          }
        }

        dispatch({
          type: isStartDate ? "set_startDate" : "set_endDate",
          [isStartDate ? "startDateTime" : "endDateTime"]: newDate,
        });

        if (
          isStartDate &&
          task.endDateTime &&
          (isEqual(newDate, task.endDateTime) ||
            isBefore(task.endDateTime, newDate))
        ) {
          const newEndDate = addMinutes(newDate, 5);
          dispatch({
            type: "set_endDate",
            endDateTime: newEndDate,
          });
        }

        if (
          !isStartDate &&
          task.startDateTime &&
          (isEqual(newDate, task.startDateTime) ||
            isBefore(newDate, task.startDateTime))
        ) {
          const newStartDate = subMinutes(newDate, 5);
          dispatch({
            type: "set_startDate",
            startDateTime: newStartDate,
          });
        }
      } else {
        dispatch({
          type: isStartDate ? "set_startDate" : "set_endDate",
          [isStartDate ? "startDateTime" : "endDateTime"]: undefined,
        });
      }
    },
    [dispatch, task.startDateTime, task.endDateTime]
  );

  const setStartDate = useCallback(
    (date: Date | undefined) => setDateWithTimeCheck(date, true),
    [setDateWithTimeCheck]
  );
  const setEndDate = useCallback(
    (date: Date | undefined) => setDateWithTimeCheck(date, false),
    [setDateWithTimeCheck]
  );

  const setTime = useCallback(
    (time: { hours: number; minutes: number }, isStartTime: boolean) => {
      const dateToUpdate = isStartTime ? task.startDateTime : task.endDateTime;
      if (dateToUpdate) {
        let newDateTime = set(dateToUpdate, {
          hours: time.hours,
          minutes: time.minutes,
        });
        const now = new Date();

        if (isToday(newDateTime) && isBefore(newDateTime, now)) {
          newDateTime = set(now, { seconds: 0, milliseconds: 0 });
        }

        dispatch({
          type: isStartTime ? "set_startDate" : "set_endDate",
          [isStartTime ? "startDateTime" : "endDateTime"]: newDateTime,
        });

        if (
          isStartTime &&
          task.endDateTime &&
          (isEqual(newDateTime, task.endDateTime) ||
            isBefore(task.endDateTime, newDateTime))
        ) {
          const newEndDateTime = addMinutes(newDateTime, 5);
          dispatch({
            type: "set_endDate",
            endDateTime: newEndDateTime,
          });
        }

        if (
          !isStartTime &&
          task.startDateTime &&
          (isEqual(newDateTime, task.startDateTime) ||
            isBefore(newDateTime, task.startDateTime))
        ) {
          const newStartDateTime = subMinutes(newDateTime, 5);
          dispatch({
            type: "set_startDate",
            startDateTime: newStartDateTime,
          });
        }
      }
    },
    [dispatch, task.startDateTime, task.endDateTime]
  );

  const setStartTime = useCallback(
    (time: { hours: number; minutes: number }) => setTime(time, true),
    [setTime]
  );
  const setEndTime = useCallback(
    (time: { hours: number; minutes: number }) => setTime(time, false),
    [setTime]
  );

  const startTime = task.startDateTime
    ? {
        hours: task.startDateTime.getHours(),
        minutes: task.startDateTime.getMinutes(),
      }
    : { hours: new Date().getHours(), minutes: new Date().getMinutes() };

  const endTime = task.endDateTime
    ? {
        hours: task.endDateTime.getHours(),
        minutes: task.endDateTime.getMinutes(),
      }
    : { hours: new Date().getHours(), minutes: new Date().getMinutes() };

  return (
    <div className="-mt-[69px] flex flex-col justify-center h-svh items-center gap-6">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <h2>Select start date and time:</h2>
          <div>
            <DatePicker date={task.startDateTime} setDate={setStartDate} />
          </div>
          <div className={`${task.startDateTime ? "" : "invisible"}`}>
            <TimePicker
              date={task.startDateTime}
              time={startTime}
              setTime={setStartTime}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h2>Select end date and time:</h2>
          <div>
            <DatePicker date={task.endDateTime} setDate={setEndDate} />
          </div>
          <div className={`${task.endDateTime ? "" : "invisible"}`}>
            <TimePicker
              date={task.endDateTime}
              time={endTime}
              setTime={setEndTime}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p
          className={`text-sm ${task.startDateTime ? "visible" : "invisible"}`}
        >
          {task.startDateTime
            ? `Start: ${format(task.startDateTime, "PPpp")}`
            : "Pick start date to set deadline"}
        </p>
        <p className={`text-sm ${task.endDateTime ? "visible" : "invisible"}`}>
          {task.endDateTime
            ? `End: ${format(task.endDateTime, "PPpp")}`
            : "Pick end date to set deadline"}
        </p>
        <Link
          to={"/task-scheduler-react"}
          className={`${
            task.startDateTime && task.endDateTime ? "visible" : "invisible"
          } mt-3`}
        >
          <Button>Set Deadline</Button>
        </Link>
      </div>
    </div>
  );
};

export default SetDeadline;
