"use client";

import React from "react";
import {Box, Typography, Avatar} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

type Section = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

interface SectionItemProps {
  section: Section;
  index: number;
}

const sections = [
  {
    title: "Personalized coaching and mentorship",
    description:
      "One-on-one guidance tailored to your real estate journey—designed to help you grow, close more deals, and succeed with confidence.",
    icon: <PeopleAltOutlinedIcon style={{fontSize: 70, color: "white"}} />,
    image: "/coach1.jpg",
  },
  {
    title: "Actionable, no-fluff strategies",
    description:
      "Proven tactics that get straight to the point so you can take action and see results fast.",
    icon: <ThumbUpAltOutlinedIcon style={{fontSize: 70, color: "white"}} />,
    image: "/coach2.jpg",
  },
  {
    title: "Supportive community of like-minded professionals",
    description:
      "Connect, collaborate, and grow with others who share your drive and passion for real estate success.",
    icon: <GroupsOutlinedIcon style={{fontSize: 70, color: "white"}} />,
    image: "/coach3.jpg",
  },
  {
    title: "Systems for long-term success and confidence in your craft",
    description:
      "Build lasting success with proven systems that boost efficiency and confidence in your real estate business.",
    icon: <VerifiedUserOutlinedIcon style={{fontSize: 70, color: "white"}} />,
    image: "/coach4.jpg",
  },
  {
    title: "You don’t need more time just a better system. We’re here to help.",
    description:
      "Work smarter, not longer. We’ll help you streamline, focus, and succeed.",
    icon: <RestoreOutlinedIcon style={{fontSize: 70, color: "white"}} />,
    image: "/coach5.jpg",
  },
];

// Professional animation variants - subtle and elegant
const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15,
    },
  },
};

const imageVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const contentVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const textVariants = {
  hidden: {opacity: 0, y: 10},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const SectionItem: React.FC<SectionItemProps> = ({section, index}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-120px"});

  const isEven = index % 2 === 0;
  const borderRadius = isEven ? "1000px 0 0 1000px" : "0 1000px 1000px 0";
  const border = "solid 20px #132D4C";

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{marginBottom: 40}}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexDirection: isEven ? "row" : "row-reverse",
        }}>
        {/* Image Section */}
        <motion.div
          style={{flex: "0 0 200px"}}
          variants={imageVariants}
          custom={isEven}>
          <motion.div
            style={{
              position: "relative",
              filter: "drop-shadow(0 10px 25px rgba(19, 45, 76, 0.1))",
            }}>
            <Box
              component="img"
              src={section.image}
              alt={section.title}
              draggable={false}
              sx={{
                width: 560,
                height: 400,
                objectFit: "cover",
                borderRadius: borderRadius,
                border: border,
                borderRightStyle: isEven ? "none" : "solid",
                borderLeftStyle: isEven ? "solid" : "none",
                padding: isEven ? "10px 0px 10px 10px" : "10px 10px 10px 0px",
                margin: "0 0 -66px",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          custom={isEven}
          style={{flex: 1, paddingTop: 14}}>
          <Box
            sx={{
              display: "block",
              alignItems: "center",
              mb: 1.5,
              gap: 10,
              width: 550,
            }}>
            {/* Professional Avatar Animation */}
            <motion.div variants={iconVariants}>
              <Avatar
                sx={{
                  backgroundColor: "#06266b",
                  width: 100,
                  height: 100,
                  mb: 2.5,
                  boxShadow: "0 8px 24px rgba(19, 45, 76, 0.15)",
                }}>
                {section.icon}
              </Avatar>
            </motion.div>

            {/* Professional Title Animation */}
            <motion.div variants={textVariants}>
              <Typography
                sx={{
                  fontFamily: "Outfit, system-ui, sans-serif",
                  fontWeight: "900",
                  fontSize: "35px",
                  lineHeight: "40px",
                  color: "#132D4C",
                }}>
                {section.title}
              </Typography>
            </motion.div>
          </Box>

          {/* Professional Description Animation */}
          <motion.div variants={textVariants}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                color: "#696969",
                lineHeight: 1.6,
              }}>
              {section.description}
            </Typography>
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default function HomePage() {
  const headerRef = useRef(null);
  const subtitleRef = useRef(null);
  const providesRef = useRef(null);

  const headerInView = useInView(headerRef, {once: true, margin: "-80px"});
  const subtitleInView = useInView(subtitleRef, {once: true, margin: "-60px"});
  const providesInView = useInView(providesRef, {once: true, margin: "-60px"});

  return (
    <Box
      component="section"
      id="about"
      style={{maxWidth: 1160, margin: "auto", padding: "100px 20px"}}>
      {/* Professional Header Animation */}
      <motion.div
        ref={headerRef}
        initial={{opacity: 0, y: 20}}
        animate={headerInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: "Lora",
            fontWeight: "900",
            color: "#132D4C",
          }}>
          Why Real Estate Coach?
        </Typography>
      </motion.div>

      {/* Professional Subtitle Animation */}
      <motion.div
        ref={subtitleRef}
        initial={{opacity: 0, y: 15}}
        animate={subtitleInView ? {opacity: 1, y: 0} : {opacity: 0, y: 15}}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 7,
            fontWeight: "300",
            fontColor: "#696969",
            fontSize: "22px",
          }}>
          We’re more than just trainers—we’re mentors who’ve helped agents move
          from surviving to thriving. Our approach is built on real-world
          experience, data-backed frameworks, and a commitment to agent growth.
        </Typography>
      </motion.div>

      {/* Professional Section Title */}
      <motion.div
        ref={providesRef}
        initial={{opacity: 0, y: 15}}
        animate={providesInView ? {opacity: 1, y: 0} : {opacity: 0, y: 15}}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}>
        <Typography variant="h3" align="center" fontWeight="bold" sx={{mb: 8}}>
          We Provide
        </Typography>
      </motion.div>

      {/* Professional Section Items */}
      {sections.map((section, index) => (
        <SectionItem key={index} section={section} index={index} />
      ))}
    </Box>
  );
}
