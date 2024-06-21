import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am a software developer with experience in building web applications using technologies like React, Node.js, and more.
      </Typography>
    </Container>
  );
}

export default About;
