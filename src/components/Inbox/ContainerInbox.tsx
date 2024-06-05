import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { InboxType } from "../../libs/Types/inbox.type";
import NewMessage from "../Notification/NewMessage";
import AlertWaiting from "../Notification/AlertWaiting";
import Chat from "./Chat";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
  dataDetail: InboxType | null;
};

const style = {
  position: "absolute",
  bottom: "18%",
  right: "4%",
  width: 734,
  height: 420,
  borderRadius: 1,
  boxShadow: 2,
  backgroundColor: "white",
};

const ContainerInbox = ({ open, handleClose, dataDetail }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(dataDetail?.detailInbox);
  const [showNotification, setShowNotification] = useState("hidden");
  
  useEffect(() => {
    if (open && dataDetail) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowNotification("visible");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [dataDetail, open]);

  const handleScroll = () => {
    setShowNotification("hidden");
  }

  const handleSendMessage = () => {
    if (message) {
      const newMessage = {
        id: Date.now(),
        sender: "You",
        message,
        date: new Date().toLocaleTimeString(),
      };
      console.log(newMessage?.date);

      // Update chat messages state
      setChatMessages((prevMessages) => {
        if (prevMessages) {
          const updatedMessages = [...prevMessages];
          // Assuming the new message should go to the latest date group
          if (updatedMessages.length > 0) {
            updatedMessages[updatedMessages.length - 1].detailInbox.push(newMessage);
          } else {
            // Create a new date group if no messages exist
            updatedMessages.push({
              date: new Date().toLocaleDateString(),
              detailInbox: [newMessage],
            });
          }
          return updatedMessages;
        } else {
          return []; // Return an empty array if prevMessages is undefined
        }
      });

      setMessage("");
    }
  };

  useEffect(() => {
    if (open && dataDetail) {
      setChatMessages(dataDetail.detailInbox);
    }
  }, [dataDetail, open]);
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
      }}
    >
      <Box sx={style}>
        {/* header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "white",
            alignItems: "center",
            width: "100%",
            height: 60,
            borderBottom: 1,
            borderColor: "#BDBDBD",
            px: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <IconButton onClick={handleClose}>
              <ArrowBackIcon />
            </IconButton>
            <Box>
              <Typography
                sx={{ fontWeight: 700, fontSize: 14, color: "#2F80ED", mt: dataDetail?.isGroup ? 0 : 2.5 }}
              >
                {dataDetail?.groupName ?? dataDetail?.lastSender}
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 12, visibility: dataDetail?.isGroup ? "visible" : "hidden" }}>
                3 participants
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* chat */}
        <Box sx={{ p: 2, overflow: "auto", height: 300 }} onScroll={handleScroll}>
          {chatMessages && chatMessages.map((day, index) => (
            <Box key={index}>
              {day?.detailInbox.map((item, index) => (
                <Chat
                  key={index}
                  sender={item.sender}
                  message={item.message}
                  date={item.date}
                />
              ))}
              <Divider
                sx={{ my: 2, color: "#4F4F4F", fontWeight: 500, fontSize: 14 }}
              >
                {day.date}
              </Divider>
            </Box>
          ))}
        </Box>

        {/* alert new message*/}
        <NewMessage display={showNotification} />

        {/* alert waiting */}
        <AlertWaiting isLoading={isLoading} />

        {/* text field */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            position: "absolute",
            bottom: 10,
            width: "100%",
            gap: 2,
          }}
        >
          <TextField
            placeholder="Type a new message"
            sx={{
              width: "100%",
            }}
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" sx={{ textTransform: "none", px: 2.5 }} onClick={handleSendMessage}>
            <Typography>Send</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContainerInbox;
