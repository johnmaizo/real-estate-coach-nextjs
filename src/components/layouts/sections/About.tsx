"use client";

import React, { useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import { motion, useInView } from "framer-motion";
import AboutItemCard from "@/components/utils/cards/AboutItemCard";

const sections = [
  {
    title: "Personalized coaching and mentorship",
    description:
      "One-on-one guidance tailored to your real estate journey—designed to help you grow, close more deals, and succeed with confidence.",
    icon: (
      <PeopleAltOutlinedIcon
        sx={{ fontSize: { xs: 30, md: 70 }, color: "white" }}
      />
    ),
    image: "/coach1.jpg",
  },
  {
    title: "Actionable, no-fluff strategies",
    description:
      "Proven tactics that get straight to the point so you can take action and see results fast.",
    icon: (
      <ThumbUpAltOutlinedIcon
        sx={{ fontSize: { xs: 30, md: 70 }, color: "white" }}
      />
    ),
    image: "/coach2.jpg",
  },
  {
    title: "Supportive community of like-minded professionals",
    description:
      "Connect, collaborate, and grow with others who share your drive and passion for real estate success.",
    icon: (
      <GroupsOutlinedIcon
        sx={{ fontSize: { xs: 30, md: 70 }, color: "white" }}
      />
    ),
    image: "/coach3.jpg",
  },
  {
    title: "Systems for long-term success and confidence in your craft",
    description:
      "Build lasting success with proven systems that boost efficiency and confidence in your real estate business.",
    icon: (
      <VerifiedUserOutlinedIcon
        sx={{ fontSize: { xs: 30, md: 70 }, color: "white" }}
      />
    ),
    image: "/coach4.jpg",
  },
  {
    title: "You don’t need more time just a better system. We’re here to help.",
    description:
      "Work smarter, not longer. We’ll help you streamline, focus, and succeed.",
    icon: (
      <RestoreOutlinedIcon
        sx={{ fontSize: { xs: 30, md: 70 }, color: "white" }}
      />
    ),
    image: "/coach5.jpg",
  },
];

interface Section {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface SectionItemProps {
  section: Section;
  index: number;
}

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const providesRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const subtitleInView = useInView(subtitleRef, {
    once: true,
    margin: "-60px",
  });
  const providesInView = useInView(providesRef, {
    once: true,
    margin: "-60px",
  });

  return (
    <Box
      component="section"
      id="about"
      sx={{
        maxWidth: 1160,
        mx: "auto",
        p: { xs: "50px 10px", sm: "100px 20px", overflow: "hidden" },
      }}
    >
      <Box
        component={motion.div}
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          align="center"
          gutterBottom
          sx={{ fontFamily: "Lora", fontWeight: 900, color: "#132D4C" }}
        >
          Why Real Estate Coach?
        </Typography>
      </Box>
      <Box
        component={motion.div}
        ref={subtitleRef}
        initial={{ opacity: 0, y: 15 }}
        animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
      >
        <Typography
          align="center"
          sx={{
            mb: 4,
            fontWeight: 300,
            fontSize: { xs: "16px", sm: "20px", md: "22px" },
            color: "#696969",
          }}
        >
          We’re more than just trainers—we’re mentors who’ve helped agents move
          from surviving to thriving. Our approach is built on real-world
          experience, data-backed frameworks, and a commitment to agent growth.
        </Typography>
      </Box>
      <motion.div
        ref={providesRef}
        initial={{ opacity: 0, y: 15 }}
        animate={providesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Typography
          variant={isMobile ? "h5" : "h3"}
          align="center"
          sx={{ mb: 5, fontWeight: "bold" }}
        >
          We Provide
        </Typography>
      </motion.div>
      {sections.map((section, index) => (
        <AboutItemCard key={index} section={section} index={index} />
      ))}
    </Box>
  );
}
