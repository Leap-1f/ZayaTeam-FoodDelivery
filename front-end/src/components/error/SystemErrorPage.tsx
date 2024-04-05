import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ErrorPage, HeartBox } from "../icons/iconSvg";

export default function SystemErrorPage() {
  return (
    <>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "384px",
          height: "176px",
          gap: "30px",
        }}
      >
        <ErrorPage />
        <Typography
          sx={{
            height: "102px",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            color: "#808080",
          }}
        >
          Уучлаарай, систем ачааллахад алдаа гарлаа.
        </Typography>
      </Box>
    </>
  );
}

export function EmptyBox() {
  return (
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "384px",
        height: "176px",
        gap: "30px",
      }}
    >
      <HeartBox />
      <Typography
        sx={{
          height: "102px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          color: "#808080",
        }}
      >
        Уучлаарай жүлхнээс өөр илэрц олдсонгүй...
      </Typography>
    </Box>
  );
}
