import React from "react";
import {
  Card,
  CardAction,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
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
          <Typography variant="body2" color="textSecondary" component="h2">
            Released {moment(release_date).fromNow()}.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            Rating: {vote_average}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview?.length > 150 ? `${overview.slice(0, 150)}...` : overview}
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
