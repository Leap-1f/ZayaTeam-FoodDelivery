import { getUserLayout } from "@/components/layout/UserLayout";
import LogIn from "@/components/logIn/Login";
import { Box } from "@mui/material";
import { useState } from "react";
import { SignUp } from "@/components/signUp/SignUp";

const DEPLOYMENT_DB = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Profile() {
  const [pageRoute, setPageRoute] = useState<boolean>(true);
  const switchPage = (): void => {
    setPageRoute(!pageRoute);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pageRoute ? (
        <LogIn pageroute={switchPage} />
      ) : (
        <SignUp pageroute={pageRoute}></SignUp>
      )}
    </Box>
  );
}
Profile.getLayout = getUserLayout;
