import { Box } from "@mui/material";
import { MainTasksPage } from "../new-task-adding/AddTask";
import { ToDoContextProvider } from "../reducer/reducer";

const MainPage = () => {
  return (
    <Box
      mt={10}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ToDoContextProvider>
        <MainTasksPage />
      </ToDoContextProvider>
    </Box>
  );
};
export { MainPage };
