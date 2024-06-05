import { Box, CircularProgress, Typography } from "@mui/material";

type Props = {
    loadingFor: string;
}
const Loading = ({ loadingFor }: Props ) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "360px" }}>
            <CircularProgress color="inherit" />
            <Typography sx={{ color: "#4F4F4F", fontWeight: 700, mt: 2, fontSize: 14 }}>Loading {loadingFor}...</Typography>
        </Box>
    )
}

export default Loading;