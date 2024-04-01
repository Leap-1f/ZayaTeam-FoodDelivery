import { useState, KeyboardEvent, MouseEvent, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import HeaderBucketIcon from "./svg/headerbucketiconsvg";
import { ArrowFront } from "./svg/ZayaSvg";
import { Close } from "./svg/ZayaSvg";

type Anchor = "right";

export default function Order() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <>
      <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        sx={{
          padding: "24px",
          width: 586,
          height: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <CardHeader
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "171px",
              borderBottom: "1px solid #D6D8DB",
              paddingBottom: "50px",
            }}
            title="Таны сагс"
            action={
              <IconButton aria-label="settings">
                <ArrowFront />
              </IconButton>
            }
          />
          <Card
            sx={{
              display: "flex",
              width: 538,
              height: 182,
              padding: "16px",
              gap: "16px",
              alignItems: "center",
              boxShadow: "none",
              borderBottom: "1px solid #D6D8DB",
              paddingY: "30px",
            }}
          >
            <>
              <CardMedia
                sx={{ width: "100%", height: "100%" }}
                component="img"
                image="https://www.realsimple.com/thmb/fMh6cWLYxsddO3BuSJXanCk1gpI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-dinner-recipes-f768402675e04452b1531360736da8b5.jpg"
                alt="lunch"
              />
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: 0,
                }}
              >
                <CardContent
                  sx={{
                    padding: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    <Typography variant="h6">Өдрийн хоол</Typography>
                    <Typography sx={{ color: "#18BA51" }}>23'000₮</Typography>
                  </Typography>
                  <IconButton aria-label="settings">
                    <Close />
                  </IconButton>
                </CardContent>
                <CardContent sx={{ padding: 0 }}>
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
                <Pagination
                  sx={{ display: "flex", justifyContent: "center" }}
                  count={100}
                  siblingCount={0}
                />
              </CardContent>
            </>
          </Card>
        </CardContent>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 0 10px 0 #D6D8DB",
          padding: "10px 32px 30px 32px",
        }}
      >
        <Typography sx={{ paddingX: "10px" }}>
          <Typography>Нийт төлөх дүн</Typography>
          <Typography variant="h6">34'800₮</Typography>
        </Typography>
        <Button
          sx={{
            backgroundColor: "#18BA51",
            width: "256px",
            height: "48px",
            paddingX: "10px",
          }}
          variant="contained"
        >
          Захиалах
        </Button>
      </CardContent>
    </>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Box
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "#000000",
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              id: "order",
            }}
          >
            <HeaderBucketIcon />
            Сагс
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
