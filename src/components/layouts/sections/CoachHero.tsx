import Section from "./SectionCoach";
import {motion, AnimatePresence} from "framer-motion";
import {Box, Typography, CircularProgress} from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Coach} from "@/types";
import {useEffect, useState} from "react";

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const loadingVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const CoachHero = ({data}: {data: Coach}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const responsive = {
    desktop: {breakpoint: {max: 3000, min: 1024}, items: 1},
    tablet: {breakpoint: {max: 1024, min: 464}, items: 1},
    mobile: {breakpoint: {max: 464, min: 0}, items: 1},
  };

  // Preload images and track loading progress
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = data.mainPageImageURLs.length;
    const imageElements: HTMLImageElement[] = [];

    // Reset loading state when data changes
    setImagesLoaded(false);
    setLoadingProgress(0);

    const handleImageLoad = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / totalImages) * 100);
      setLoadingProgress(progress);

      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    // Preload all images
    data.mainPageImageURLs.forEach((url) => {
      const img = new Image();
      img.src = url.startsWith("https://") ? url : url;
      img.crossOrigin = "anonymous";
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded to prevent getting stuck
      imageElements.push(img);
    });

    // If there are no images, set as loaded
    if (totalImages === 0) {
      setImagesLoaded(true);
    }

    return () => {
      // Clean up by removing event listeners
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [data.mainPageImageURLs]);

  return (
    <Section sx={{position: "relative"}}>
      {/* Loading Overlay */}
      <AnimatePresence>
        {!imagesLoaded && (
          <Box
            component={motion.div}
            variants={loadingVariants}
            initial="visible"
            animate="visible"
            exit="exit"
            sx={{
              position: "fixed",
              top: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              zIndex: 9999999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CircularProgress size={60} color="primary" />
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "18px",
                fontWeight: 500,
                mt: 2,
                color: "#132D4C",
              }}>
              Loading {loadingProgress}%
            </Typography>
          </Box>
        )}
      </AnimatePresence>

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        sx={{
          position: "relative",
          zIndex: 23424,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: 5,
          }}>
          {data.title && (
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "20px",
                fontWeight: 300,
                color: "#696969",
              }}>
              {data.title}
            </Typography>
          )}

          <Typography
            variant="h1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "100px",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#132D4C",
              lineHeight: "1.1em",
            }}>
            {data.name}
          </Typography>

          <Box sx={{position: "relative", zIndex: 23424, height: "100px"}}>
            <Box
              sx={{
                backgroundColor: "#132D4C",
                p: 3,
                position: "absolute",
                width: "50em",
                zIndex: 23424,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  height: "100%",
                  width: "20px",
                  top: 0,
                  right: 0,
                  backgroundColor: "white",
                },
              }}>
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "white",
                  width: "100%",
                  maxWidth: "40em",
                }}>
                {data.description}
              </Typography>
            </Box>
          </Box>

          {data.mainPageAward && (
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "20px",
                fontWeight: 300,
                color: "#696969",
                position: "relative",
                top: 100,
              }}>
              {data.mainPageAward}
            </Typography>
          )}
        </Box>
        {/* <Box sx={{width: "100%", maxWidth: "720px", height: "100vh"}}> */}
        <Box sx={{width: "100%", maxWidth: "720px", height: "100vh"}}>
          {/* <Box sx={{width: "100%", maxWidth: "520px", height: "100vh"}}> */}
          {/* Image Carousel */}
          {/* <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
            }}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              ssr={true}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              draggable={false}
              showDots={data.mainPageImageURLs.length > 1}
              dotListClass="custom-dot-list-style">
              {data.mainPageImageURLs.map((g, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{
                      height: "100vh",
                      width: "100%",
                      backgroundImage: `url(${
                        g.startsWith("https://") ? `"${g}"` : g
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      aspectRatio: "45/64",
                    }}
                  />
                );
              })}
            </Carousel>
          </Box> */}

          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
            }}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={imagesLoaded} // Only start autoplay when images are loaded
              autoPlaySpeed={5000}
              ssr={true}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              draggable={false}
              showDots={data.mainPageImageURLs.length > 1}
              dotListClass="custom-dot-list-style">
              {data.mainPageImageURLs.map((g, idx) => {
                return (
                  <Box
                    key={idx}
                    component={motion.div}
                    initial={{opacity: 0}}
                    animate={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: {duration: 0.5},
                    }}
                    sx={{
                      height: "100vh",
                      width: "100%",
                      backgroundImage: `url(${
                        g.startsWith("https://") ? `"${g}"` : g
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      aspectRatio: "45/64",
                    }}
                  />
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default CoachHero;
