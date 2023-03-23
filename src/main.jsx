import React from 'react'
import ReactDOM from 'react-dom/client'
import darkTheme from './themes/theme'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Helmet } from 'react-helmet';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
      <Helmet>
        <title>John Houlihan Portfolio</title>
        <meta
          name="description"
          content="I am a Full Stack Developer experienced in Python, TypeScript, IoT, Java, JavaScript, MUI, Docker, AWS, Bash, HTML, CSS, React.js, Node.js, Express.js, RDBMS, NoSQL, and SQL."
        />
      </Helmet>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
