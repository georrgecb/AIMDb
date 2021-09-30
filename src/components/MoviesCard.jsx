import React from "react";
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

  return (
    <Card
      key={index}
      className={activeMovie === index ? classes.activeCard : classes.mainCard}
    >
      <CardActionArea target="_blank">
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
            <Chip label={`${moment(movieDate).fromNow()}`} variant="outlined" />
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            className={classes.textDetails}
          >
            <Chip label={`Rating: ${vote_average}`} color="primary" />
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
            {overview?.length > 100 ? `${overview.slice(0, 100)}...` : overview}
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
