import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@material-ui/core";
import moment from "moment";
import useStyles from "./style.js";

const MoviesCard = ({
  movie: { overview, title, release_date, poster_path, vote_average },
  index,
  activeMovie,
}) => {
  const classes = useStyles();
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";
  const movieDate = new Date(release_date);
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(12)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeMovie && elRefs[activeMovie]) {
      scrollToRef(elRefs[activeMovie]);
    }
  }, [index, activeMovie, elRefs]);

  return (
    <Card
      ref={elRefs[index]}
      key={index}
      className={activeMovie === index ? classes.activeCard : classes.mainCard}
    >
      <CardActionArea style={{ cursor: "crosshair" }}>
        <CardMedia
          className={classes.media}
          image={`${baseImgUrl}${poster_path}`}
        />
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            className={classes.textDetails}
          >
            <Chip label={`${moment(movieDate).fromNow()}`} />
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            className={classes.textDetails}
          >
            <Chip label={`Rating: ${vote_average}`} />
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.overview}
          >
            {overview?.length > 90 ? `${overview.slice(0, 90)}...` : overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions className={classes.cardActions}>
        <Button size="large" color="primary">
          Read More
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default MoviesCard;
