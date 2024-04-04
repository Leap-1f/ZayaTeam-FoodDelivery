// import { Box } from "@mui/material";

// export default function MenuCards() {
//   return <Box></Box>;
// }
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import handleOpen from "../components/OrderDetail";
import { Typography } from "@mui/material";

export default function RecipeReviewCard() {
  return (
    <Card onClick={handleOpen} sx={{ width: '345px', cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="186"
        image="https://www.foodandwine.com/thmb/OH220PwOZfcTiwuJzkvLANWHw1w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-bhurjee-FT-RECIPE0521-f9573d8c81bb4c9597a9621c0ac064ae.jpg"
        alt="breackfast"
      />
      <CardContent sx={{ padding: 0 }}>
        <Typography variant="h6">Өглөөний хоол</Typography>
        <Typography sx={{ color: "#18BA51" }}>14'800₮</Typography>
      </CardContent>
    </Card>
  );
}
