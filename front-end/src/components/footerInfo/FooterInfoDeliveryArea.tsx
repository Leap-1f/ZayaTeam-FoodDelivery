import { Box, Typography } from "@mui/material";
import DeliveryAreaMap from "../icons/deliveryAreaMapSvg";
import { StarIcon } from "../icons/iconSvg";

export default function FooterInfoDeliveryArea() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "60%%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <DeliveryAreaMap />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            gap: "15px",
          }}
        >
          <StarIcon />
          <Typography>Хүргэлтийн бүс дэх хаягууд</Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyItems: "space-between", width: "100$" }}
        >
          <Box sx={{ width: "500px", padding: "20px" }}>
            <Typography sx={{}}>А бүс</Typography>
            <Box
              sx={{
                width: "100%",
                borderBottom: "solid",
                borderWidth: "1px",
                borderColor: "#18BA51",
                marginY: "15px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "45%" }}>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
              </Box>
              <Box sx={{ width: "45%" }}>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "500px", padding: "20px" }}>
            <Typography sx={{}}>А бүс</Typography>
            <Box
              sx={{
                width: "100%",
                borderBottom: "solid",
                borderWidth: "1px",
                borderColor: "#18BA51",
                marginY: "15px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "45%" }}>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
              </Box>
              <Box sx={{ width: "45%" }}>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
                <Typography>Нархан хотхон</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
