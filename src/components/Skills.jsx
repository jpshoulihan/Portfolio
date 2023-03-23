import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import skills from "../data/skills";

const Section = styled(Box)({
    minHeight: "100vh",
    width: "100%",
    alignItems: "center",
    paddingTop:'8vh'
});

function Skills() {
  const theme = useTheme();
    return (
        <Section id="section5">
            <Typography variant="h2">SKILLS</Typography>
            {skills.map((skill) => (
        <Grid container key={skill.id} style={{ paddingTop: '40px' }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" style={{marginBottom: '4px'}}>{skill.title}</Typography>
            <Typography variant="body1" style={{ color: theme.palette.text.secondary }}>{skill.list}</Typography>
          </Grid>
        </Grid>
      ))}
        </Section>
    );
}

export default Skills