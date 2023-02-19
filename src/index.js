import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/';

const theme = createTheme({
  palette: {
    myColors: {
      main: '#0A192F',
      secondary: '#0092FF',
      third: '#F6BE3B',
      white: '#F1F1E6'
    },
    myColors2: {
      main: '#F6BE3B'
    },
    myColors3: {
      main: '#0092FF'
    },
    myColors4: {
      main: '#b71c1c'
    }
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#F6BE3B'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#0092FF'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'F6BE3B'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#F1F1E6'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ['Lato', 'sans-serif'].join(','),
          // cursor: 'pointer',
          color: '#0092FF',
          fontSize: '1.5rem'
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
