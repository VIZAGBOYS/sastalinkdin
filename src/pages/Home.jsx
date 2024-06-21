import React from 'react';
import { Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" paragraph>
        Hello! I am a passionate developer with skills in various technologies. Check out my projects and get to know more about me.
      </Typography>
    </Container>
  );
}

export default Home;
