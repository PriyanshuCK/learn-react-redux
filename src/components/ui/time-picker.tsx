"use client";

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
  setTime: (time: { hours: number; minutes: number }) => void;
  className?: string;
}

export function TimePicker({ time, setTime, className }: TimePickerProps) {
  const minuteItems = [0, 15, 30, 45];

  const handleHourChange = (hour: string) => {
    setTime({ ...time, hours: parseInt(hour) });
  };

  const handleMinuteChange = (minute: string) => {
    setTime({ ...time, minutes: parseInt(minute) });
  };

  return (
    <div className={cn("flex items-end gap-2", className)}>
      <Select onValueChange={handleHourChange} value={time.hours.toString()}>
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder={time.hours.toString().padStart(2, "0")} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
            <SelectItem key={hour} value={hour.toString()}>
              {hour.toString().padStart(2, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={handleMinuteChange}
        value={time.minutes.toString()}
      >
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder={time.minutes.toString().padStart(2, "0")} />
        </SelectTrigger>
        <SelectContent>
          {minuteItems.map((minute) => (
            <SelectItem key={minute} value={minute.toString()}>
              {minute.toString().padStart(2, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon" className="h-10 w-10">
        <Clock className="h-4 w-4" />
      </Button>
    </div>
  );
}
