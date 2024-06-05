import { Box, CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";

type Props = {
    isLoading : boolean
}

const AlertWaiting = ({isLoading}: Props) => {
  return (
    <Box sx={{ width: "100%", px: 2, position: "absolute", bottom: "14%" }}>
      <Alert
        severity="info"
        icon={false}
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: 14,
          color: "#4F4F4F",
          visibility: `${isLoading ? "visible" : "hidden"}`,
        }}
      >
        <CircularProgress size={20} sx={{ mr: 2 }} />
        Please wait while we connect you with one of our team ...
      </Alert>
    </Box>
  );
};

export default AlertWaiting;
