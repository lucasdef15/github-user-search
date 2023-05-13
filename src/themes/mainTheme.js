import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          textTransform: 'none',
          fontSize: '1rem',
          borderRadius: '15px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '1.125rem',
          '&::-webkit-input-placeholder': {
            color: '#4b6a9b',
            opacity: 1,
            fontSize: '1.125rem',
          },
          fontSize: '1.125rem',
          '&::placeholder': {
            color: '#4b6a9b',
            opacity: 1,
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0079ff',
    },
    secondary: {
      main: '#4b6a9b',
      light: '#697c9a',
      dark: '#2b3442',
    },
    lightPrimary: {
      main: '#f6f8ff',
      light: '#fefefe',
    },
    darkPrimary: {
      main: '#141d2f',
      light: '#ffffff',
      dark: '#1e2a47',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'Bold',
      fontSize: '1.625rem',
      lineHeight: '38px',
    },
    h2: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'Bold',
      fontSize: '1.375rem',
      lineHeight: '33px',
    },
    h3: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'normal',
      fontSize: '1rem',
      lineHeight: '24px',
    },
    h4: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'normal',
      fontSize: '.819rem',
      lineHeight: '20px',
    },
    body1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'normal',
      fontSize: '.938rem',
      lineHeight: '25px',
    },
  },
  shapes: {
    borderRadius: '15px',
  },
});

export default theme;
