import { Box, Modal } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
    position: 'absolute',
    bottom: '18%',
    right: '4%',
    width: 380,
    height: 400,
    borderRadius: 1,
    boxShadow: 2,
    p: 2,
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
        <p>search</p>
      </Box>
    </Modal>
  );
};

export default ModalInbox;
