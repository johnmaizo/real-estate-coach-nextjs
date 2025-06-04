"use client";

import React from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import CoachCard from "../cards/CoachCard";

interface SocialMedia {
  name: string;
  link: string;
}

interface Coach {
  id: number;
  name: string;
  description: string;
  socialMedias: SocialMedia[];
  imageUrl: string;
}

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CoachesCarousel = ({ CoachesData }: { CoachesData: Coach[] }) => (
  <Box sx={{ width: "100%" }}>
    <Carousel
      responsive={responsive}
      infinite
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows
      swipeable
      draggable
      ssr={false}
    >
      {CoachesData.map((coach) => (
        <CoachCard key={coach.id} coach={coach} />
      ))}
    </Carousel>

    <style jsx global>{`
      .custom-dot-list-style {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding: 0;
        list-style: none;
      }
      .custom-dot-list-style li {
        margin: 0 5px;
        position: relative;
      }
      .custom-dot-list-style li button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        background: #bbb;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .custom-dot-list-style li.react-multi-carousel-dot--active button {
        background: #1976d2;
        transform: scale(1.2);
      }
      .carousel-item-padding-40-px {
        padding: 0 10px;
      }
      @media (max-width: 768px) {
        .carousel-container {
          padding: 0 40px;
        }
      }
    `}</style>
  </Box>
);

export default CoachesCarousel;
