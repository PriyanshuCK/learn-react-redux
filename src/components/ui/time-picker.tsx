import * as React from "react";
import { Clock } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface TimePickerProps {
  time: { hours: number; minutes: number };
  date: Date | undefined;
  setTime: (time: { hours: number; minutes: number }) => void;
  className?: string;
}

export function TimePicker({
  time,
  date,
  setTime,
  className,
}: TimePickerProps) {
  const minuteItems = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const handleHourChange = (hour: string) => {
    setTime({ ...time, hours: parseInt(hour) });
  };

  const handleMinuteChange = (minute: string) => {
    setTime({ ...time, minutes: parseInt(minute) });
  };

  const isToday = date && new Date().toDateString() === date.toDateString();
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const isHourDisabled = (hour: number) => {
    if (!isToday) return false;
    return hour < currentHour;
  };

  const isMinuteDisabled = (minute: number) => {
    if (!isToday) return false;
    if (time.hours > currentHour) return false;
    if (time.hours === currentHour) return minute <= currentMinute;
    return true;
  };

  return (
    <div className={cn("flex items-end gap-2", className)}>
      <Button variant="outline" size="icon" className="h-9 w-9">
        <Clock className="h-1 w-1" />
      </Button>
      <Select onValueChange={handleHourChange} value={time.hours.toString()}>
        <SelectTrigger className="w-[94px]">
          <SelectValue placeholder={time.hours.toString().padStart(2, "0")} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
            <SelectItem
              key={hour}
              value={hour.toString()}
              disabled={isHourDisabled(hour)}
            >
              {hour.toString().padStart(2, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={handleMinuteChange}
        value={time.minutes.toString()}
      >
        <SelectTrigger className="w-[94px]">
          <SelectValue placeholder={time.minutes.toString().padStart(2, "0")} />
        </SelectTrigger>
        <SelectContent>
          {minuteItems.map((minute) => (
            <SelectItem
              key={minute}
              value={minute.toString()}
              disabled={isMinuteDisabled(minute)}
            >
              {minute.toString().padStart(2, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
