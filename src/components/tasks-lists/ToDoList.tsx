import { useDataTasksContext, useDispatcherContext } from "../reducer/reducer";
import {
  DELETED_THE_TASK,
  EDITED_THE_TASK,
  TOGGLED_THE_TASK,
} from "../utillits/constants";

import { Box } from "@mui/material";

import { ToDoTask } from "../tasks-checkboxes/ToDoTask";
import { task_status } from "../utillits/constants";

const ToDoTasksList = () => {
  const state = useDataTasksContext();
  const dispatch = useDispatcherContext();

  const toDoTasks = state.filter((task) => task.status === task_status.ToDo);

  const handleDelete = (id: number) => {
    dispatch({
      type: DELETED_THE_TASK,
      payload: id,
    });
  };
  const handleToggling = (status: boolean, id: number) => {
    dispatch({
      type: TOGGLED_THE_TASK,
      payload: status,
      id: id,
    });
  };
  const handleNameChange = (newName: string, id: number) => {
    dispatch({
      type: EDITED_THE_TASK,
      payload: newName,
      id: id,
    });
  };

  return (
    <>
      {toDoTasks.map((task) => (
        <Box key={task.id} display="flex" alignItems="center" marginLeft={5}>
          <ToDoTask
            task={task}
            handleToggling={() => handleToggling(task.status, task.id)}
            handleDelete={() => handleDelete(task.id)}
            handleNameChange={(e) => handleNameChange(e.target.value, task.id)}
          />
        </Box>
      ))}
    </>
  );
};
export { ToDoTasksList };
