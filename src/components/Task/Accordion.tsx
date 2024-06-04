import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { TaskType } from "../../libs/Types/task.type";

type Props = {
  dataTask: TaskType;
};
const Accordion = ({ dataTask }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleClickAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDelete = () => {
    setIsDelete(!isDelete);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Checkbox sx={{ ml: -1, mt: -1 }} />
        <Box
          sx={{
            display: "flex",
            width: "560px",
            height: "28px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: `${dataTask?.status === "Expired" ? "#828282" : isDelete ? "#828282" : "#4F4F4F"}`, fontSize: 14, width: "335px", textDecoration: `${dataTask?.status === "Expired" ? "line-through" : isDelete ? "line-through" : "none"}` }}>
            {dataTask.title}
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 14, color: "#EB5757" }}>
            {dataTask.dueDate}
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
            {dataTask.date}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", ml: 2 }}>
          <IconButton size="small">
            {isOpen ? (
              <ExpandLessIcon
                onClick={handleClickAccordion}
                fontSize="inherit"
              />
            ) : (
              <ExpandMoreIcon
                onClick={handleClickAccordion}
                fontSize="inherit"
              />
            )}
          </IconButton>
          <IconButton size="small" onClick={handleClick}>
            <MoreHorizIcon fontSize="inherit" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            anchorPosition={{ top: 200, left: -400 }}
          >
            <Button
              sx={{
                color: "#EB5757",
                textTransform: "none",
                fontSize: 12,
                bgcolor: "transparent",
              }}
              variant="outlined"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Popover>
        </Box>
      </Box>
      {isOpen && (
        <Box
          sx={{
            mt: 2,
            px: 4,
            width: "600px",
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton size="small">
              <AccessTimeIcon fontSize="small" sx={{ color: "#2F80ED" }} />
            </IconButton>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dataTask.date ? dayjs(dataTask.date) : null}
                sx={{ width: "30%" }}
                slotProps={{ textField: { size: "small" } }}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
            <IconButton size="small">
              <EditIcon fontSize="inherit" />
            </IconButton>
            <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
              {dataTask.description}
            </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Accordion;
