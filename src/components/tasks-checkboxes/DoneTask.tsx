import { Box, Checkbox, Button, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { TasksProps } from "./types";

const DoneTask = ({ task, handleToggling, handleDelete }: TasksProps) => {
  return (
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

      <Button onClick={() => handleDelete()}>
        <CloseIcon />
      </Button>
    </Box>
  );
};

export { DoneTask };
