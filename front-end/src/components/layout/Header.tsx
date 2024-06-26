import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { PineconeLogo } from "../icons/iconSvg";
import { HeaderLogInIcon } from "../icons/iconSvg";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Order from "../orderDetail/Order";
import Link from "next/link";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
  }));

  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#18BA51",
    },
  });

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PineconeLogo />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
            }}
          >
            <Link href="/">
              <Tab sx={{ color: "black" }} label="НҮҮР" />
            </Link>
            <Link href="/menu">
              <Tab sx={{ color: "black" }} label="ХООЛНЫ ЦЭС" />
            </Link>
            <Link href="/deliveryArea">
              <Tab sx={{ color: "black" }} label="ХҮРГЭЛТИЙН БҮС" />
            </Link>
          </Tabs>
          <Search
            sx={{
              border: "solid",
              borderRadius: "8px",
              borderColor: "#000000",
              marginRight: "30px",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon
                sx={{ color: "#000000", marginLeft: "-5px", cursor: "pointer" }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Хайх"
              sx={{ color: "#000000", width: "180px", marginLeft: "40px" }}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <Order />
            <Link href={"../logIn"}>
              <Box
                sx={{
                  color: "#000000",
                  fontFamily: "sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                <HeaderLogInIcon />
                Нэвтрэх
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
