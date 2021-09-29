import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useState, useEffect } from "react";
import MoviesCards from "./components/MoviesCards";
import HomePage from "./components/HomePage";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const alanKEY =
  "d3eac01f6bdc20663ae3f4b6b9f66c6f2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [activeMovie, setActiveMovie] = useState(0);
  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
    },
  });

  useEffect(() => {
    alanBtn({
      key: alanKEY,
      onCommand: ({ command, movies }) => {
        if (command === "popularMovies") {
          setMovies(movies);
          setActivePage(1);
        } else if (command === "newMovies") {
          setMovies(movies);
          setActivePage(1);
        } else if (command === "searchMovies") {
          setMovies(movies);
        } else if (command === "highlights") {
          setActiveMovie((prevActiveMovie) => prevActiveMovie + 1);
        }
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          background: "#293593",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {activePage === 0 && <HomePage />}
        {activePage === 1 && (
          <MoviesCards movies={movies} activeMovie={activeMovie} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
