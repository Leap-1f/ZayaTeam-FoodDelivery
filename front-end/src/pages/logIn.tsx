import ResponsiveAppBar from "@/components/Header";
import LogInModal from "@/components/login/LoginModal";
import { Box } from "@mui/material";
export default function LogIn():JSX.Element{
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" , height:"70vh", paddingTop:"100px" }}>
        <LogInModal></LogInModal>
      </Box>
    </>
  );
}
