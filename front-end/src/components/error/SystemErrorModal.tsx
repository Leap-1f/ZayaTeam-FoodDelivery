import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

export default function SystemErrorModal() {
  return (
    <>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "384px",
          bgcolor: "background.paper",
          paddingX: "40px",
          paddingTop: "24px",
          paddingBottom: "38px",
          borderRadius: "20px",
          boxShadow: 24,
          textAlign: "center",
          gap: "9px",
        }}
      >
        <CancelRoundedIcon
          sx={{ width: "55px", height: "55px", color: "red" }}
        />
        <Typography
          id="modal-modal-description"
          sx={{
            height: "102px",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Уучлаарай, систем ачааллахад алдаа гарлаа.
        </Typography>
      </Box>
    </>
  );
}
