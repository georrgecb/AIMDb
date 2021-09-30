import React from "react";
import { Zoom, Grid } from "@material-ui/core";
import Logo from "../images/logo.svg";

const LoadingPage = () => {
  return (
    <div style={{ background: "#0E0522" }}>
      <Zoom in>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid item>
            <img src={Logo} style={{ height: "16rem" }} alt="aimdb logo" />
          </Grid>
        </Grid>
      </Zoom>
    </div>
  );
};

export default LoadingPage;
