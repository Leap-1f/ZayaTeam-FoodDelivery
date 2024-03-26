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

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/unsplash_fdlZBWIP0aM"
        alt="Paella dish"
      />
      <CardContent>
        <CardHeader title="Өглөөний хоол" subheader="14'800₮" />
      </CardContent>
    </Card>
  );
}
