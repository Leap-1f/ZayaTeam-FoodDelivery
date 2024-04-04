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
import {
  Box,
  FormControl,
  Switch,
  TextField,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const label = { inputProps: { "aria-label": "Switch demo" } };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CreateFoodModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [age, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Box
      sx={{
        width: "587px",
        flexDirection: "column",
        gap: "16px",
        height: "fitscreen",
      }}
    >
      <Button
        sx={{ color: "white", backgroundColor: "#18BA51" }}
        onClick={handleClickOpen}
      >
        Add new food
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
            Create food
          </DialogTitle>
        </>
        <DialogContent sx={{ flexDirection: "column", gap: "16px" }} dividers>
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>Хоолны нэр</Typography>
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
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>Хоолны ангилал</Typography>
            <Select
              sx={{
                backgroundColor: "#F4F4F4",
                paddingX: "12px",
                borderRadius: "8px",
                border: "none",
                "& fieldset": { border: "none" },
              }}
              placeholder="placeholder"
              onChange={handleChange}
            >
              <MenuItem>Breackfast</MenuItem>
              <MenuItem>Soup</MenuItem>
              <MenuItem>Main Course</MenuItem>
              <MenuItem>Dessert</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>Хоолны орц</Typography>
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
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>Хоолны үнэ</Typography>
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
              value={Number}
            />
          </FormControl>
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>
              {" "}
              <Switch {...label} />
              Хямдралтай эсэх
            </Typography>
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
              value={Number}
            />
          </FormControl>
          <FormControl fullWidth sx={{ gap: "8px" }}>
            <Typography>Хоолны зураг</Typography>
            <Box
              sx={{
                width: "284px",
                height: "122px",
                border: "dashed #D6D7DC",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <>
                <Typography>Add image for the food</Typography>
                <Button
                  sx={{ backgroundColor: "#393939", borderRadius: "8px" }}
                  variant="contained"
                >
                  Add image
                </Button>
              </>
            </Box>
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
