import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Rating from "@material-ui/lab/Rating";
import React from "react";

export const CityGridItem = ({
  city,
  classes,
  handleRatingChange,
  removeCity,
}) => {
  return (
    <Grid item key={city.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          image={city.image}
          title={city.name}
          className={classes.cardMedia}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h3">
            {city.name}
          </Typography>
          <Typography>{city.description}</Typography>
          <CardActions>
            <Rating
              name={`cityRating ${city.id}`}
              value={city.rating}
              onChange={(event, newValue) =>
                handleRatingChange(city.id, newValue)
              }
            />
            <IconButton area-label="delete" onClick={() => removeCity(city)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
