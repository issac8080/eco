import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FlightIcon from "@mui/icons-material/Flight";
import CardActions from "@mui/material/CardActions";

import Grid from "@mui/material/Grid";

export const JourneyCard = ({ journey, onDelete, count }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => onDelete(journey.id), 300);
  };

  return (
    <Paper
      elevation={3}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 300ms" }}
    >
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Journey {count}
            </Typography>
            <Divider />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Mode
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {journey.mode === "car" && <DirectionsCarIcon />}
                {journey.mode === "flight" && <FlightIcon />}
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Distance
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.secondary">
                  {journey.distance} KM
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Fuel Type
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.secondary">
                  {journey.fuelType.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Footprint
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.secondary">
                  {journey.carbonFootprint} CO2e
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body2" color="text.secondary">
                  Trees
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2" color="text.secondary">
                  {journey.trees.toFixed(2)} trees to offset
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
            onClick={handleDelete}
            fullWidth
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};
