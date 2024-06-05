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
  // const [inboxByDate, setInboxByDate] = useState([]);
  // const inbox = dataDetail?.detailInbox.map((item) => {
  //   setInboxByDate([...inboxByDate, item.date]);
  // });

  console.log();
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
                sx={{ fontWeight: 700, fontSize: 14, color: "#2F80ED" }}
              >
                I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
                3 participants
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* chat */}
        <Box sx={{ p: 2, overflow: "auto", height: 300 }}>
          {dataDetail?.detailInbox.map((day, index) => (
            <Box key={index}>
              {day?.detailInbox.map((item, index) => (
                <Chat
                  key={index}
                  sender={item.sender}
                  message={item.message}
                />
              ))}
              <Divider
                sx={{ my: 2, color: "#4F4F4F", fontWeight: 500, fontSize: 14 }}
              >
                {day.date}
              </Divider>
            </Box>
          ))}
          {/* <Chat sender={sender} /> */}
        </Box>

        {/* alert new message*/}
        <NewMessage display="hidden" />

        {/* alert waiting */}
        <AlertWaiting isLoading={false} />

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
          />
          <Button variant="contained" sx={{ textTransform: "none", px: 2.5 }}>
            <Typography>Send</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContainerInbox;
