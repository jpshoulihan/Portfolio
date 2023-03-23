import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import project from "../data/projects";

const Section = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  alignItems: "center",
  paddingTop: '8vh'
});

function Experience() {
  const theme = useTheme();

  return (
    <Section id="section4">
      <Typography variant="h2">PROJECTS</Typography>
      {project.map((project) => (
        <Grid container key={project.id} style={{ paddingTop: '30px' }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5">{project.title}</Typography>
            <Typography variant="h6">{project.type}</Typography>
            <Typography variant="h6">Skills Used: {project.stack}</Typography>
            <Typography component="div" variant="body1" style={{ color: theme.palette.text.secondary }}>
              <ul>
                {project.details.map((detail) => (
                  <li>{detail}</li>
                ))}
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: {xs: 'center', sm: 'right'},pt: { xs: 2, sm: 0 } }}>
            <a href={`${project.url}`} title='link to project source code' target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', textDecoration: 'none', cursor: 'pointer', color: theme.palette.text.secondary }}>
              <GitHubIcon style={{ fontSize:  '3rem' }} />
            </a>
          </Grid>
        </Grid>
      ))}
    </Section>
  );
}

export default Experience