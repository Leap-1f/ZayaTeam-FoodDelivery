import { Box, Container, Typography } from "@mui/material";
import HomePageSVG from "../icons/HomePageSVG";
import {
  BookIcon,
  ClockIcon,
  GreenRightArrow,
  SaladIcon,
  StarIcon,
} from "../icons/iconSvg";
import RecipeReviewCard from "./MenuCard";
import { title } from "process";

const boxTitle = [
  { title: "Хүргэлтийн төлөв хянах", icon: <BookIcon /> },
  { title: "Шуурхай хүргэлт", icon: <ClockIcon /> },
  { title: "Эрүүл, баталгаат орц", icon: <SaladIcon /> },
  { title: "Хоолны өргөн сонголт", icon: <BookIcon /> },
];

export const HomePage = () => {
  return (
    <>
      <Box sx={{ width: "100%", fontFamily: "sans-serif" }}>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "50vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#18BA51",
            backgroundImage: `url(https://i.ibb.co/HVcsPm2/background.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "100px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  width: "384px",
                  fontSize: "55px",
                  lineHeight: "50px",
                  borderBottom: "2px solid",
                  paddingBottom: "23px",
                }}
              >
                Pinecone
                <br /> Food Delivery
              </Typography>

              <Typography sx={{ color: "#ffffff", paddingTop: "23px" }}>
                Horem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
              </Typography>
            </Box>
            <HomePageSVG />
          </Box>
        </Box>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "25px",
                marginY: "100px",
              }}
            >
              {boxTitle.map((el) => (
                <Box
                  sx={{
                    width: "15%",
                    height: "auto",
                    boxShadow: "inherit",
                    border: "solid",
                    borderWidth: "1px",
                    borderColor: "#D6D8DB",
                    cursor: "pointer",
                    borderRadius: "16px",
                    padding: "10px",
                  }}
                >
                  {el.icon}
                  <Box
                    sx={{ width: "full", paddingY: "10px", fontSize: "18px" }}
                  >
                    {el.title}
                  </Box>
                  <Typography
                    sx={{
                      color: "#272727",
                      opacity: "75%",
                      width: "100%",
                      fontSize: "14px",
                    }}
                  >
                    Захиалга бэлтгэлийн явцыг хянах
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    fontFamily: "sans-serif",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon />
                    <Typography sx={{ fontSize: "22px", marginLeft: "10px" }}>
                      Хямдралтай
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#18BA51",
                      gap: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Бүгдийг харах
                    <GreenRightArrow />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", marginTop: "30px", gap: "50px" }}>
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                </Box>
              </Box>
              <Box sx={{ marginTop: "100px", width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    fontFamily: "sans-serif",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon />
                    <Typography sx={{ fontSize: "22px", marginLeft: "10px" }}>
                      Үндсэн хоол
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#18BA51",
                      gap: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Бүгдийг харах
                    <GreenRightArrow />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", marginTop: "30px", gap: "50px" }}>
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                </Box>
              </Box>
              <Box sx={{ marginTop: "100px", width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    fontFamily: "sans-serif",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon />
                    <Typography sx={{ fontSize: "22px", marginLeft: "10px" }}>
                      Салад ба зууш
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#18BA51",
                      gap: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Бүгдийг харах
                    <GreenRightArrow />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", marginTop: "30px", gap: "50px" }}>
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                </Box>
              </Box>
              <Box sx={{ marginY: "100px" }}>
                <Box
                  sx={{
                    display: "flex",
                    fontFamily: "sans-serif",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarIcon />
                    <Typography sx={{ fontSize: "22px", marginLeft: "10px" }}>
                      Амттан
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#18BA51",
                      gap: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Бүгдийг харах
                    <GreenRightArrow />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", marginTop: "30px", gap: "50px" }}>
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
