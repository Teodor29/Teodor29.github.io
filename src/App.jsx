import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Box sx={{ marginX: ["0.5rem", "0.5rem", "1.5rem"] }}>
        <Container>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "100vh",
                position: { md: "sticky" },
                top: 0,
                marginTop: ["0", "0", "5rem"],
              }}
            >
              <Header />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                marginTop: ["0", "0", "5rem"],
              }}
            >
              <Home />
              <Skills />
              <Projects />
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
