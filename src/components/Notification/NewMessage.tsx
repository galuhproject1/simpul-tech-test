import { Box, Typography } from "@mui/material"

type Props = {
    display: string
}
const NewMessage = ({ display }: Props) => {
    return (
        <Box
          sx={{
            p: 2,
            bgcolor: "#E9F3FF",
            color: "#2F80ED",
            width: "140px",
            height: "40px",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translate(-50%, 50%)",
            visibility: `${display}`,
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: 14, textAlign: "center" }}
          >
            New Messages
          </Typography>
        </Box>
    )
}

export default NewMessage