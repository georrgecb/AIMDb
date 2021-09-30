import React from "react";
import MoviesCard from "./MoviesCard";
import { Grid, Grow } from "@material-ui/core";

const MoviesCards = ({ movies, activeMovie }) => {
  return (
    <Grow in>
      <Grid
        style={{
          padding: "0 15%",
          width: "100%",
          margin: 0,
          height: "90vh",
          overflow: "scroll",
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
