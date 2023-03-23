import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette:{
        mode: 'dark',
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
          },
    },
    typography: {
        fontFamily:
            'Roboto, sans-serif',
        h1: {
            fontWeight: 'bold',
            fontSize: '4.2rem',
            lineHeight: 1,
            letterSpacing: '-0.01562em'
        },
        h2:{
            fontWeight: 'bold',
            fontSize: '3.25rem',
            lineHeight: 1,
            letterSpacing: '-0.00833em'
        },
        h3:{
            fontWeight: '400',
            fontSize: '2.4rem',
            lineHeight: 1.167,
            letterSpacing: '0em'
        },
        h4:{
            fontWeight: '400',
            fontSize: '2.2rem',
            lineHeight: 1.167,
            letterSpacing: '0em'
        },
        body1: {
            fontWeight: 'bold',
            fontSize: '1rem',
            lineHeight: 1.2,
            letterSpacing:'0.01071em'
        },
        body2: {
            fontWeight: '400',
            fontSize: '1rem',
            lineHeight: 1.02,
            letterSpacing:'0.01071em'
        }
    },
})

export default darkTheme