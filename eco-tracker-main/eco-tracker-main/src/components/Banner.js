import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Banner = ({ title, subTitle }) => {
  return (
    <Paper elevation={3}>
      <Stack
        alignContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          py: 6,
          backgroundImage: "url('/images/bgImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography component="h1" variant="h2" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Typography component="h2" variant="h5">
          {subTitle}
        </Typography>
      </Stack>
    </Paper>
  );
};
