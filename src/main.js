import 'font-awesome/css/font-awesome.min.css';
import 'main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import{ThemeProvider, CSSReset} from '@chakra-ui/core';
import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    heading: '"Arial", sans-serif',
    body: '"Poppins", sans-serif',
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    primary: "#1f1f1f",
    secondary: "white",
    brand: {
      50: 'rgba(0,0,0, 0.5)',
      100: '#2af',
      200: '#2af',
      300: '#2af',
      400: '#2af',
      500: '#2af',
      600: '#2af',
      700: '#2af',
      800: '#2af',
      900: '#2af',
    },
  },
};

import App from 'app';

ReactDOM.render(
  <div id="mount">
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </div>,
  document.getElementById('mount'),
);
