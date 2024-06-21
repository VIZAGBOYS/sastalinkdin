import React from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </form>
    </Container>
  );
}

export default Contact;
