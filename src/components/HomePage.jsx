import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

import useStyles from "./style.js";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "90vh", padding: "4rem" }}
    >
      <Grid item md={6} />
      <Grid item xs={12} md={4}>
        <Box sx={{ textAlign: "center" }}>
          <Typography className={classes.bigTitle}>Do not disturb!</Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes.subTitle}
          >
            Unless you really need my help picking a movie. For some reason, my
            only purpose is to find, review and recommend movies.
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className={classes.trySaying}
          >
            Try saying: "Wake up!"
          </Typography>
        </Box>
      </Grid>
      {/* <Grid item xs={0} md={4}>
        <img src={cinema1} alt="icon cinema" />
      </Grid> */}
    </Grid>
  );
};

export default HomePage;
