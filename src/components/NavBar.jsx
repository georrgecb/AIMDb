import { Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setActivePage } from "../slices/navSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const styleText = {
    fontSize: "1rem",
    color: "#818CD9",
    fontWeight: 800,
    cursor: "pointer",
    marginLeft: "1.5rem",
  };

  const handleHome = () => {
    dispatch(setActivePage(0));
  };
  const handleSuggestions = () => {
    dispatch(setActivePage(1));
  };

  return (
    <Box sx={{ height: "10vh" }}>
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "1rem",
              color: "#818CD9",
              fontWeight: 800,
              cursor: "pointer",
            }}
            onClick={handleHome}
          >
            Home
          </Typography>
          <Typography style={styleText} onClick={handleSuggestions}>
            Try saying
          </Typography>
          <a
            href="https://github.com/georrgecb/AIMDb"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography style={styleText}>GitHub Repo </Typography>
          </a>
          {/* <a href="" target="_blank" style={{ textDecoration: "none" }}> */}
          <Typography style={styleText}>AI Script</Typography>
          {/* </a> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
