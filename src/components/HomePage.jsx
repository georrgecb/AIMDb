import React from "react";
import { Grid, Typography } from "@material-ui/core";
import cinema1 from "../images/cinema-1.svg";

const HomePage = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h1" color="textSecondary">
          Searching for a movie?
        </Typography>
        <Typography variant="h3" color="textSecondary">
          Meet Raimond, expert in movies and stuff.
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Try saying: Hello, Raimond!
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <img src={cinema1} alt="icon cinema" />
      </Grid>
    </Grid>
  );
};

export default HomePage;
