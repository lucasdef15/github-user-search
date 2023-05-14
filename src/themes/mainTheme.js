import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          textTransform: 'none',
          fontSize: 'clamp(14px, 1.5vw, 1rem)',
          borderRadius: '15px',
          '& svg': {
            width: '24px',
            height: '24px',
            marginRight: '5px',
          },
          '@media (min-width: 600px)': {
            '& svg': {
              marginRight: '8px',
            },
          },
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
            // fontSize: 'clamp(13px, 1.5vw, 1.125rem)',
          },
          '&::placeholder': {
            color: '#4b6a9b',
            opacity: 1,
            // fontSize: 'clamp(13px, 1.5vw, 1.125rem)',
          },
          '@media (max-width: 600px)': {
            '&::placeholder': {
              fontSize: '13px',
            },
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
      fontSize: 'clamp(1rem, 2.5vw, 1.625rem)',
      lineHeight: 'clamp(20px, 2.5vw, 38px)',
    },
    h2: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'Bold',
      fontSize: 'clamp(1rem, 2vw, 1.375rem)',
      lineHeight: '33px',
    },
    h3: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'normal',
      fontSize: 'clamp(.813rem, 1.5vw, 1rem)',
      lineHeight: '24px',
    },
    h4: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'normal',
      fontSize: 'clamp(.688rem, 1.5vw, .819rem)',
      lineHeight: '20px',
    },
    body1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 'normal',
      fontSize: 'clamp(.813rem, 1.5vw, .938rem)',
      lineHeight: '25px',
    },
  },
  shapes: {
    borderRadius: '13px',
  },
});

export default theme;
