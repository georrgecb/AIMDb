import { makeStyles } from "@material-ui/core";

export default makeStyles({
  // Movie Card
  activeCard: { border: "10px solid #22289a" },

  media: { height: 350 },

  border: {
    border: "solid",
  },

  mainCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },

  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 16px",
  },
  textDetails: { fontSize: "1rem" },

  title: {
    padding: "0 16px",
    fontWeight: 600,
  },
  overview: { fontSize: "1rem" },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  // Home Page
  bigTitle: {
    fontSize: "3rem",
    fontWeight: 900,
    lineHeight: "normal",

    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subTitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
    background: "-webkit-linear-gradient(45deg, #818CD9 30%, #c6cdef 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "2rem 0 6rem 0",
  },
  trySaying: {
    color: "#FE6B8B",
    fontSize: "1.5rem",
    fontStyle: "italic",
  },
  // Suggestions
  suggestionsDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    border: "5px white solid",
    // boxShadow: "0px 0px 12px 0px white",
    color: "white",
  },
});
