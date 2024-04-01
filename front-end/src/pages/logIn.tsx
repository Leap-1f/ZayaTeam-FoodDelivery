import ResponsiveAppBar from "@/components/header";
import LogInModal from "@/components/login/LoginModal";
import { Box } from "@mui/material";
export default function LogIn():JSX.Element{
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LogInModal></LogInModal>
      </Box>
    </>
  );
}
