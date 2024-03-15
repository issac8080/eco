import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoute";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export const App = () => {
  return (
    <BrowserRouter>
      <Stack spacing={3}>
        <NavigationBar />
        <Box>
          <Container>
            <AppRoutes />
          </Container>
        </Box>
      </Stack>
    </BrowserRouter>
  );
};
