import LogIn from "@/components/logIn/Login";
import { Box } from "@mui/material";

export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LogIn />;
    </Box>
  );
}
