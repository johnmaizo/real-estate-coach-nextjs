"use client";

import React, {useState} from "react";
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
import Image from "next/image";
import Logo from "../../assets/RealEstateCoachLogo.png";

import Link from "next/link";

interface NavBarProps {
  window?: () => Window;
}
const drawerWidth = 240;
const navItems = [
  {name: "About", icon: <HomeIcon />, href: "#about"},
  {
    name: "Coaching Programs",
    icon: <ApartmentIcon />,
    href: "#coaching-programs",
  },
  {name: "Coaches", icon: <SellIcon />, href: "#coaches"},
  {
    name: "Industry Insights",
    icon: <DomainAddIcon />,
    href: "#industry-insights",
  },
  {name: "Contact Us", icon: <PeopleIcon />, href: "#contact-us"},
];

export default function NavBar({window}: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
      <Typography
        variant="h6"
        component={Link}
        href="/"
        sx={{my: 2, display: "inline-block"}}>
        <Image src={Logo} width={160.51} height={59} alt="Logo" />
      </Typography>
      <Divider />
      <List>
        {navItems.map(({name, icon, href}) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              component="a"
              href={href}
              sx={{textAlign: "center"}}>
              <ListItemIcon sx={{minWidth: 40, color: "#132D4C"}}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{textAlign: "start"}} />
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
        sx={{bgcolor: "white", boxShadow: 1, py: 0}}>
        <Toolbar
          sx={{
            flexDirection: isMobile ? "row-reverse" : "row",
            justifyContent: "space-between",
          }}>
          <Typography variant="h6" component={Link} href="/" sx={{my: 2}}>
            <Image src={Logo} width={160} height={59.5} alt="Logo" />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {md: "none"}, color: "#333"}}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {xs: "none", md: "flex"},
              gap: {lg: 1.5, md: 0.5},
              alignItems: "center",
            }}>
            {navItems.map(({name, href}) => (
              <Button
                key={name}
                component="a"
                href={href}
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  color: "#333",
                  textTransform: "none",
                  fontSize: "16px",
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
                    backgroundColor: "rgba(228, 44, 37, 0.04)",
                  },
                }}>
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
        ModalProps={{keepMounted: true}}
        sx={{
          display: {xs: "block", md: "none"},
          "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
        }}>
        {drawer}
      </Drawer>
    </>
  );
}
