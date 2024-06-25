import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import profilePhoto from '/workspaces/sastalinkdin/src/assets/gunjesh.png';
import backgroundImage from '/workspaces/sastalinkdin/src/assets/77761.jpg';

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

const BackgroundContainer = styled('div')({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensure it covers the full height of the viewport
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ContentContainer = styled('div')({
  width: '100%',
  padding: '20px', // Add padding to avoid content touching the edges
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Add a background to the content for better readability
  borderRadius: '10px', // Optional: Add some border radius for better aesthetics
});

function Home() {
  return (
    <BackgroundContainer>
      <ContentContainer>
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
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default Home;
