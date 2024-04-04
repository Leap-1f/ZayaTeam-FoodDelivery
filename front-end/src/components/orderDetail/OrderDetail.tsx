import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { Card, Typography } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function OrderDetail() {
  return (
    <Card
      sx={{
        display: "flex",
        width: 981,
        height: 564,
        padding: "32px",
        gap: "33px",
        alignItems: "center",
      }}
    >
      <>
        <CardMedia
          sx={{ width: 500, height: "100%" }}
          component="img"
          image="https://www.realsimple.com/thmb/fMh6cWLYxsddO3BuSJXanCk1gpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg"
          alt="lunch"
        />
        <CardContent
          sx={{
            width: 384,
            height: 398,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: 0,
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Typography variant="h5">Өдрийн хоол</Typography>
            <Typography sx={{ color: "#18BA51" }}>23'000₮</Typography>
          </CardContent>
          <CardContent sx={{ padding: 0 }}>
            <Typography gutterBottom variant="h6" component="div">
              Орц
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                padding: "8px",
                backgroundColor: "#F6F6F6",
                color: "#767676",
              }}
            >
              Үхрийн мах, амталж шарсан алим,
            </Typography>
          </CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Too
          </Typography>
          <Pagination
            sx={{ display: "flex", justifyContent: "center" }}
            count={100}
            siblingCount={0}
          />
          <Button sx={{ backgroundColor: "#18BA51" }} variant="contained">
            Сагслах
          </Button>
        </CardContent>
      </>
    </Card>
  );
}
