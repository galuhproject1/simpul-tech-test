import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import Accordion from "../Task/Accordion";
import { tasks } from "../../libs/Data/Tasks";
import Loading from "../Loading";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  bottom: "18%",
  right: "4%",
  width: 734,
  height: 420,
  borderRadius: 1,
  boxShadow: 2,
  paddingY: 2,
  backgroundColor: "white",
};

const ModalTask = ({ open, handleClose }: Props) => {
  const [objective, setObjective] = useState("");
  const [taskByObjective, setTaskByObjective] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [newTaskId, setNewTaskId] = useState<number | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setObjective(event.target.value as string);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (objective === "") {
      setTaskByObjective(tasks);
    } else {
      setTaskByObjective(tasks.filter((task) => task.objective === objective));
    }
  }, [objective]);

  useEffect(() => {
    if (isAdd) {
      const newTask = {
        id: taskByObjective.length + 1,
        objective: objective || "Personal Errands",
        description: "No Description",
        title: "New Task Title",
        dueDate: "",
        date: "",
        status: "On going",
      };
      setTaskByObjective((prevTasks) => [...prevTasks, newTask]);
      setNewTaskId(newTask.id);
      setIsAdd(false); // Reset isAdd to false after adding the task
    }
  }, [isAdd, objective, taskByObjective]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
      }}
    >
      <Box sx={style}>
        {/* button top */}
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Box>
            <FormControl sx={{ left: "60%" }}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ marginTop: -1.5, color: "black" }}
              >
                My tasks
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={objective}
                label="My tasks"
                placeholder="My tasks"
                onChange={handleChange}
                sx={{
                  width: 120,
                  height: 30,
                  "& .MuiMenu-paper-root": { outline: "1px solid black" },
                }}
              >
                <MenuItem value={"Personal Errands"}>Personal Errands</MenuItem>
                <Divider />
                <MenuItem value={"Urgent To-do"}>Urgent To-do</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ height: 30, textTransform: "none" }}
            onClick={() => {
              setIsAdd(true);
            }}
          >
            New Task
          </Button>
        </Box>

        {/* list */}
        <Box sx={{ height: 300, overflow: "auto" }}>
          {isLoading && <Loading loadingFor="Tasks List" />}
          {taskByObjective.map((task) => (
            <List sx={{ width: "100%", cursor: "pointer", "&:hover": { bgcolor: "white"} }} key={task.id}>
              <ListItem button sx={{ "&:hover": { bgcolor: "white"}}}>
                <Accordion dataTask={task} isAdd={newTaskId === task.id} />
              </ListItem>
              <Divider variant="middle" />
            </List>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalTask;
