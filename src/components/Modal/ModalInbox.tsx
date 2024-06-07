import {
  Box,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ListInbox from "../Inbox/ListInbox";
import { dataInbox } from "../../libs/Data/Inbox";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleOpenInbox: (_id: number) => void;
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

const ModalInbox = ({ open, handleClose, handleOpenInbox }: Props) => {
  
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
        <ListInbox handleOpenInbox={(id: number) => handleOpenInbox(id)} dataInbox={dataInbox} />
      </Box>
    </Modal>
  );
};

export default ModalInbox;
