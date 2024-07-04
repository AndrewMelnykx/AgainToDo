import React, { useReducer, createContext, useContext, Dispatch } from "react";

import { Task } from "../../data/types";
import {
  ADD_TASK_ACTION,
  DELETE_TASK_ACTION,
  EDIT_TASK_ACTION,
  TOGGLE_TASK_ACTION,
} from "./types";
import {
  ADDED_NEW_TASK,
  EDITED_THE_TASK,
  TOGGLED_THE_TASK,
  DELETED_THE_TASK,
} from "../utillits/constants";
import { createdId } from "../utillits/utillits";
import { initialToDoTasks } from "../../data/initial-tasks";

const ToDoDataContext = createContext(initialToDoTasks);
const DispatchDataContext = createContext<Dispatch<Action>>(null!);

interface ToDoProps {
  children: React.ReactNode;
}

const ToDoContextProvider = ({ children }: ToDoProps) => {
  const [tasks, dispatch] = useReducer(MainReducer, initialToDoTasks);
  return (
    <ToDoDataContext.Provider value={tasks}>
      <DispatchDataContext.Provider value={dispatch}>
        {children}
      </DispatchDataContext.Provider>
    </ToDoDataContext.Provider>
  );
};
const useDataTasksContext = () => {
  return useContext(ToDoDataContext);
};
const useDispatcherContext = () => {
  return useContext(DispatchDataContext);
};

type Action =
  | ADD_TASK_ACTION
  | DELETE_TASK_ACTION
  | EDIT_TASK_ACTION
  | TOGGLE_TASK_ACTION;

const MainReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case ADDED_NEW_TASK: {
      return [
        ...state,
        {
          id: createdId(),
          text: action.payload,
          status: false,
        },
      ];
    }
    case DELETED_THE_TASK: {
      return [...state.filter((task) => task.id !== action.payload)];
    }
    case TOGGLED_THE_TASK: {
      return state.map((task) =>
        task.id === action.id ? { ...task, status: !action.payload } : task
      );
    }
    case EDITED_THE_TASK: {
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.payload } : task
      );
    }

    default:
      return state;
  }
};

export {
  MainReducer,
  ToDoContextProvider,
  useDataTasksContext,
  useDispatcherContext,
};
