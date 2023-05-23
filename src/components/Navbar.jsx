import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/fitness-logo.png";

const Navbar = () => (
  <Stack
    direction={{ xs: "column", md: "row" }}
    justifyContent="space-around"
    sx={{
      gap: { sm: "50px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "auto", height: "70px", margin: "0px 10px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="25px"
      alignItems="center"
      justifyContent="center"
      sx={{ justifyContent: 'flex-start', fontSize: '35px'}}
      // sx={{flexDirection: {sm: "column", md: "row"}}}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#CF0A0A",
          borderBottom: "2px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#CF0A0A" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
