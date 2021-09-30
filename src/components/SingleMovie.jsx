import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import moment from "moment";
import useStyles from "./style.js";

const SingleMovie = ({
  movie: {
    overview,
    title,
    release_date,
    backdrop_path,
    poster_path,
    vote_average,
    vote_count,
    genres,
    budget,
  },
  index,
}) => {
  const classes = useStyles();
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";
  const movieDate = new Date(release_date);

  return (
    <Box>
      <Paper
        variant="outlined"
        elevation={24}
        style={{
          padding: "2rem",
          margin: "2rem 3rem",
        }}
      >
        <Grid container justifyContent="space-between" spacing={6}>
          <Grid item xs={12} md={6} lg={8}>
            <Typography
              style={{
                marginBottom: "1rem",
                fontSize: "3rem",
                fontWeight: 800,
                color: "#C04249",
              }}
            >
              {title}
            </Typography>
            <Typography style={{ fontSize: "1.3rem", fontWeight: 500 }}>
              {overview}
            </Typography>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "flex-start",
                marginTop: "2rem",
              }}
            >
              <Typography
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  borderRight: "2px solid #C04249",
                  padding: "0 0.5rem 0 0",
                }}
              >
                Rating:{" "}
                <span
                  style={{
                    textDecoration: "underline #C04249",
                    fontWeight: "bolder",
                  }}
                >
                  {vote_average}
                </span>{" "}
                from {vote_count} votes
              </Typography>
              <Typography
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  borderRight: "2px solid #C04249",
                  paddingRight: "0.5rem",
                }}
              >
                Released in{" "}
                <span
                  style={{
                    textDecoration: "underline #C04249",
                    fontWeight: "bolder",
                  }}
                >
                  {movieDate.getFullYear()}
                </span>
              </Typography>
              <Typography
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  //   borderRight: "2px solid #C04249",
                  paddingRight: "0.5rem",
                }}
              >
                Budget of{" "}
                <span
                  style={{
                    textDecoration: "underline #C04249",
                    fontWeight: "bolder",
                  }}
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(budget)}
                </span>
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Typography style={{ fontSize: "1rem" }}> Genres:</Typography>

              {genres.map((genre, index) => (
                <Typography
                  key={index}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    border: "2px solid grey",
                    borderRadius: "2rem",
                    padding: "0.3rem",
                    margin: "0.5rem",
                  }}
                >
                  {genre.name}
                </Typography>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <img
              src={`${baseImgUrl}${poster_path}`}
              style={{
                height: "30rem",
                border: "0.2rem solid white",
                borderRadius: "0.4rem",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SingleMovie;
