// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeUIProvider } from 'theme-ui';
import App from './App';
import theme from './theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <App />
    </ThemeUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
