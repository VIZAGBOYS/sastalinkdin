import React from 'react';
import { Grid, Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projectData = [
    { title: 'Project 1', description: 'Description for project 1', image: 'project1.jpg' },
    { title: 'Project 2', description: 'Description for project 2', image: 'project2.jpg' },
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
