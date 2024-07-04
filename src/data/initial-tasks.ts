import { Task } from "./types";

const initialToDoTasks: Task[] = [
  { id: 0, text: "Do ToDo", status: false },
  { id: 1, text: "React Query", status: false },
  { id: 2, text: "Deploying react app", status: false },
];

const initialDoneTasks: Task[] = [
  { id: 0, text: "Read an article", status: true },
];

export { initialToDoTasks, initialDoneTasks };
