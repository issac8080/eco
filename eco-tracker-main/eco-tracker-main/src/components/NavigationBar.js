import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import logo from "../images/logo.png";
import { Avatar } from "@mui/material";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#008c00" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="Logo" src={logo} />
          <Drawer anchor="top" open={isOpen} onClose={handleCloseDrawer}>
            <List sx={{ backgroundColor: "rgba(0, 140, 0, 0.8)" }}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseDrawer();
                    navigate("/");
                  }}
                >
                  <ListItemText
                    sx={{ color: "#ffffff" }}
                    primary={
                      <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                        HOME
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseDrawer();
                    navigate("/footprint");
                  }}
                >
                  <ListItemText
                    sx={{ color: "#ffffff" }}
                    primary={
                      <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                        FOOTPRINT
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleCloseDrawer();
                    navigate("/my-journeys");
                  }}
                >
                  <ListItemText
                    sx={{ color: "#ffffff" }}
                    primary={
                      <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                        MY JOURNEYS
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton size="large" onClick={handleOpenDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  navigate("/");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                  Home
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  navigate("/footprint");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                  Footprint
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  navigate("/my-journeys");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                  My Journeys
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
