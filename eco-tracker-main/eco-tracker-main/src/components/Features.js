import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Features = () => {
  return (
    <Paper elevation={3}>
      <Stack spacing={5} sx={{ p: 5, backgroundColor: "#f6f6f6" }}>
        <Typography component="h2" variant="h4" sx={{ textAlign: "center" }}>
          Features
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
          spacing={3}
        >
          <Stack sx={{ width: "18rem", textAlign: "center" }} spacing={2}>
            <Typography variant="h5">Vehicle Emissions</Typography>
            <Typography component="p" variant="body1">
              Calculate the carbon footprint of different types of vehicles,
              from cars to motorcycles.
            </Typography>
          </Stack>
          <Stack sx={{ width: "18rem", textAlign: "center" }} spacing={2}>
            <Typography variant="h5">Flight Emissions</Typography>
            <Typography component="p" variant="body1">
              Estimate the carbon emissions from your flights, whether they're
              domestic or international.
            </Typography>
          </Stack>
          <Stack sx={{ width: "18rem", textAlign: "center" }} spacing={2}>
            <Typography variant="h5">Save your Journeys</Typography>
            <Typography component="p" variant="body1">
              Save your journeys to local storage. A good place to review your
              contribution to a carbon free environment.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
