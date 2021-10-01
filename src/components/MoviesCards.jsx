import React from "react";
import MoviesCard from "./MoviesCard";
import { Grid, Grow } from "@material-ui/core";

const MoviesCards = ({ movies, activeMovie }) => {
  return (
    <Grow in>
      <Grid
        style={{
          padding: "0 5%",
          width: "100%",
          margin: 0,
          background: "linear-gradient(to bottom , #0E0522 10%, #24134E)",
        }}
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
            lg={3}
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
