import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#212121',
      paper: '#313131',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const themeLight = createTheme({
  palette: {
    mode: 'light',
    background: {},
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Header />
              <Footer />
            </Grid>

            <Grid item xs={12} md={6}>
              <Home />
              <Skills />
              <Projects />
            </Grid>
          </Grid>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;