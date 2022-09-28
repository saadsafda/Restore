import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Header({ darkMode, handleChange }) {
  const midLinks = [
    { title: "Catalog", path: "/catalog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const rightLinks = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
  ];

  const navStyles = {
    color: "inherit",
    typography: "h6",
    textDecoration: "none",
    "&:hover": {
      color: "secondary.main",
    },
    "&:active": {
      color: "text.secondary",
    },
  };

  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            LOGO
          </Typography>
          <Switch checked={darkMode} onChange={() => handleChange()} />
        </Box>
        <List sx={{ display: "flex" }}>
          {midLinks.map((e, i) => {
            return (
              <ListItem key={i} component={NavLink} to={e.path} sx={navStyles}>
                {e.title.toUpperCase()}
              </ListItem>
            );
          })}
        </List>
        <Box display="flex" alignItems="center">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map((e, i) => {
              return (
                <ListItem
                  key={i}
                  component={NavLink}
                  to={e.path}
                  sx={navStyles}
                >
                  {e.title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
