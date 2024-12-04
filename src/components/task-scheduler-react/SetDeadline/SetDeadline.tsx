import React, { FC, useCallback } from "react";
import "./SetDeadline.css";
import { format, isToday, isBefore, isEqual, set, addMinutes } from "date-fns";
import { TimePicker } from "../../ui/time-picker";
import { DatePicker } from "../../ui/date-picker";
import { Button } from "components/ui/button";
import { Link } from "react-router-dom";
import { useTask, useTaskDispatch } from "../components/TaskContext";

interface SetDeadlineProps {}

// Next feature/bug to work on: Setting end time <= start time => (update start time > current time and end time > start time)

const SetDeadline: FC<SetDeadlineProps> = () => {
  const task = useTask();
  const dispatch = useTaskDispatch();

  const setDateWithTimeCheck = useCallback(
    (date: Date | undefined, isStartDate: boolean) => {
      if (date) {
        const now = new Date();
        let newDate = new Date(date);

        if (isToday(newDate)) {
          // Set to current time if it's today
          newDate = set(newDate, {
            hours: now.getHours(),
            minutes: now.getMinutes() - (now.getMinutes() % 5) + 5,
          });
        } else {
          // Preserve existing time or set to 00:00 if no existing time
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

        // Ensure end date/time is after start date/time
        if (!isStartDate && task.startDateTime) {
          if (
            isBefore(newDate, task.startDateTime) ||
            isEqual(newDate, task.startDateTime)
          ) {
            newDate = addMinutes(task.startDateTime, 5);
          }
        }

        dispatch({
          type: isStartDate ? "set_startDate" : "set_endDate",
          [isStartDate ? "startDateTime" : "endDateTime"]: newDate,
        });

        // If setting start date and it's after or equal to end date, update end date
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
          // If the new time is in the past, set it to the current time
          newDateTime = set(now, { seconds: 0, milliseconds: 0 });
        }

        // Ensure end time is after start time
        if (!isStartTime && task.startDateTime) {
          if (
            isBefore(newDateTime, task.startDateTime) ||
            isEqual(newDateTime, task.startDateTime)
          ) {
            newDateTime = addMinutes(task.startDateTime, 5);
          }
        }

        dispatch({
          type: isStartTime ? "set_startDate" : "set_endDate",
          [isStartTime ? "startDateTime" : "endDateTime"]: newDateTime,
        });

        // If setting start time and it's after or equal to end time, update end time
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
