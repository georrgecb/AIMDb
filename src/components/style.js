import { makeStyles } from "@material-ui/core";

export default makeStyles({
  activeCard: { border: "10px solid #22289a" },

  media: { height: 400 },

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
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
