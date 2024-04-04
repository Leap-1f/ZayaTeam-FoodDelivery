import * as React from "react";
import { Box, Stack, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

export default function CreateNewPassword() {
  const [showPinCode, setShowPinCode] = useState<boolean>(false);
  const [showRePinCode, setShowRePinCode] = useState<boolean>(false);

  const [changePinMode, setChangePinMode] = useState<boolean>(false);
  const [changeRePinMode, setChangeRePinMode] = useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<number | string>();
  const [newRePassword, setNewRePassword] = useState<number | string>();

  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const [changeButtonStyle, setChangeButtonStyle] = useState<boolean>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = () => {
    if (newRePassword === newPassword) {
      setOpen(true);
      setMessage("Нууц үг амжилттай солигдлоо");
      setChangeButtonStyle(!changeButtonStyle);
    } else {
      console.log("not matched");
    }
  };
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
          <Stack sx={{ position: "relative" }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Нууц үг
            </InputLabel>
            <TextField
              sx={{ backgroundColor: "#ECEDF0" }}
              id="outlined-basic"
              variant="outlined"
              placeholder="******"
              type={showPinCode ? "text" : "password"}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />

            {changePinMode ? (
              <VisibilityOffIcon
                sx={{ position: "absolute", right: "10px", top: "23%" }}
                onClick={() => {
                  setShowPinCode(!showPinCode);
                  setChangePinMode(!changePinMode);
                }}
              />
            ) : (
              <VisibilityIcon
                sx={{ position: "absolute", right: "10px", top: "23%" }}
                onClick={() => {
                  setShowPinCode(!showPinCode);
                  setChangePinMode(!changePinMode);
                }}
              />
            )}
            <Stack sx={{ position: "relative" }}>
              <InputLabel
                style={{ marginTop: "10px" }}
                shrink
                htmlFor="bootstrap-input"
              >
                Нууц үг давтах
              </InputLabel>
              <TextField
                sx={{ backgroundColor: "#ECEDF0" }}
                id="outlined-basic"
                variant="outlined"
                placeholder="******"
                type={showRePinCode ? "text" : "password"}
                onChange={(e) => {
                  setNewRePassword(e.target.value);
                }}
              />
              {changeRePinMode ? (
                <VisibilityOffIcon
                  sx={{ position: "absolute", right: "10px", top: "55%" }}
                  onClick={() => {
                    setShowRePinCode(!showRePinCode);
                    setChangeRePinMode(!changeRePinMode);
                  }}
                />
              ) : (
                <VisibilityIcon
                  sx={{ position: "absolute", right: "10px", top: "55%" }}
                  onClick={() => {
                    setShowRePinCode(!showRePinCode);
                    setChangeRePinMode(!changeRePinMode);
                  }}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
        <Button
          onClick={handleButtonClick}
          style={{
            width: "100%",
            color: changeButtonStyle ? "#FFFFFF " : "#1C20243D",
            backgroundColor: changeButtonStyle ? "#18BA51" : "#EEEFF2",
            border: "none",
          }}
          variant="outlined"
          disabled={changeButtonStyle}
        >
          Үргэлжлүүлэх
        </Button>
        <Snackbar
          sx={{ color: "#18BA51" }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
        />
      </Stack>
    </Box>
  );
}
