import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

const tasks = [
  {
    taskTitle: "Task 1",
    priority: "Low",
    startTime: "2024-12-03T08:00:00Z",
    endTime: "2024-12-03T10:00:00Z",
  },
  {
    taskTitle: "Task 2",
    priority: "Medium",
    startTime: "2024-12-03T09:00:00Z",
    endTime: "2024-12-03T12:00:00Z",
  },
  {
    taskTitle: "Task 3",
    priority: "High",
    startTime: "2024-12-03T10:00:00Z",
    endTime: "2024-12-03T13:00:00Z",
  },
  {
    taskTitle: "Task 4",
    priority: "Low",
    startTime: "2024-12-03T11:00:00Z",
    endTime: "2024-12-03T14:00:00Z",
  },
  {
    taskTitle: "Task 5",
    priority: "Medium",
    startTime: "2024-12-03T12:00:00Z",
    endTime: "2024-12-03T15:00:00Z",
  },
  {
    taskTitle: "Task 6",
    priority: "High",
    startTime: "2024-12-03T13:00:00Z",
    endTime: "2024-12-03T16:00:00Z",
  },
  {
    taskTitle: "Task 7",
    priority: "Low",
    startTime: "2024-12-03T14:00:00Z",
    endTime: "2024-12-03T17:00:00Z",
  },
  {
    taskTitle: "Task 8",
    priority: "Medium",
    startTime: "2024-12-03T15:00:00Z",
    endTime: "2024-12-03T18:00:00Z",
  },
  {
    taskTitle: "Task 9",
    priority: "High",
    startTime: "2024-12-03T16:00:00Z",
    endTime: "2024-12-03T19:00:00Z",
  },
  {
    taskTitle: "Task 10",
    priority: "Low",
    startTime: "2024-12-03T17:00:00Z",
    endTime: "2024-12-03T20:00:00Z",
  },
];

export function TasksTable() {
  return (
    <Table>
      <TableCaption>A list of your incomplete tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>End Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.taskTitle}>
            <TableCell className="font-medium">{task.taskTitle}</TableCell>
            <TableCell>{task.priority}</TableCell>
            <TableCell>{task.startTime}</TableCell>
            <TableCell>{task.endTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total incomplete tasks</TableCell>
          <TableCell>10</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
