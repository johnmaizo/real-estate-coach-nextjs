"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Icon from "@/assets/svg/GetStartedNowIcon.svg";
import Link from "next/link";
import AnimatedContent from "@/app/ReactBits/AnimatedContent/AnimatedContent";
import { borderRadius, fontSize, textAlign } from "@mui/system";

const Coaches = [
  {
    id: 1,
    name: "Anthony Gerard Leuterio",
    description:
      "Anthony Orias Leuterio, has transformed the Philippine real estate industry with his innovative marketing strategies and a nationwide network of over 100 offices.",
    description_2: "PRC & DSHUD Registered Broker",
    description_3: "2024 International REALTOR® of the Year",
    award: "/ton_award.png",
    imageURL: "/SirTon.png",
    link: "/coach/Anthony_Leuterio",
  },
  {
    id: 2,
    name: "Gilbert Monecillo ",
    description:
      "Gilbert Monecillo is a PRC and DSHUD-registered Real Estate Broker and Team Leader at Filipino Homes. He is known for his leadership and commitment to excellent client service.",
    description_2: "PRC & DSHUD Registered Broker",
    description_3: "TEAM LEADER - Davao",
    award: "/gilbert_award.png",
    imageURL: "/Gilbert_Monecillo.png",
    link: "/coach/Gilbert_Monecillo",
  },
  {
    id: 3,
    name: "Azela Honor",
    description:
      "Azela Honor is a PRC and DSHUD-registered Real Estate Broker and Team Leader at Filipino Homes, known for her dedication, industry knowledge, and client-focused approach.",
    description_2: "PRC & DSHUD Registered Broker",
    description_3: "TEAM LEADER - Cebu",
    imageURL: "/Azela_Honor.png",
    link: "/coach/Azela_Honor",
  },
  {
    id: 4,
    name: "George Ryan",
    description:
      "George Ryan is a PRC and DSHUD-registered Real Estate Broker and Team Leader at Filipino Homes, known for his professionalism and client-focused service.",
    description_2: "PRC & DSHUD Registered Broker",
    description_3: "TEAM LEADER - Cebu",
    imageURL: "/George_Ryan.png",
    link: "/coach/George_Ryan",
  },
  {
    id: 5,
    name: "Marita Gracia Fancubit",
    description:
      "Marita Gracia Fancubit is a PRC and DSHUD-registered Real Estate Broker and Team Leader at Filipino Homes, dedicated to helping clients find the right property.",
    description_2: "PRC & DSHUD",
    description_3: "UNIT MANAGER - CDO",
    imageURL: "/Marita_Gracia.png",
    link: "/coach/Marita_Gracia",
  },
  {
    id: 6,
    name: "Chris Malazarte ",
    description:
      "Chris Malazarte is a PRC and DSHUD-registered Real Estate Broker and Team Leader at Filipino Homes, committed to delivering excellent service to clients.",
    description_2: "PRC & DSHUD",
    description_3: "TEAM LEADER - Cebu",
    imageURL: "/Chris_Malazarte.png",
    link: "/coach/Chris_Malazarte",
  },
  {
    id: 7,
    name: "Angie Godornes",
    description:
      "Angie Kay Godornes is a PRC and DSHUD-registered Real Estate Broker and Team Leader at Filipino Homes, specializing in residential and commercial properties.",
    description_2: "PRC & DSHUD",
    description_3: "UNIT MANAGER - Cebu",
    imageURL: "/Angie_Kay_Godornes.png",
    link: "/coach/Angie_Kay_Godornes",
  },
  {
    id: 8,
    name: "Ada Mae Roiles ",
    description:
      "Ada Mae Roiles is a PRC and DSHUD-registered Real Estate Broker. She is committed to helping clients with their real estate needs.",
    description_2: "PRC & DSHUD",
    description_3: "TEAM LEADER - Cebu",
    imageURL: "/Ada_Mae_Roiles.png",
    link: "/coach/Ada_Mae_Roiles",
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
      }, 900);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const currentCoach = Coaches[currentIndex];

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          minHeight: "800px",
          borderRadius: "10px",
          maxWidth: "100%",
          display: "block",
        }}
      >
        <Fade in={fadeIn} timeout={0}>
          <Box
            sx={{
              maxWidth: "100%",
              display: "block",
              transition: "opacity 0.5s ease, transform 4s ease",
              transitionDelay: show ? "1.5s" : "0s",
            }}
          >
            <AnimatedContent
              key={currentCoach.id}
              distance={150}
              direction="vertical"
              reverse={false}
              duration={2.5}
              ease="power3.out"
              initialOpacity={1}
              animateOpacity
              scale={1.5}
              threshold={0}
              delay={0}
            >
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
                  height: "780px",
                  width: "460px",
                  display: "block",
                  margin: "0 auto",
                  position: "relative",
                  left: "0",
                  right: "0",
                  bottom: "-20px",
                  zIndex: "10",
                }}
              />
            </AnimatedContent>

            <Box
              sx={{
                position: "absolute",
                bottom: "0px",
                width: "1000px",
                mb: "30px",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  bottom: "10px",
                  left: "0",
                  width: "1210px",
                  height: "190px",
                  borderTop: "solid 1px #fff",
                  borderRight: "solid 1px #fff",
                  borderRadius: "0 20px 0 0",
                  zIndex: "-1",
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateX(-80px)",
                  transition: "opacity 0.5s ease, transform 4s ease",
                  transitionDelay: show ? "1.5s" : "0s",
                },
                "&:before": {
                  content: "''",
                  position: "absolute",
                  bottom: "10px",
                  right: "-520px",
                  width: "300px",
                  height: "190px",
                  borderTop: "solid 1px #fff",
                  borderLeft: "solid 1px #fff",
                  borderRadius: "20px 0 0 0",
                  zIndex: "2",
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateX(80px)",
                  transition: "opacity 0.5s ease, transform 4s ease",
                  transitionDelay: show ? "1.5s" : "0s",
                },
              }}
            >
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                duration={2.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.1}
                threshold={0.4}
                delay={1.5}
              >
                <Typography
                  sx={{
                    fontSize: "120px",
                    fontWeight: "900",
                    lineHeight: "120px",
                    position: "relative",
                    zIndex: "10",
                  }}
                >
                  {currentCoach.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "23px",
                    fontWeight: "300",
                    width: "650px",
                    my: "30px",
                    position: "relative",
                    zIndex: "10",
                    opacity: show ? 1 : 0,
                    transform: show ? "translateY(0)" : "translateY(80px)",
                    transition: "opacity 0.5s ease, transform 4s ease",
                    transitionDelay: show ? "1.5s" : "0s",
                  }}
                >
                  {currentCoach.description}
                </Typography>
                <Button
                  variant="contained"
                  LinkComponent={Link}
                  href={currentCoach.link}
                  aria-label={`Go to Coach ${currentCoach.name}'s page`}
                  sx={{
                    width: { xs: "200px", sm: "auto" },
                    fontFamily: "Outfit",
                    textTransform: "none",
                    fontSize: "22px",
                    color: "#132D4C",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    display: "inline-flex",
                    gap: 3,
                    alignItems: "center",
                    padding: "5px 10px 5px 20px",
                    border: "2px solid white",
                    position: "relative",
                    opacity: show ? 1 : 0,
                    transform: show ? "translateY(0)" : "translateY(80px)",
                    transition: "opacity 0.5s ease, transform 4s ease",
                    transitionDelay: show ? "1.5s" : "0s",
                    "&:hover": {
                      background: "white",
                      color: "#132D4C",
                      borderColor: "#132D4C",
                    },
                  }}
                >
                  Hire Me{" "}
                  <Image src={Icon} alt="" aria-hidden draggable={false} />
                </Button>
              </AnimatedContent>
            </Box>

            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "300",
                width: "200px",
                my: "30px",
                position: "absolute",
                zIndex: "10",
                right: "295px",
                bottom: "75px",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(80px)",
                transition: "opacity 0.5s ease, transform 4s ease",
                transitionDelay: show ? "1.5s" : "0s",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  bottom: "80px",
                  right: "0",
                  width: "25px",
                  height: "25px",
                  border: "solid 7px #fff",
                  background: "#22303F",
                  borderRadius: "50px",
                  zIndex: "2",
                },
              }}
            >
              {currentCoach.description_2}
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "300",
                width: "255px",
                my: "30px",
                position: "absolute",
                zIndex: "10",
                right: "0",
                bottom: "75px",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateY(80px)",
                transition: "opacity 0.5s ease, transform 4s ease",
                transitionDelay: show ? "1.5s" : "0s",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  bottom: "80px",
                  right: "-10px",
                  width: "25px",
                  height: "25px",
                  border: "solid 7px #fff",
                  background: "#22303F",
                  borderRadius: "50px",
                  zIndex: "2",
                },
              }}
            >
              {currentCoach.description_3}
            </Typography>
            <Button
              sx={{
                position: "absolute",
                bottom: "250px",
                right: "-24px",
                width: "340px",
                height: "150px",
                background: "#fff",
                borderRadius: "20px",
                textAlign: "right",
                color: "#000",
                opacity: show ? 1 : 0,
                transform: show ? "translateY(0)" : "translateX(80px)",
                transition: "opacity 0.5s ease, transform 4s ease",
                transitionDelay: show ? "1.5s" : "0s",
                "&:hover": {
                  background: "#3E6580",
                  color: "#fff",
                },
              }}
            >
              <Box
                component="img"
                src={currentCoach.award}
                draggable={false}
                sx={{
                  width: "180px",
                  height: "130px",
                  position: "absolute",
                  left: "10px",
                  borderRadius: "15px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeight: "24px",
                  fontWeight: "500",

                  position: "absolute",
                  top: "25px",
                  right: "35px",
                  textAlign: "left",
                }}
              >
                View <br />
                Awards
                <br />
                <Image
                  src={Icon}
                  alt=""
                  aria-hidden
                  draggable={false}
                  style={{ marginTop: "15px" }}
                />
              </Typography>
            </Button>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
