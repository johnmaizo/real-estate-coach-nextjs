"use client";

import React, {useState, useEffect} from "react";
import {Box, Button, Fade} from "@mui/material";
import Image from "next/image";
import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";
import Link from "next/link";

const Coaches = [
  {
    id: 1,
    name: "Anthony Leuterio",
    imageURL: "/SirTon.png",
    link: "/coach/anthony_leuterio",
  },
  {
    id: 2,
    name: "Gilbert Monecillo ",
    imageURL: "/Gilbert_Monecillo.png",
    link: "/coach/gilbert_monecillo",
  },
  {
    id: 3,
    name: "Azela Honor",
    imageURL: "/Azela_Honor.png",
    link: "/coach/azela_honor",
  },
  {
    id: 4,
    name: "George Ryan",
    imageURL: "/George_Ryan.png",
    link: "/coach/george_ryan",
  },
  {
    id: 5,
    name: "Marita Gracia Bombeo Fancubit",
    imageURL: "/Marita_Gracia.png",
    link: "/coach/marita_gracia",
  },
  {
    id: 6,
    name: "Chris Malazarte ",
    imageURL: "/Chris_Malazarte.png",
    link: "/coach/chris_malazarte",
  },
  {
    id: 7,
    name: "Angie Kay Godornes",
    imageURL: "/Angie_Kay_Godornes.png",
    link: "/coach/angie_kay_godornes",
  },
  {
    id: 8,
    name: "Ada Mae Roiles ",
    imageURL: "/Ada_Mae_Roiles.png",
    link: "/coach/ada_mae_roiles",
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
      }}>
      {/* Main Card */}
      <Box
        sx={{
          width: {sm: "auto", md: "450px"},
          height: "550px",
          backgroundColor: "white",
          borderRadius: "10px",
          position: "relative",
          zIndex: 12923,
          boxShadow: {sm: "0", md: "20px 20px 0 0px #C5C5C5"},
        }}>
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
                height: "680px",
                transform: "translateX(-50%)",
              }}
            />
            <Button
              variant="contained"
              LinkComponent={Link}
              href={currentCoach.link}
              aria-label={`Go to Coach ${currentCoach.name}'s page`}
              sx={{
                width: {xs: "200px", sm: "auto"},
                fontFamily: "Outfit",
                textTransform: "none",
                fontSize: "22px",
                color: "white",
                backgroundColor: "#132D4C",
                borderRadius: "50px",
                display: "inline-flex",
                gap: 3,
                alignItems: "center",
                padding: "5px 10px 5px 20px",
                border: "2px solid white",
                position: "absolute",
                bottom: -30,
                left: "50%",
                transform: "translateX(-50%)",
                "&:hover": {
                  background: "white",
                  color: "#132D4C",
                  borderColor: "#132D4C",
                },
              }}>
              Hire Me <Image src={Icon} alt="" aria-hidden draggable={false} />
            </Button>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
