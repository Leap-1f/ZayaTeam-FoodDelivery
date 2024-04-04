import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function LogIn() {
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
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Typography variant="h6">Нууц үг </Typography>
            <TextField
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
          <Link href={"./signUp/signup"}>
            <Button
              variant="outlined"
              sx={{ color: "black", borderColor: "#18BA51", width: "100%" }}
            >
              Бүртгүүлэх
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
