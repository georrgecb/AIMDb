import React from "react";
import { Box, AppBar, Typography, Toolbar } from "@material-ui/core";

const NavBar = () => {
  return (
    <Box sx={{ height: "10vh", opacity: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            style={{
              color: "#818CD9",
              fontWeight: 600,
              cursor: "pointer",
            }}
            // onClick={() => {
            //   setActivePage(0);
            // }}
          >
            Home
          </Typography>

          <Typography
            variant="h6"
            style={{
              color: "#818CD9",
              fontWeight: 600,
              margin: "0 3rem",
              cursor: "pointer",
            }}
          >
            GitHub Repo
          </Typography>

          <Typography
            variant="h6"
            style={{
              color: "#818CD9",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            AI Script
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
