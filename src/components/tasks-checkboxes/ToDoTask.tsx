import { useState } from "react";

import { Box, Checkbox, Button, Input, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import { TasksProps } from "./types";

interface ExtendedTaskProps extends TasksProps {
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToDoTask = ({
  task,
  handleToggling,
  handleDelete,
  handleNameChange,
}: ExtendedTaskProps) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <>
      {isEditable ? (
        <>
          <Input onChange={handleNameChange} />
          <Button onClick={() => setIsEditable(false)}>
            <DoneIcon />
          </Button>
        </>
      ) : (
        <Box key={task.id} display="flex" alignItems="center" margin={1}>
          <Checkbox
            checked={task.status}
            name={task.text}
            onChange={(e) => handleToggling(e)}
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <Typography sx={{ marginRight: "60px", fontSize: "20px" }}>
            {task.text}
          </Typography>
          <Button onClick={() => setIsEditable(true)}>
            <EditIcon sx={{ color: "orange", margin: "0" }} />
          </Button>
          <Button onClick={() => handleDelete()}>
            <CloseIcon />
          </Button>
        </Box>
      )}
    </>
  );
};

export { ToDoTask };
