import React, { FC, useEffect, useState } from "react";
import "./SetDeadline.css";
import { format } from "date-fns";
import { TimePicker } from "../../ui/time-picker";
import { DatePicker } from "../../ui/date-picker";
import { Button } from "components/ui/button";
import { Link } from "react-router-dom";

interface SetDeadlineProps {}

const SetDeadline: FC<SetDeadlineProps> = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [startTime, setStartTime] = useState({ hours: 0, minutes: 0 });

  const combinedStartDateTime = startDate
    ? new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate(),
        startTime.hours,
        startTime.minutes
      )
    : null;

  const [endDate, setEndDate] = React.useState<Date>();
  const [endTime, setEndTime] = useState({ hours: 0, minutes: 0 });

  const combinedEndDateTime = endDate
    ? new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate(),
        endTime.hours,
        endTime.minutes
      )
    : null;

  useEffect(() => {
    setStartTime({ hours: 23, minutes: 55 });
  }, [startDate]);

  useEffect(() => {
    setEndTime({ hours: 23, minutes: 55 });
  }, [endDate]);

  return (
    <>
      <div className="-mt-[69px] flex flex-col justify-center h-svh items-center gap-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="flex flex-col gap-2 items-center">
            <h2>Select start date and time:</h2>
            <div>
              <DatePicker date={startDate} setDate={setStartDate} />
            </div>
            <div className={`${startDate ? "" : "invisible"}`}>
              <TimePicker
                date={startDate}
                time={startTime}
                setTime={setStartTime}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h2>Select end date and time:</h2>
            <div>
              <DatePicker date={endDate} setDate={setEndDate} />
            </div>
            <div className={`${endDate ? "" : "invisible"}`}>
              <TimePicker date={endDate} time={endTime} setTime={setEndTime} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p
            className={`text-sm ${
              combinedStartDateTime ? "visible" : "invisible"
            }`}
          >
            {combinedStartDateTime
              ? `Start: ${format(combinedStartDateTime, "PPpp")}`
              : "Pick start date to set deadline"}
          </p>
          <p
            className={`text-sm ${
              combinedEndDateTime ? "visible" : "invisible"
            }`}
          >
            {combinedEndDateTime
              ? `End: ${format(combinedEndDateTime, "PPpp")}`
              : "Pick end date to set deadline"}
          </p>
          <Link
            to={"/task-scheduler-react"}
            className={`${
              combinedStartDateTime && combinedEndDateTime
                ? "visible"
                : "invisible"
            } mt-3`}
          >
            <Button>Set Deadline</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SetDeadline;
