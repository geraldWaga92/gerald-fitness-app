import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/fitness-logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: 'auto', height: '60px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} color="#4F4557" mt="30px" textAlign="center" pb="30px">Made with ❤️ by Gerald dev</Typography>
  </Box>
);

export default Footer;