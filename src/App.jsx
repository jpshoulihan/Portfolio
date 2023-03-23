import React from "react";
import { Grid, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


function App() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const sections = [
    { text: "ABOUT", id: "section1" },
    { text: "EXPERIENCE", id: "section2" },
    { text: "EDUCATION", id: "section3" },
    { text: "PROJECTS", id: "section4" },
    { text: "SKILLS", id: "section5" },
  ];

  return (
    <Grid container sx={{ display: "flex", height: "100vh" }} spacing={6}>
      {isSmallScreen ? (
        <Grid item xs={12}>
          <Navbar sections={sections} />
        </Grid>
      ) : (
        <Grid item xs={12} sm={2}>
          <Sidebar sections={sections} />
        </Grid>
      )}
      <Grid item xs={12} sm={9.5}>
        <Grid container direction="column" justifyContent="flex-start">
          <Grid item xs={12} sx={{ padding: theme.spacing(2) }}>
            <About />
          </Grid>
          <Grid item xs={12} sx={{ padding: theme.spacing(2) }}>
            <Divider style={{ margin: "40px 0" }} />
            <Experience />
          </Grid>
          <Grid item xs={12} sx={{ padding: theme.spacing(2) }}>
            <Divider style={{ margin: "40px 0" }} />
            <Education />
          </Grid>
          <Grid item xs={12} sx={{ padding: theme.spacing(2) }}>
            <Divider style={{ margin: "40px 0" }} />
            <Projects/>
          </Grid>
          <Divider style={{ margin: "40px 0" }} />
          <Grid item xs={12} sx={{ padding: theme.spacing(2) }}>
            <Skills/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

