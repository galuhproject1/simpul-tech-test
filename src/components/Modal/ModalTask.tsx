import { Box, Modal, Typography } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
    position: 'absolute',
    bottom: '18%',
    right: '4%',
    width: 400,
    borderRadius: 1,
    boxShadow: 2,
    p: 4,
};

const ModalTask = ({ open, handleClose }: Props) => {
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal task
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalTask;
