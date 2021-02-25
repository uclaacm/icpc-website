import 'main.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';

import App from 'app';


const customTheme = {
  ...theme,
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Kufam", cursive',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    regular: '400',
    semibold: '600',
    bold: '800',
  },
  fontSizes: {
    xs: '0.875rem',
    sm: '0.95rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.5rem',
    '3xl': '1.95rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  colors: {
    ...theme.colors,
    primary: '#1f1f1f',
    secondary: 'white',
    brand: {
      50: 'rgba(255, 84, 121, 0.1)',
      100: 'rgba(255, 84, 121, 0.3)',
      200: 'rgba(255, 84, 121, 0.5)',
      300: 'rgba(255, 84, 121, 0.7)',
      400: 'rgba(255, 84, 121, 0.9)',
      500: 'rgba(255, 84, 121, 1)',
      600: '#ff1043',
      700: '#ed0033',
      800: '#cb002c',
      900: '#a90024',
    },
  },
};

ReactDOM.render(
  <div id="mount">
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </div>,
  document.getElementById('mount'),
);
