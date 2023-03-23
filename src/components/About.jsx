import React from "react";
import {Typography} from "@mui/material";
import Box from "@mui/system/Box";
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import pdfFile from '../assets/cv.pdf';

const Section = styled(Box)({
  minHeight: "100vh",
  width: "100%",
  alignItems: "center",
  paddingTop: "29vh",
    "@media (max-width: 600px)": {
      paddingTop: "8vh",
    },
});

function About() {
  const theme = useTheme();

  return (
    <Section id="section1">
      <Typography variant="h1">JOHN HOULIHAN</Typography>
      <Typography variant="h3" component="h2">SOFTWARE ENGINEER</Typography>
      <Typography variant="h5" component="h3">
        <a href="mailto:jpshoulihan@gmail.com" title='link to john houlihan email' style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>JPSHOULIHAN@GMAIL.COM</a>
      </Typography>
      <Typography variant="body2" style={{marginTop: theme.spacing(8)}}>I am an enthusiastic developer that enjoys writing clean and efficient code to solve problems</Typography>
      <a href={pdfFile} title='link to john houlihan cv pdf' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', cursor: 'pointer', color: theme.palette.text.secondary}}>
      <Typography variant='body2' style={{marginTop: theme.spacing(8)}}>Curriculum Vitae PDF</Typography>
      </a>
      <div style={{marginTop: theme.spacing(6)}}>
        <a href="https://www.linkedin.com/in/jpshoulihan" title='link to john houlihan linkedin profile' target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px',  textDecoration: 'none', cursor: 'pointer', color:theme.palette.text.secondary}}>
          <LinkedInIcon style={{ fontSize: '3rem'}} />
        </a>
        <a href="https://github.com/jpshoulihan" title='link to john houlihan github profile' target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px',  textDecoration: 'none', cursor: 'pointer', color: theme.palette.text.secondary}}>
          <GitHubIcon style={{ fontSize: '3rem'}} />
        </a>
      </div>
    </Section>
  );
}

export default About;
