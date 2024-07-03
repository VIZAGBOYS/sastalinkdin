import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import profilePhoto from '/workspaces/sastalinkdin/src/assets/gunjesh.png';
const ProfileContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const ProfilePhoto = styled('img')({
  width: '120%',
  height: 'auto',
  maxWidth: '1000px', // Increase the size of the profile picture here
  zIndex: 1,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 0.8,
  },
});

const TextContainer = styled('div')({
  position: 'relative',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
  '&.show': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '&:nth-child(odd)': {
    transitionDelay: '0.2s',
  },
  '&:nth-child(even)': {
    transitionDelay: '0.4s',
  },
});

const CustomButton = styled(Button)({
  transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#1976d2', // Adjust the hover color as desired
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', // Add elevation on hover
    opacity: 0.8, // Adjust opacity on hover
  },
});

const ButtonContainer = styled('div')({
  marginTop: '20px',
  display: 'flex',
  gap: '10px',
});

function Home() {
  const [isTextVisible, setIsTextVisible] = React.useState(false);

  React.useEffect(() => {
    setIsTextVisible(true);
  }, []);

  const handleDownloadClick = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=15ZWDC-kke7Y1lVK5oO-AJPwSirpId7vs';
  };

  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextContainer className={isTextVisible ? 'show' : ''}>
            <Typography variant="h3" component="h1" gutterBottom>
              I'm <span style={{ fontWeight: 'bold' }}>Gunjesh Kumar</span>
            </Typography>
          </TextContainer>
          <TextContainer className={isTextVisible ? 'show' : ''}>
            <Typography variant="h4" component="h2" gutterBottom>
              App Developer
            </Typography>
          </TextContainer>
          <ButtonContainer>
            <CustomButton variant="contained" color="primary" onClick={handleDownloadClick}>
              Download CV
            </CustomButton>
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
