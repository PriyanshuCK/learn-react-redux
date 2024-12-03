import React, { FC, useState } from "react";
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

  return (
    <>
      <div>
        <h2>Select start time and date:</h2>
        <div>
          <DatePicker date={startDate} setDate={setStartDate} />
        </div>
        <div>
          <TimePicker time={startTime} setTime={setStartTime} />
        </div>
        <p className="text-sm">
          {combinedStartDateTime
            ? `Selected date and time: ${format(combinedStartDateTime, "PPpp")}`
            : "No date and time selected"}
        </p>
      </div>
      <div>
        <h2>Select end time and date:</h2>
        <div>
          <DatePicker date={endDate} setDate={setEndDate} />
        </div>
        <div>
          <TimePicker time={endTime} setTime={setEndTime} />
        </div>
        <p className="text-sm">
          {combinedEndDateTime
            ? `Selected date and time: ${format(combinedEndDateTime, "PPpp")}`
            : "No date and time selected"}
        </p>
      </div>
      <Link to={"/task-scheduler-react"}>
        <Button>Set Deadline</Button>
      </Link>
    </>
  );
};
export default SetDeadline;
