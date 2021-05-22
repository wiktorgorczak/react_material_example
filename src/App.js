import React, { useState } from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  Fab,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import cities from "./res/cities.json";
import useStyles from "./styles";
import { CityGridItem } from "./components/CityGridItem";
import { AddCityDialog } from "./components/AddCityDialog";

const App = () => {
  const [state, setState] = useState({
    cities: cities,
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCity, setNewCity] = useState({
    name: "",
    image: "",
    description: "",
    rating: "",
  });
  const classes = useStyles();

  const removeCity = (item) => {
    setState((prevState) => ({
      cities: prevState.cities.filter(function (city) {
        return city.id !== item.id;
      }),
    }));
  };

  const handleAddCityClick = () => {
    setDialogOpen(true);
  };

  const handleCancelDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmDialog = () => {
    setState((prevState) => ({
      cities: [
        ...prevState.cities,
        {
          id:
            Math.max.apply(
              Math,
              prevState.cities.map(function (c) {
                return c.id;
              })
            ) + 1,
          name: newCity.name,
          description: newCity.description,
          image: newCity.image,
          rating: 0,
        },
      ],
    }));
    setDialogOpen(false);
  };

  const handleFormChange = (event) => {
    setNewCity((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleRatingChange = (cityId, newValue) => {
    const newCities = state.cities.map((city) => {
      console.log(cityId);
      if (city.id === cityId) {
        const updatedCity = {
          ...city,
          rating: newValue,
        };
        console.log(updatedCity);
        return updatedCity;
      }

      return city;
    });

    setState({ cities: newCities });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">React Assignment 6</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="md">
          <Grid container spacing={4} className={classes.cardGrid}>
            {state.cities
              .sort((a, b) => {
                if (a.name > b.name) return 1;
                return 0;
              })
              .map((city) => (
                <CityGridItem
                  key={city.id}
                  city={city}
                  classes={classes}
                  handleRatingChange={handleRatingChange}
                  removeCity={removeCity}
                />
              ))}
          </Grid>
        </Container>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.floatingBtn}
          onClick={handleAddCityClick}
        >
          <AddIcon />
        </Fab>
        <AddCityDialog
          dialogOpen={dialogOpen}
          handleCancelDialog={handleCancelDialog}
          handleFormChange={handleFormChange}
          handleConfirmDialog={handleConfirmDialog}
          newCity={newCity}
        />
      </main>
    </>
  );
};

export default App;
