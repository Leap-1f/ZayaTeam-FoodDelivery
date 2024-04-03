import { Box, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function ResetNewPasswordPageTwo() {
  const router = useRouter();
  const rePassSendedCode: number = 1234;
  const [resetPincode, setResetPincode] = useState<any>();
  const [showPinCode, setShowPinCode] = useState<boolean>(false);
  const [changePinMode, setChangePinMode] = useState<boolean>(false);
  const email: string = "hafel@gmail.com";
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          width: "384px",
          padding: "32px",
        }}
        direction="column"
        spacing={6}
      >
        <h1 style={{ font: "San Francisco" }}>Нууц үг сэргээх</h1>
        <Stack sx={{ width: "100%" }} direction="column">
          <p style={{ display: "flex", gap: "4px" }}>
            Таны
            {<span style={{ color: "#18BA51" }}>{email}</span>}
            хаяг руу сэргээх код илгээх болно.
          </p>
          <InputLabel shrink htmlFor="bootstrap-input">
            Нууц үг сэргээх код
          </InputLabel>
          <Stack sx={{ position: "relative" }}>
            <TextField
              sx={{ backgroundColor: "#ECEDF0" }}
              id="outlined-basic"
              variant="outlined"
              placeholder="******"
              type={showPinCode ? "text" : "password"}
              onChange={(e) => {
                setResetPincode(e.target.value);
              }}
            />
            {changePinMode ? (
              <VisibilityOffIcon
                sx={{ position: "absolute", right: "10px", top: "30%" }}
                onClick={() => {
                  setShowPinCode(!showPinCode);
                  setChangePinMode(!changePinMode);
                }}
              />
            ) : (
              <VisibilityIcon
                sx={{ position: "absolute", right: "10px", top: "30%" }}
                onClick={() => {
                  setShowPinCode(!showPinCode);
                  setChangePinMode(!changePinMode);
                }}
              />
            )}
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            if (rePassSendedCode == resetPincode) {
              router.push("./CreateNewPassword");
            }
          }}
          style={{
            width: "100%",
            height: "48px",
            backgroundColor: "#18BA51",
            color: "#fff",
            border: "nones",
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Box>
  );
}
