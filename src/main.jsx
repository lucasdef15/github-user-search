import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import theme from './themes/mainTheme';
import { ThemeProvider } from '@mui/material/styles';
import { DataProvider } from '/src/contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);
