import {
  Avatar,
  Box,
  Divider,
  InputAdornment,
  List,
  ListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute",
  bottom: "18%",
  right: "4%",
  width: 400,
  height: 420,
  borderRadius: 1,
  boxShadow: 2,
  paddingY: 2,
};

const ModalInbox = ({ open, handleClose }: Props) => {
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
        <TextField
        placeholder="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
            paddingX: 2,
          }}
          size="small"
        />
        <List sx={{ width: "100%", cursor: "pointer" }}>
          <ListItem sx={{ display: "flex", gap: 2, alignItems: "start" }}>
            <Box>
              <Avatar sx={{ bgcolor: "#2F80ED" }}>H</Avatar>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#2F80ED" }}>101992-Naturalization</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 12 }}>Ellen:</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: 12 }}>Iam the best</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 400, fontSize: 12 }}>10/10/2022 10:00</Typography>
            </Box>
          </ListItem>
        </List>
        <Divider variant="middle" />
      </Box>
    </Modal>
  );
};

export default ModalInbox;
