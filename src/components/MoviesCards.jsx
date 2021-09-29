import React from "react";
import MoviesCard from "./MoviesCard";
import { Grid, Grow, Typography } from "@material-ui/core";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    info: "Get the most recent news",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Joe Biden...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const MoviesCards = ({ movies, activeMovie }) => {
  if (!movies.length) {
    return (
      <Grow in>
        <Grid
          style={{ padding: "0 5%", width: "100%", margin: 0 }}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  background: infoCard.color,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "45vh",
                  padding: "10%",
                  borderRadius: 10,
                }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>

                <Typography variant="body1">
                  <strong>{infoCard.title.split(" ")[2]}</strong>
                  <br />
                  <i> {infoCard.info}</i>
                </Typography>

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
  }
  return (
    <Grow in>
      <Grid
        style={{ padding: "0 5%", width: "100%", margin: 0 }}
        container
        alignItems="stretch"
        spacing={3}
      >
        {movies.map((movie, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            style={{ display: "flex" }}
          >
            <MoviesCard movie={movie} index={index} activeMovie={activeMovie} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default MoviesCards;
