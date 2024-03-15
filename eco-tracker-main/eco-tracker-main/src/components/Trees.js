import React from "react";
import { Paper, Typography, Stack } from "@mui/material";
import ParkIcon from "@mui/icons-material/Park";

const TREES_CO2_ABSORPTION_PER_YEAR_KG = 22;

const Trees = ({ co2eResult }) => {
  const numberOfTreesToOffset = co2eResult / TREES_CO2_ABSORPTION_PER_YEAR_KG;

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2, backgroundColor: "#f6f6f6" }}>
      <Stack spacing={2}>
        <Typography component="h2" variant="h4">
          Trees
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <ParkIcon />
          <Typography variant="h5">
            {numberOfTreesToOffset.toFixed(2)}
          </Typography>
        </Stack>
        <Typography variant="caption">
          Number of trees required to offset the above mentioned carbon
          emissions.
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Trees;
