import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { getBgColorChat } from "../../utils/bgColor";

type Props = {
  sender: string | undefined;
  message: string | undefined;
  date: string;
  replyTo?: { sender: string | undefined; message: string | undefined } | null;
  onReply: (sender: string | undefined, message: string | undefined) => void;
};
const Chat = ({ sender, message, date, replyTo, onReply }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorElChat, setAnchorElChat] = useState<HTMLDivElement | null>(null);

  const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickChat = (event: React.MouseEvent<HTMLDivElement>) => {
    if (anchorElChat !== null) {
      setAnchorElChat(null);
    } else {
      setAnchorElChat(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const openChat = Boolean(anchorElChat);
  const id = open ? "simple-popover" : undefined;
  const idChat = openChat ? "simple-popover-chat" : undefined;
  return (
    <Box sx={{ my: 2 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 14,
          textAlign: sender === "You" ? "end" : "start",
          color: sender == "You" ? "#9B51E0" : "#E5A443",
        }}
      >
        {sender}
      </Typography>

      {replyTo && (
        <Box sx={{ display: "flex", justifyContent: sender === "You" ? "end" : "start" }}>
          <Box
            sx={{
              width: "70%",
              bgcolor: "#F2F2F2",
              p: 1,
              mb: 1,
              borderRadius: 1,
            }}
          >
            <Typography sx={{ fontSize: 14, color: "#4F4F4F" }}>
              {replyTo.message}
            </Typography>
          </Box>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: sender === "You" ? "end" : "start",
          gap: 1,
          alignItems: "start",
          flexDirection: sender === "You" ? "row" : "row-reverse",
        }}
      >
        <Box>
          <IconButton size="small" onClick={handleClickMore}>
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
            sx={{ "& .MuiPaper-root": { boxShadow: 0 } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                border: "#BDBDBD 1px solid",
              }}
            >
              <Button sx={{ color: "#2F80ED", textTransform: "none" }}>
                Edit
              </Button>
              <Divider />
              <Button sx={{ color: "#EB5757", textTransform: "none" }}>
                Delete
              </Button>
            </Box>
          </Popover>
        </Box>
        <Box
          component="button"
          sx={{
            cursor: "pointer",
            width: "70%",
            height: "auto",
            bgcolor: sender ? getBgColorChat(sender) : "#FFFFFF",
            borderRadius: 1,
            p: 1,
            color: "#4F4F4F",
          }}
          onClick={handleClickChat}
        >
          <Popover
            id={idChat}
            open={openChat}
            anchorEl={anchorElChat}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            anchorPosition={{ top: 200, left: 400 }}
            sx={{ "& .MuiPaper-root": { boxShadow: 0 } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                border: "#BDBDBD 1px solid",
              }}
            >
              <Button sx={{ color: "#2F80ED", textTransform: "none" }}>
                Share
              </Button>
              <Divider />
              <Button
                sx={{ color: "#2F80ED", textTransform: "none" }}
                onClick={() => onReply(sender, message)}
              >
                Reply
              </Button>
            </Box>
          </Popover>
          <Typography sx={{ fontWeight: 400, fontSize: 14, textAlign: "left", width: "100%", overflowWrap: "break-word" }}>
            {message}
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 12, textAlign: "left" }}>{date}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;