"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Fade } from "@mui/material";
import Image from "next/image";
import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";

interface Coach {
  id: number;
  name: string;
  imageURL: string;
  link: string;
}

const Coaches = [
  {
    id: 1,
    name: "Sir Ton",
    imageURL: "/SirTon.png",
    link: "#",
  },
  {
    id: 2,
    name: "Jessa Jill Turalba",
    imageURL: "/JessaJillTuralba.png",
    link: "#",
  },
  {
    id: 3,
    name: "Coach 3",
    imageURL: "/Coach3.png",
    link: "#",
  },
  {
    id: 4,
    name: "Azela Honor",
    imageURL: "/AzelaHonor.png",
    link: "#",
  },
  {
    id: 5,
    name: "Boyax",
    imageURL: "/Boyax.png",
    link: "#",
  },
  {
    id: 6,
    name: "Coach 6",
    imageURL: "/Coach6.png",
    link: "#",
  },
];

export default function AnimatedCoachCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Coaches.length);
        setFadeIn(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCoach = Coaches[currentIndex];

  return (
    <Box
      sx={{
        py: 20,
      }}
    >
      {/* Main Card */}
      <Fade in={fadeIn} timeout={300}>
        <Box
          sx={{
            width: "450px",
            height: "550px",
            backgroundColor: "white",
            borderRadius: "10px",
            position: "relative",
            zIndex: 12923,
            "&::before": {
              content: '""',
              width: "450px",
              height: "550px",
              backgroundColor: "#C5C5C5",
              borderRadius: "10px",
              position: "absolute",
              zIndex: -121,
              bottom: -20,
              left: 20,
            },
          }}
        >
          {/* Coach Image */}
          <Box
            component="img"
            src={currentCoach.imageURL}
            alt={currentCoach.name}
            draggable={false}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://dummyimage.com/300x400/eeefff&text=${encodeURIComponent(
                currentCoach.name
              )}`;
            }}
            sx={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <Button
            variant="contained"
            sx={{
              fontFamily: "Outfit",
              textTransform: "none",
              fontSize: "22px",
              color: "white",
              backgroundColor: "#132D4C",
              borderRadius: "50px",
              display: "inline-flex",
              gap: 3,
              alignItems: "center",
              padding: "5px 20px",
              border: "2px solid white",
              position: "absolute",
              bottom: -30,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Hire Me <Image src={Icon} alt="" aria-hidden draggable={false} />
          </Button>
        </Box>
      </Fade>
    </Box>
  );
}
