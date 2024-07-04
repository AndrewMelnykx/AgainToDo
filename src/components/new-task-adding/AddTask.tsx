import { useState } from "react";

import {
  Box,
  Input,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useDataTasksContext, useDispatcherContext } from "../reducer/reducer";
import { ADDED_NEW_TASK } from "../utillits/constants";
import { createdId } from "../utillits/utillits";

import { DoneTasksList } from "../tasks-lists/DoneList";
import { ToDoTasksList } from "../tasks-lists/ToDoList";

import { task_status } from "../utillits/constants";

const MainTasksPage = () => {
  const [newTask, setNewTask] = useState("");

  const state = useDataTasksContext();
  const dispatch = useDispatcherContext();

  const ToDoLength = state.length;
  const doneTasks = state.filter((task) => task.status !== task_status.ToDo);
  const DoneLength = doneTasks.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      dispatch({
        type: ADDED_NEW_TASK,
        payload: newTask,
        id: createdId(),
      });
      setNewTask("");
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <form onSubmit={handleSubmit}>
        <FormControl variant="standard">
          <InputLabel htmlFor="ToDo-input" sx={{ marginLeft: "40px" }}>
            New task name
          </InputLabel>
          <Input
            onChange={handleChange}
            id="ToDo-input"
            value={newTask}
            sx={{
              width: "400px",
              marginBottom: "20px",
              fontSize: "30px",
              marginLeft: "40px",
            }}
            endAdornment={
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                {newTask && (
                  <Button type="submit">
                    <AddIcon sx={{ color: "orange" }} />
                  </Button>
                )}
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      <Typography
        sx={{ fontSize: "20px", alignSelf: "center" }}
      >{`ToDo (${ToDoLength})`}</Typography>

      <ToDoTasksList />

      {DoneLength ? (
        <Typography
          sx={{ fontSize: "20px", alignSelf: "center" }}
        >{`Done (${DoneLength})`}</Typography>
      ) : null}

      <DoneTasksList />
    </Box>
  );
};
export { MainTasksPage };
