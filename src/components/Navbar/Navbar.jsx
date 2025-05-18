import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import SecurityIcon from "@mui/icons-material/Security";

const navLinks = ["Home",  "Services","Recruitment & Training", "Contact"];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavClick = (link) => {
    // Convert link text to route path
    const path = link.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    navigate(`/${path}`);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          backgroundColor: "var(--color-primary)",
          borderBottom: "1px solid var(--color-border)",
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo + Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SecurityIcon sx={{ color: "var(--color-accent)" }} />
            <Typography
              variant="h6"
              sx={{
                color: "var(--color-text-primary)",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              SecureWeb
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link}
                  onClick={() => handleNavClick(link)}
                  sx={{
                    color: "var(--color-text-secondary)",
                    cursor: "pointer",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    transition: "0.3s",
                    "&:hover": {
                      color: "var(--color-accent)",
                    },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "var(--color-text-primary)" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "var(--color-primary)",
            height: "100%",
            paddingTop: 4,
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={text}
                    onClick={() => handleNavClick(text)}
                    primaryTypographyProps={{
                      sx: {
                        color: "var(--color-text-primary)",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        "&:hover": {
                          color: "var(--color-accent)",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
