import { useDataTasksContext, useDispatcherContext } from "../reducer/reducer";
import { DoneTask } from "../tasks-checkboxes/DoneTask";
import { DELETED_THE_TASK, TOGGLED_THE_TASK } from "../utillits/constants";

import { Box } from "@mui/material";
import { task_status } from "../utillits/constants";

const DoneTasksList = () => {
  const state = useDataTasksContext();
  const dispatch = useDispatcherContext();

  const doneTasks = state.filter((task) => task.status !== task_status.ToDo);
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

  return (
    <>
      {doneTasks.map((task) => (
        <Box key={task.id} display="flex" alignItems="center" marginLeft={5}>
          <DoneTask
            task={task}
            handleToggling={() => handleToggling(task.status, task.id)}
            handleDelete={() => handleDelete(task.id)}
          />
        </Box>
      ))}
    </>
  );
};
export { DoneTasksList };
