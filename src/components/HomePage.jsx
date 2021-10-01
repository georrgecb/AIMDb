import React from "react";
import { Grid, Typography, Box, Grow } from "@material-ui/core";

import useStyles from "./style.js";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "90vh", padding: "4rem" }}
      >
        <Grid item md={6} />
        <Grid item xs={12} sm={8} md={4}>
          <Box sx={{ textAlign: "center" }}>
            <Typography className={classes.bigTitle}>
              Meet Johnny Deep!
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.subTitle}
            >
              Johnny is your new AI assistant who knows everything about movies.
              If you need help picking one, just press that blue button and say
              something.
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
      </Grid>
    </Grow>
  );
};

export default HomePage;
