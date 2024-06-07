import {
  Box,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ListInbox from "../Inbox/ListInbox";
import { dataInbox } from "../../libs/Data/Inbox";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dataInbox);
  const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      const filtered = dataInbox.filter(
        (item) =>
          item.lastSender.toLowerCase().includes(value.toLowerCase()) ||
          (item.groupName &&
            item.groupName.toLowerCase().includes(value.toLowerCase()))
      );
      setFilteredData(filtered);
    }, 3000);

    setDebounceTimeout(newTimeout);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredData(dataInbox);
  };

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
              <InputAdornment position="end">
                {searchQuery ? (
                  <IconButton onClick={clearSearch}>
                    <CloseIcon />
                  </IconButton>
                ) : (
                  <SearchIcon />
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
            paddingX: 2,
          }}
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ListInbox
          handleOpenInbox={(id: number) => handleOpenInbox(id)}
          dataInbox={filteredData}
        />
      </Box>
    </Modal>
  );
};

export default ModalInbox;
