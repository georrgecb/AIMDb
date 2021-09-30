import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useState, useEffect } from "react";
import MoviesCards from "./components/MoviesCards";
import Suggestions from "./components/Suggestions";
import SingleMovie from "./components/SingleMovie";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";
import bgCinema from "./images/bg-cinema.jpg";
import LoadingPage from "./components/LoadingPage";

const alanKEY =
  "d3eac01f6bdc20663ae3f4b6b9f66c6f2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [activePage, setActivePage] = useState(-1);
  const [activeMovie, setActiveMovie] = useState(-1);
  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
    },
  });

  useEffect(() => {
    setTimeout(() => {
      alanBtn({
        key: alanKEY,
        onCommand: ({ command, movies }) => {
          if (command === "wakeUp") {
            setActivePage(1);
          } else if (command === "popularMovies") {
            setMovies(movies);
            setActivePage(2);
          } else if (command === "newMovies") {
            setMovies(movies);
            setActivePage(2);
          } else if (command === "searchMovies") {
            setMovie(movies);
            setActivePage(3);
          } else if (command === "highlights") {
            setActiveMovie((prevActiveMovie) => prevActiveMovie + 1);
          }
        },
      });
      setActivePage(0);
    }, 800);
  }, []);

  if (activePage === -1) return <LoadingPage />;

  const style = {
    background: `url(${bgCinema})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <ThemeProvider theme={theme}>
      <Fade in style={{ transitionDelay: "300ms" }}>
        <div style={style}>
          <NavBar />

          {activePage === 0 && <HomePage />}
          {activePage === 1 && <Suggestions />}
          {activePage === 2 && (
            <MoviesCards movies={movies} activeMovie={activeMovie} />
          )}
          {activePage === 3 && <SingleMovie movie={movie} />}
        </div>
      </Fade>
    </ThemeProvider>
  );
}

export default App;
