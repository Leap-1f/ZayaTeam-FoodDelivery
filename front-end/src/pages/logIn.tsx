import { getUserLayout } from "@/components/layout/UserLayout";
import LogIn from "@/components/logIn/Login";
import { Box } from "@mui/material";
import { useState } from "react";
interface UserDataType {
  name: String;
  email: String;
  password: String;
  phone: Number;
}

export default function Profile() {
  const [allUses, setAllUser] = useState<UserDataType[]>([]);
  const usersData = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
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
Profile.getLayout = getUserLayout;
