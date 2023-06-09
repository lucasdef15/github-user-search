import { createTheme } from '@mui/material';

function Theme(dark) {
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
              width: '22px',
              height: '22px',
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
              color: `${dark ? '#ffffff' : '#4b6a9b'}`,
              opacity: 1,
            },
            '&::placeholder': {
              color: `${dark ? '#ffffff' : '#4b6a9b'}`,
              opacity: 1,
            },
            '@media (max-width: 600px)': {
              fontSize: '13px',
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
        main: `${dark ? '#ffffff' : '#4b6a9b'}`,
        light: `${dark ? '#ffffff' : '#A5B4CC'}`,
        dark: `${dark ? '#ffffff' : '#697c9a'}`,
      },
      lightPrimary: {
        main: `${dark ? '#141d2f' : '#f6f8ff'}`,
        light: `${dark ? '#8E94A3' : '#A5B4CC'}`,
      },
      darkPrimary: {
        main: `${dark ? '#ffffff' : '#141d2f'}`,
        light: `${dark ? '#1e2a47' : '#ffffff'}`,
        dark: '#1e2a47',
      },
      error: {
        main: '#F74646',
      },
    },
    typography: {
      h1: {
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

  return theme;
}

export default Theme;
