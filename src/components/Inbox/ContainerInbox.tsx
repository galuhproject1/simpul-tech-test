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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
  console.log(dataDetail);
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
        <Box sx={{ p: 2 }}>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 14, textAlign: "end", color: "#9B51E0" }}>You</Typography>
            <Box sx={{ display: "flex", justifyContent: "end", gap: 1, alignItems: "start" }}>
                <IconButton size="small">
                    <MoreHorizIcon fontSize="inherit" />
                </IconButton>
            <Box sx={{ width: "70%",bgcolor: "#EEDCFF", borderRadius: 1, p: 1, color: "#4F4F4F" }}>
              <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
                No worries. It will be completed ASAP. I’ve asked him yesterday.
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 12 }}>19:02</Typography>
            </Box>
            </Box>
          </Box>

          {/* divider */}
          <Divider>Today June 09, 2021</Divider>
        </Box>

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
          <Button variant="contained">
            <Typography>Send</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContainerInbox;
