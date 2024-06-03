import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ForumIcon from "@mui/icons-material/Forum";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import { useState } from "react";
import PopoverInbox from "./Modal/ModalInbox";
import ModalTask from "./Modal/ModalTask";

const SpeeddialButton = () => {
    const [openModalInbox, setOpenModalInbox] = useState(false);
    const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModalInbox(true);
  };

  const handleClose = () => {
    setOpenModalInbox(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const actions = [
    { icon: <ForumIcon />, name: "Inbox", color: "#8885FF", onClick: handleOpen },
    { icon: <ChromeReaderModeIcon />, name: "Task", color: "#F8B76B", onClick: handleOpenModal },
  ];

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 10, right: 10 }}
        icon={<ElectricBoltIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{ bgcolor: "white", color: action.color }}
            onClick={() => action.onClick()}
          />
        ))}
      </SpeedDial>
      <PopoverInbox open={openModalInbox} handleClose={handleClose} />
      <ModalTask open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
};

export default SpeeddialButton;