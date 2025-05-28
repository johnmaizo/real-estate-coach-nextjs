import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import Image from "next/image";

const sections = [
  {
    title: "Personalized coaching and mentorship",
    description:
      "One-on-one guidance tailored to your real estate journey—designed to help you grow, close more deals, and succeed with confidence.",
    icon: <PeopleAltOutlinedIcon style={{ fontSize: 70, color: "white" }} />,
    image: "/coach1.jpg",
  },
  {
    title: "Actionable, no-fluff strategies",
    description:
      "Proven tactics that get straight to the point so you can take action and see results fast.",
    icon: <ThumbUpAltOutlinedIcon style={{ fontSize: 70, color: "white" }} />,
    image: "/coach2.jpg",
  },
  {
    title: "Supportive community of like-minded professionals",
    description:
      "Connect, collaborate, and grow with others who share your drive and passion for real estate success.",
    icon: <GroupsOutlinedIcon style={{ fontSize: 70, color: "white" }} />,
    image: "/coach3.jpg",
  },
  {
    title: "Systems for long-term success and confidence in your craft",
    description:
      "Build lasting success with proven systems that boost efficiency and confidence in your real estate business.",
    icon: <VerifiedUserOutlinedIcon style={{ fontSize: 70, color: "white" }} />,
    image: "/coach4.jpg",
  },
  {
    title: "You don’t need more time just a better system. We’re here to help.",
    description:
      "Work smarter, not longer. We’ll help you streamline, focus, and succeed.",
    icon: <RestoreOutlinedIcon style={{ fontSize: 70, color: "white" }} />,
    image: "/coach5.jpg",
  },
];

export default function HomePage() {
  return (
    <Box
      component={"section"}
      id="about"
      style={{ maxWidth: 1160, margin: "auto", padding: "100px 20px" }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Lora",
          fontWeight: "900",
          color: "#132D4C",
        }}
      >
        Why Real Estate Coach?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 7,
          fontWeight: "300",
          fontColor: "#696969",
          fontSize: "22px",
        }}
      >
        We’re more than just trainers—we’re mentors who’ve helped agents move
        from surviving to thriving. Our approach is built on real-world
        experience, data-backed frameworks, and a commitment to agent growth.
      </Typography>

      <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 8 }}>
        We Provide
      </Typography>

      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const borderRadius = isEven ? "1000px 0 0 1000px" : "0 1000px 1000px 0";

        const border = isEven ? "solid 20px #132D4C" : "solid 20px #132D4C";

        return (
          <Box
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 40,
              gap: 20,
              flexDirection: isEven ? "row" : "row-reverse",
            }}
          >
            <Box style={{ flex: "0 0 200px" }}>
              <img
                src={section.image}
                alt={section.title}
                style={{
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
            </Box>
            <Box sx={{ flex: 1, pt: 3.5 }}>
              <Box
                sx={{
                  display: "block",
                  alignItems: "center",
                  mb: 1.5,
                  gap: 10,
                  width: 550,
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#06266b",
                    width: 100,
                    height: 100,
                    mb: 2.5,
                  }}
                >
                  {section.icon}
                </Avatar>
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontWeight: "700",
                    fontSize: "35px",
                    lineHeight: "40px",
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "20px", color: "#696969" }}
              >
                {section.description}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
