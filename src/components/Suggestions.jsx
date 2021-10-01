import React from "react";
import { Grow, Grid, Typography } from "@material-ui/core";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import AssistantIcon from "@material-ui/icons/Assistant";
import useStyles from "./style.js";

const infoCards = [
  {
    color: "#744A9A",
    title: "Popular movies",
    info: <LocalActivityIcon fontSize="large" />,
    text: "Show me the most popular movies.",
  },
  {
    color: "#47277C",
    title: "New releases",
    info: <NewReleasesIcon fontSize="large" />,
    text: "Which movies are playing in theaters right now?",
  },
  {
    color: "#231D4D",
    title: "Find a movie",
    info: <LocalMoviesIcon fontSize="large" />,
    text: "Tell me more about the movie The Big Lebowsky.",
  },
  {
    color: "#8386D9",
    title: "Ask me",
    info: <AssistantIcon fontSize="large" />,
    text: (
      <div>
        How was your day?
        <br />
        What's your favorite movie?
      </div>
    ),
  },
];

const Suggestions = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        style={{
          padding: "0 10%",
          width: "100%",
          margin: 0,
          height: "90vh",
          overflow: "scroll",
        }}
        container
        alignItems="center"
        spacing={3}
      >
        {infoCards.map((infoCard, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            lg={3}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              className={classes.suggestionsDiv}
              style={{
                background: infoCard.color,
              }}
            >
              <Typography variant="h5">{infoCard.title}</Typography>

              <div style={{ width: "2rem" }}>{infoCard.info}</div>

              <Typography variant="subtitle1">
                <strong>Try saying:</strong> <br />
                <i>{infoCard.text}</i>
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default Suggestions;
