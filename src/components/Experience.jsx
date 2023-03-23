import React from "react";
import { Typography } from "@mui/material/";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import experience from "../data/experience";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Section = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  alignItems: "center",
  paddingTop: "8vh",
});

function Experience() {
    const theme = useTheme();

    return (
        <Section id="section2">
            <Typography variant="h2">EXPERIENCE</Typography>
            {experience.map((exp) => (
        <Grid container key={exp.id} style={{ paddingTop: '20px' }} id={exp.id}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5">{exp.title}</Typography>
            <Typography variant="h6">{exp.companyName}</Typography>
            <Typography component="div" variant="body1" style={{ color: theme.palette.text.secondary }}>
              <ul>
                {exp.bullets.map((bullet) => (
                  <li key={bullet.id}>{bullet.text}</li>
                ))}
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" align="right" style={{ color: theme.palette.text.secondary }}>{exp.startDate} - {exp.endDate}</Typography>
          </Grid>
        </Grid>
      ))}
        </Section>
    );
}

export default Experience