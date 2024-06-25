import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import profilePhoto from '/workspaces/sastalinkdin/src/assets/gunjesh.png';

const ProfileContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ProfilePhoto = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '300px',
  zIndex: 1,
});

const ButtonContainer = styled('div')({
  marginTop: '20px',
  display: 'flex',
  gap: '10px',
});

function Home() {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            I'm <span style={{ fontWeight: 'bold' }}>Kate Winslet</span>
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            App Developer
          </Typography>
          <ButtonContainer>
            <Button variant="contained" color="primary">
              Download CV
            </Button>
            <Button variant="outlined" color="primary">
              Play Video
            </Button>
          </ButtonContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfileContainer>
            
            <ProfilePhoto src={profilePhoto} alt="Profile Photo" />
          </ProfileContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
