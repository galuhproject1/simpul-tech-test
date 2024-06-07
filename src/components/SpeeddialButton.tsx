import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ForumIcon from "@mui/icons-material/Forum";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import { useState } from "react";
import ModalInbox from "./Modal/ModalInbox";
import ModalTask from "./Modal/ModalTask";
import ContainerInbox from "./Inbox/ContainerInbox";
import { InboxType } from "../libs/Types/inbox.type";
import { dataInbox } from "../libs/Data/Inbox";

const SpeeddialButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveTask, setIsActiveTask] = useState<boolean>(false);
  const [openModalInbox, setOpenModalInbox] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataDetail, setDataDetail] = useState<InboxType | null>(null);

  const handleOpen = () => {
    setOpenModalInbox(true);
    setIsActive(true);
  };

  const handleClose = () => {
    setOpenModalInbox(false);
    setIsActive(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setIsActiveTask(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsActiveTask(false);
  };

  const [openInbox, setOpenInbox] = useState(false);

  const handleOpenInbox = (id: number) => {
    setOpenInbox(true);

    const dataDetail = dataInbox.find((item) => item.id === id);
    if (dataDetail) {
      setDataDetail(dataDetail);
    }
  };

  const handleCloseInbox = () => {
    setOpenInbox(false);
  };

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          display: "flex",
          gap: 2,
          alignItems: "end",
        }}
      >
        {open ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: isActive || isActiveTask ? "absolute" : "relative",
              right: isActive || isActiveTask ? -10 : 0,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 4,
                ml: 1,
                visibility: isActive || isActiveTask ? "hidden" : "visible",
              }}
            >
              <Typography
                sx={{ fontWeight: 500, fontSize: 14, color: "white" }}
              >
                Task
              </Typography>
              <Typography
                sx={{ fontWeight: 500, fontSize: 14, color: "white" }}
              >
                Inbox
              </Typography>{" "}
            </Box>
            <Box sx={{ display: "flex", gap: isActive || isActiveTask ? 4 : 2, flexDirection: isActiveTask ? "row-reverse" : "row" }}>
              <Box>
                <IconButton
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "white",
                    color: "#F8B76B",
                    ":hover": { bgcolor: "#F8B76B", color: "white" },
                  }}
                  onClick={handleOpenModal}
                >
                  <ChromeReaderModeIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "white",
                    color: "#8885FF",
                    ":hover": { bgcolor: "#8885FF", color: "white" },
                  }}
                  onClick={handleOpen}
                >
                  <ForumIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ) : null}
        <IconButton
          sx={{
            width: 50,
            height: 50,
            bgcolor: isActive || isActiveTask ? "#4F4F4F" : "#2F80ED",
            color: "white",
            ":hover": { bgcolor: "#2F80ED" },
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ElectricBoltIcon />
        </IconButton>
      </Box>
      <ModalInbox
        open={openModalInbox}
        handleClose={handleClose}
        handleOpenInbox={handleOpenInbox}
      />
      <ModalTask open={openModal} handleClose={handleCloseModal} />
      <ContainerInbox
        open={openInbox}
        handleClose={handleCloseInbox}
        dataDetail={dataDetail}
      />
    </Box>
  );
};

export default SpeeddialButton;
