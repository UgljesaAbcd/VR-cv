import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/';

// moj-komentar - inace, kada kreiras temu sa ovim createTheme, ti zapravo override-jes neke defoltne vrednosti u MUI biblioteci,
// tako npr palette objekat vec u sebi ima parametre kao sto su main, error, secondary, itd. koji su i sami objekti, pa onda ti mozes da override-jes te vrednosti
// nema potrebe da sve kreiras iznova i iznova. Naravno. ima slucajeva kada ti treba tvoj objekat za neku ucstom stvar, ali to nije toliko cesto.
// hocu reci, ako nesto hoces da koristis svuda po aplikaciji, onda bolje koristi te difolt objekte i klase, jer same MUI komponente po defoltu gledaju te klase
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
      main: '#b71c1c' // moj-komentar - search-uj myColors4 kako je primenjeno
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
          color: '#0092FF',
          fontSize: '1.5rem'
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

// moj-komentar - poenta ovog ThemeProvider-a i jeste da vrapujes celu aplikaciju i da onda imas svuda te style-ve u celoj aplikaciji
// nema poente da ubacujes svuda po aplikaciji ovaj provider
// ako nesto hoces da customizujes, sto se ne gadja sa ovim stilovima koje imas u temi, onda koristi styled components (pogledaj u MUI dokumentaciji)
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
