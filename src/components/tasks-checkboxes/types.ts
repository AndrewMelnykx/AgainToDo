import { ChangeEvent } from "react";
import { Task } from "../../data/types";

interface TasksProps {
  task: Task;
  handleToggling: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDelete: () => void;
}

export type { TasksProps };
