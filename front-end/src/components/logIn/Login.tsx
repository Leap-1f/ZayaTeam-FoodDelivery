import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useState } from "react";
const DEPLOYMENT_DB = process.env.NEXT_PUBLIC_SERVER_URL;
interface setterFunction {
  pageroute: () => void;
}

interface UserDataType {
  name: String;
  email: String;
  password: String;
  phone: Number;
}

export default function LogIn({ pageroute }: setterFunction) {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [password, setPassword] = useState<string>("");
  const loginData = async () => {
    try {
      const res = await fetch(`${DEPLOYMENT_DB}/users/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, password: password }),
      });
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "450px",
          height: "550px",
          padding: "32px",
          display: "flex",
          gap: "48px",
          borderRadius: "16px",
        }}
        flexDirection={"column"}
      >
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Нэвтрэх
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Typography variant="h6">Имэйл</Typography>
            <TextField
              sx={{ width: "100%", backgroundColor: "#F7F7F8" }}
              id="outlined-basic"
              label="Имэйл хаягаа оруулна уу  "
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setUserEmail(event.target.value);
                console.log(event.target.value);
              }}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Typography variant="h6">Нууц үг </Typography>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
              sx={{ width: "100%", backgroundColor: "#F7F7F8" }}
              id="outlined-basic"
              label="Нууц үг  "
            ></TextField>
          </Box>
          <Link href={"./forgetPass/forgetPassWord"}>
            <Typography sx={{ textAlign: "end" }}>Нууц үг сэргээх</Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <Button
            onClick={loginData}
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "#EEEFF2",
              width: "100%",
              boxShadow: "none",
              height: "45px",
            }}
          >
            Нэвтрэх
          </Button>
          <Typography sx={{ textAlign: "center" }}>Эсвэл </Typography>
          <Button
            onClick={() => {
              pageroute();
            }}
            variant="outlined"
            sx={{ color: "black", borderColor: "#18BA51", width: "100%" }}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </>
  );
}
