import React from "react";
import { Box, Grid, Paper, Typography, Button, Grow } from "@material-ui/core";
import useStyles from "./style.js";
import OpenInNew from "@material-ui/icons/OpenInNew";
import bgSingle from "../images/Mohaka.svg";

const SingleMovie = ({
  movie: {
    overview,
    title,
    release_date,
    tagline,
    poster_path,
    vote_average,
    genres,
    budget,
    imdb_id,
    runtime,
    spoken_languages,
  },
}) => {
  const classes = useStyles();
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";
  const movieDate = new Date(release_date);

  return (
    <Grow in>
      <Box style={{ height: "90vh", overflow: "scroll" }}>
        <Paper
          variant="outlined"
          elevation={10}
          style={{
            padding: "2rem",
            margin: "1rem",
            background: `url(${bgSingle})`,
            backgroundPosition: "center",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            spacing={6}
            style={{
              backgroundColor: "white",
              borderRadius: "0.3rem",
              padding: "0.5rem",
            }}
          >
            <Grid item xs={12} md={6} lg={8}>
              <Typography
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "#C04249",
                }}
              >
                {title}
              </Typography>
              <Typography
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "2rem",
                }}
              >
                <i>{tagline ? `"${tagline}"` : ""}</i>
              </Typography>
              <Typography style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                {overview}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  marginTop: "2rem",
                }}
              >
                <Typography
                  className={classes.movieStats}
                  style={{ paddingLeft: 0 }}
                >
                  Runtime:{" "}
                  <span
                    style={{
                      textDecoration: "underline #C04249",
                      fontWeight: "bolder",
                    }}
                  >
                    {runtime}
                  </span>{" "}
                  min.
                </Typography>
                <Typography className={classes.movieStats}>
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
                {budget ? (
                  <Typography className={classes.movieStats}>
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
                ) : null}
                <Typography
                  className={classes.movieStats}
                  style={{ border: "none" }}
                >
                  {spoken_languages[0]?.english_name}
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
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  {genres.map((genre, index) => (
                    <Typography key={index} className={classes.genre}>
                      {genre.name}
                    </Typography>
                  ))}
                </div>
              </div>

              <Typography
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginTop: "4rem",
                }}
              >
                {" "}
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  IMDb Page{" "}
                  <OpenInNew fontSize="small" style={{ color: "#C04249" }} />
                </a>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  src={`${baseImgUrl}${poster_path}`}
                  alt={`${title} poster`}
                  style={{
                    maxHeight: "30rem",
                    maxWidth: "70vw",
                    borderRadius: "0.5rem",
                    boxShadow: "0rem 0rem 2rem gray",
                  }}
                />
              </div>

              <Button variant="contained" size="small" className={classes.vote}>
                <Typography style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <span style={{ fontSize: "1.2rem" }}>{vote_average}</span>/10
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grow>
  );
};

export default SingleMovie;
