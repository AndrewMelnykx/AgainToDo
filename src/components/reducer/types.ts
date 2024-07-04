import {
  ADDED_NEW_TASK,
  EDITED_THE_TASK,
  TOGGLED_THE_TASK,
  DELETED_THE_TASK,
} from "../utillits/constants";

interface ADD_TASK_ACTION {
  type: typeof ADDED_NEW_TASK;
  payload: string;
  id: number;
}
interface DELETE_TASK_ACTION {
  type: typeof DELETED_THE_TASK;
  payload: number;
}
interface EDIT_TASK_ACTION {
  type: typeof EDITED_THE_TASK;
  payload: string;
  id: number;
}
interface TOGGLE_TASK_ACTION {
  type: typeof TOGGLED_THE_TASK;
  payload: boolean;
  id: number;
}

export type {
  ADD_TASK_ACTION,
  DELETE_TASK_ACTION,
  EDIT_TASK_ACTION,
  TOGGLE_TASK_ACTION,
};
