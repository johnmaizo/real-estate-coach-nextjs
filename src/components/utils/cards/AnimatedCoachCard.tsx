"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Fade } from "@mui/material";
import Image from "next/image";
import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";
import Link from "next/link";

const Coaches = [
  {
    id: 1,
    name: "Sir Ton",
    imageURL: "/SirTon.png",
    link: "/coach/sir-ton",
  },
  {
    id: 2,
    name: "Jessa Jill Turalba",
    imageURL: "/JessaJillTuralba.png",
    link: "/coach/jessa-jill-turalba",
  },
  {
    id: 3,
    name: "Coach 3",
    imageURL: "/Coach3.png",
    link: "/coach/coach-3",
  },
  {
    id: 4,
    name: "Azela Honor",
    imageURL: "/AzelaHonor.png",
    link: "/coach/azela-honor",
  },
  {
    id: 5,
    name: "Boyax",
    imageURL: "/Boyax.png",
    link: "/coach/boyax",
  },
  {
    id: 6,
    name: "Coach 6",
    imageURL: "/Coach6.png",
    link: "/coach/coach-6",
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
      <Box
        sx={{
          width: "450px",
          height: "550px",
          backgroundColor: "white",
          borderRadius: "10px",
          position: "relative",
          zIndex: 12923,
          boxShadow: "20px 20px 0 0px #C5C5C5",
        }}
      >
        <Fade in={fadeIn} timeout={300}>
          <Box>
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
              LinkComponent={Link}
              href={currentCoach.link}
              aria-label={`Go to Coach ${currentCoach.name}'s page`}
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
    </Box>
  );
}
