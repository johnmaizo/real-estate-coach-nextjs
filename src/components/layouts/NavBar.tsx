"use client";

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SellIcon from "@mui/icons-material/Sell";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PeopleIcon from "@mui/icons-material/People";

import Link from "next/link";

interface NavBarProps {
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = [
  { name: "About", icon: <HomeIcon />, href: "#about" },
  {
    name: "Coaching Programs",
    icon: <ApartmentIcon />,
    href: "#coaching-programs",
  },
  { name: "Coaches", icon: <SellIcon />, href: "#coaches" },
  {
    name: "Industry Insights",
    icon: <DomainAddIcon />,
    href: "#industry-insights",
  },
  { name: "Contact Us", icon: <PeopleIcon />, href: "#contact-us" },
];

export default function NavBar({ window }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        component={Link}
        href="/"
        sx={{ my: 2, display: "inline-block" }}
      >
        realestatecoach.ph
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ name, icon, href }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              component="a"
              href={href}
              sx={{ textAlign: "center" }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#132D4C" }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{ textAlign: "start" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          bgcolor: "transparent",
          boxShadow: 0,
          py: 2,
          position: "absolute",
          top: "0",
          zIndex: "1000",
        }}
      >
        <Toolbar
          sx={{
            flexDirection: isMobile ? "row-reverse" : "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              textDecoration: "none",
              fontSize: "32px",
              color: "#fff",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateX(-200px)",
              transition: "opacity 4s ease, transform 2s ease",
              transitionDelay: show ? "1.5s" : "0s",
            }}
          >
            realestatecoach.ph
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { lg: 1.5, md: 0.5 },
              alignItems: "center",
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateX(200px)",
              transition: "opacity 4s ease, transform 2s ease",
              transitionDelay: show ? "1.5s" : "0s",
            }}
          >
            {navItems.map(({ name, href }) => (
              <Button
                key={name}
                component="a"
                href={href}
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 300,
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "22px",
                  pr: 5,
                  position: "relative",
                  "&:not(:last-child)::before": {
                    content: '"•"',
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: 10,
                  },
                  "&:hover": {
                    textDecoration: "underline",
                    background: "transparent",
                  },
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
