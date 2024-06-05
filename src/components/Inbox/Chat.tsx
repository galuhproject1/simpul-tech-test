import { Box, Button, Divider, IconButton, Popover, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { getBgColorChat } from "../../utils/bgColor";

type Props = {
  sender: string | undefined;
  message: string | undefined;
  date: string;
};
const Chat = ({ sender, message, date }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
            <Box sx={{ display: "flex", flexDirection: "column", borderRadius: 1, border: "#BDBDBD 1px solid" }}>

            <Button sx={{ color: "#2F80ED", textTransform: "none" }}>Edit</Button>
            <Divider />
            <Button sx={{ color: "#EB5757", textTransform: "none" }}>Delete</Button>
            </Box>
          </Popover>
        </Box>
        <Box
          sx={{
            width: "70%",
            bgcolor: sender ? getBgColorChat(sender) : "#FFFFFF",
            borderRadius: 1,
            p: 1,
            color: "#4F4F4F",
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
            {message}
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: 12 }}>{date}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
