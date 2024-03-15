import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { JourneyCard } from "../components/JourneyCard";
import { Banner } from "../components/Banner";

export const MyJourneys = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const savedJourneys = JSON.parse(localStorage.getItem("journeys")) || [];
    setJourneys(savedJourneys);
  }, []);

  const handleDelete = (id) => {
    const newJourneys = journeys.filter((journey) => journey.id !== id);
    setJourneys(newJourneys);
    localStorage.setItem("journeys", JSON.stringify(newJourneys));
  };

  return (
    <Stack spacing={3}>
      {journeys.length > 0 ? (
        <Banner title="Your saved journeys" />
      ) : (
        <>
          <Banner title="You have no saved journeys!" />
          <Alert severity="info">
            To save your journeys, use the calculator on the{" "}
            <Link to="/footprint">footprint</Link> page.
          </Alert>
        </>
      )}

      <Grid container spacing={3} justifyContent={"space-evenly"}>
        {journeys.map((journey, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={journey.id}
            sx={{
              marginLeft: "-1.5em",
              marginRight: "1.2em",
            }}
          >
            <JourneyCard
              journey={journey}
              count={index + 1}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
