import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/fitness-logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: "auto", height: "60px" }} />
      </Link>
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      color="#4F4557"
      mt="30px"
      textAlign="center"
      pb="30px"
    >
      Made with ❤️ by Gerald dev
    </Typography>
  </Box>
);

export default Footer;
