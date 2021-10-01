import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useState, useEffect } from "react";
import MoviesCards from "./components/MoviesCards";
import Suggestions from "./components/Suggestions";
import SingleMovie from "./components/SingleMovie";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";
import bgCinema from "./images/bg-cinema.jpg";
import LoadingPage from "./components/LoadingPage";
import { setActivePage, selectActivePage } from "./slices/navSlice";

const alanKEY = process.env.REACT_APP_AI_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [activeMovie, setActiveMovie] = useState(-1);
  const dispatch = useDispatch();
  const activePage = useSelector(selectActivePage);
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
            dispatch(setActivePage(1));
          } else if (command === "popularMovies") {
            setMovies(movies);
            setActiveMovie(-1);
            dispatch(setActivePage(2));
          } else if (command === "newMovies") {
            setMovies(movies);
            setActiveMovie(-1);
            dispatch(setActivePage(2));
          } else if (command === "searchMovies") {
            setMovie(movies);
            dispatch(setActivePage(3));
          } else if (command === "mainPage") {
            dispatch(setActivePage(1));
          } else if (command === "highlight") {
            setActiveMovie((prevActiveMovie) => prevActiveMovie + 1);
          }
        },
      });
      dispatch(setActivePage(0));
    }, 800);
  }, [dispatch]);

  const style = {
    background: `url(${bgCinema})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (activePage === -1) return <LoadingPage />;

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Fade in style={{ transitionDelay: "300ms" }}>
        <div style={style}>
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
};

export default App;
