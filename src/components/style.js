import { makeStyles } from "@material-ui/core";

export default makeStyles({
  // Movie Card
  activeCard: { borderBottom: "0.8rem solid #EECF30" },
  media: { height: 350 },
  border: {
    border: "solid",
  },
  mainCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "0.8rem solid white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 16px",
  },
  textDetails: { fontSize: "1rem", fontWeight: 600 },

  title: {
    padding: "0 16px",
    fontWeight: 600,
  },
  overview: { fontSize: "1rem", fontWeight: 500 },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },

  // Home Page
  bigTitle: {
    fontSize: "2.8rem",
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
    margin: "1rem 0 5rem 0",
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
    height: "55vh",
    padding: "10%",
    borderRadius: 10,
    border: "0.3rem white solid",
    color: "white",
  },

  // Single Movie
  movieStats: {
    fontSize: "1.2rem",
    fontWeight: 600,
    borderRight: "0.18rem solid #C04249",
    padding: "0 1rem",
  },
  genre: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "white",
    background: "#F4B943",
    borderRadius: "2rem",
    padding: "0.2rem 0.4rem",
    marginRight: "0.2rem",
  },
  vote: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    background: "#F4B943",
  },
});
