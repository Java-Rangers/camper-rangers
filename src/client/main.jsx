import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material'

const theme = createTheme({
  pallet: {
    primary: {main: "#228C22"}
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
