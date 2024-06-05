import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
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
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { bookmarks } from "../../libs/Data/Tasks";
import { getBgColor } from "../../utils/bgColor";

type Props = {
  dataTask: TaskType;
};
const Accordion = ({ dataTask }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(dataTask.description);
  const [anchorElBookmark, setAnchorElBookmark] =
    useState<HTMLButtonElement | null>(null);

  const [selectedBookmark, setSelectedBookmark] = useState<string[]>([]);

  const handleClickAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickBookmark = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElBookmark(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseBookmark = () => {
    setAnchorElBookmark(null);
  };

  const open = Boolean(anchorEl);
  const openBookmark = Boolean(anchorElBookmark);
  const id = open ? "simple-popover" : undefined;
  const idBookmark = openBookmark ? "simple-popover-bookmark" : undefined;

  const handleDelete = () => {
    setIsDelete(!isDelete);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (!isEdit && description === "") {
      setDescription(dataTask.description);
    }
  };

  useEffect(() => {
    if (!isEdit && description !== "") {
      setDescription(description);
    }
  }, [isEdit, description]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          bgcolor: "white",
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
          <Typography
            sx={{
              fontWeight: 700,
              color: `${
                dataTask?.status === "Expired"
                  ? "#828282"
                  : isDelete
                  ? "#828282"
                  : "#4F4F4F"
              }`,
              fontSize: 14,
              width: "335px",
              textDecoration: `${
                dataTask?.status === "Expired"
                  ? "line-through"
                  : isDelete
                  ? "line-through"
                  : "none"
              }`,
            }}
          >
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
              <EditIcon
                sx={{ color: "#2F80ED" }}
                fontSize="small"
                onClick={handleEdit}
              />
            </IconButton>
            {isEdit ? (
              <TextField
                sx={{ width: "100%" }}
                inputProps={{ style: { fontSize: 12 } }}
                multiline
                defaultValue={dataTask.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            ) : (
              <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
                {description}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#F9F9F9",
            }}
          >
            <IconButton size="small" onClick={handleClickBookmark}>
              <BookmarksOutlinedIcon
                fontSize="small"
                sx={{ color: "#2F80ED" }}
              />
            </IconButton>
            <List sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
              {selectedBookmark.map((bookmark, index) => (
                <ListItem
                  button
                  key={index}
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#4F4F4F",
                    bgcolor: getBgColor(bookmark),
                    p: 1,
                    width: "180px",
                    borderRadius: 1,
                  }}
                >
                  {bookmark}
                </ListItem>
              ))}
            </List>
            <Popover
              id={idBookmark}
              open={openBookmark}
              anchorEl={anchorElBookmark}
              onClose={handleCloseBookmark}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ "& .MuiPaper-root": { boxShadow: 0 } }}
            >
              {bookmarks.map((bookmark) => {
                return (
                  <List sx={{ p: 1 }} key={bookmark.id}>
                    <ListItem
                    button
                      sx={{
                        cursor: "pointer",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#4F4F4F",
                        bgcolor: getBgColor(bookmark.value),
                        width: "180px",
                        p: 1,
                        borderRadius: 1,
                      }}
                      onClick={() => {
                        setSelectedBookmark((prevBookmarks) => {
                          if (prevBookmarks.includes(bookmark.value)) {
                            return prevBookmarks.filter(
                              (value) => value !== bookmark.value
                            );
                          } else {
                            return [...prevBookmarks, bookmark.value];
                          }
                        });
                      }}
                    >
                      {bookmark.title}
                    </ListItem>
                  </List>
                );
              })}
            </Popover>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Accordion;
