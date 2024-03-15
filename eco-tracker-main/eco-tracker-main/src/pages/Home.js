import { Stack } from "@mui/material";

import { Features } from "../components/Features";
import { AboutUs } from "../components/AboutUs";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <Stack spacing={3}>
      <Banner title="Eco Footprint!" subTitle="Saving our planet together" />
      <Features />
      <AboutUs />
    </Stack>
  );
};
