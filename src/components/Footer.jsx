import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'text.secondary', p: 2, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body1">
        © 2024 My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
