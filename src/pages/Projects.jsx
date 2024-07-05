import React from 'react';
import { Grid, Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import project1 from '/workspaces/sastalinkdin/src/assets/project2.jpg';
import project2 from '/workspaces/sastalinkdin/src/assets/project1.jpg';

function Projects() {
  const projectData = [
    { title: 'SENTIMENT DECTECTOR', description: 'real-time sentiment analysis of tweets, accurately classifying sentiments as positive, negative, or neutral', image: project1 },
    { title: 'IMAGE IDENTIFIER', description: 'A robust deep neural network for image classification,specifically designed to detect and classify images containing cats', image: project2 },
    { title: 'SENTIMENT DECTECTOR', description: 'real-time sentiment analysis of tweets, accurately classifying sentiments as positive, negative, or neutral', image: project1 },
    // Add more projects here
  ];

  return (
    <Container>
      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
