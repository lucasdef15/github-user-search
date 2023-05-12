import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import theme from './themes/mainTheme.js';
import { ThemeProvider } from '@mui/material';
import GlobalStyles from './components/styles/Global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
