import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, FormControl, TextField } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CreateNewCategory() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "700px",
        flexDirection: "column",
        gap: "16px",
        height: "fitscreen",
      }}
    >
      <Button
        sx={{ color: "white", backgroundColor: "#18BA51" }}
        onClick={handleClickOpen}
      >
        Create new category
      </Button>
      <BootstrapDialog onClose={handleClose} open={open}>
        <>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              left: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle sx={{ m: 0, p: 2, textAlign: "center" }}>
            Create new category
          </DialogTitle>
        </>
        <DialogContent sx={{ flexDirection: "column", gap: "16px" }} dividers>
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>Category name</Typography>
            <TextField
              sx={{
                backgroundColor: "#F4F4F4",
                height: "56px",
                paddingX: "12px",
                borderRadius: "8px",

                border: "none",
                "& fieldset": { border: "none" },
              }}
              placeholder="placeholder"
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ gap: "24px" }}>
          <Button autoFocus>Clear</Button>
          <Button autoFocus onClick={handleClose}>
            Continue
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}
