import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import theme from './themes/mainTheme.js';
import GlobalStyles from './components/styles/Global.js';
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
