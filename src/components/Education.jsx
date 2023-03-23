import React from "react";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box"; 
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import education from "../data/education";

const Section = styled(Box)({
    minHeight: "100vh",
    width: "100%",
    alignItems: "center",
    paddingTop:'8vh'
});

function Education() {
    const theme = useTheme();

    return (
        <Section id="section3">
            <Typography variant="h2">EDUCATION</Typography>
            {education.map((education) => (
        <Grid container key={education.id} style={{ paddingTop: '80px' }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">{education.degree}</Typography>
            <Typography variant="h6">{education.location}</Typography>
            <Typography variant="body1" style={{ color: theme.palette.text.secondary, paddingTop:'20px'}}>{education.course}</Typography>
            <Typography variant="body1" style={{ color: theme.palette.text.secondary }}>{education.result}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" align="right" style={{ color: theme.palette.text.secondary }}>{education.startDate} - {education.endDate}</Typography>
          </Grid>
        </Grid>
      ))}
        </Section>
    );
}

export default Education