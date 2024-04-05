import { useState } from "react";
import { Fragment } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function ExitModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        sx={{
          width: "384px",
          height: "228px",
          position: "absolute",
          top: "40%",
          left: "40%",
          borderRadius: "20px",
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogContent sx={{ textAlign: "center" }}>
          <DialogContentText sx={{ color: "black" }}>
            Та системээс гарахдаа итгэлтэй байна уу?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            width: "100%",
            height: "100%",
            padding: 0,
            backgroundColor: "#18BA51",
          }}
        >
          <Button
            sx={{
              width: "50%",
              color: "white",
              height: "61px",
              "&:hover": {
                color: "#8B8E95",
                background: "#9be0b3",
                margin: 0,
                padding: 0,
              },
            }}
            onClick={handleClose}
          >
            Тийм
          </Button>
          <Button
            sx={{
              width: "50%",
              color: "white",
              height: "61px",
              "&:hover": {
                color: "#8B8E95",
                background: "#9be0b3",
                margin: 0,
                padding: 0,
              },
            }}
            onClick={handleClose}
          >
            Үгүй
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
