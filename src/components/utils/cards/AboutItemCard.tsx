import {SectionItemProps} from "@/components/layouts/sections/About";
import {Box, useMediaQuery, useTheme, Avatar, Typography} from "@mui/material";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

// Animation Variants (unchanged)
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
  hidden: (isEven: boolean) => ({opacity: 0, x: isEven ? -100 : 100}),
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};
const contentVariants = {
  hidden: (isEven: boolean) => ({opacity: 0, x: isEven ? 100 : -100}),
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
    transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};
const textVariants = {
  hidden: {opacity: 0, y: 10},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};

export default function AboutItemCard({section, index}: SectionItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-120px"});
  const isEven = index % 2 === 0;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const borderRadius = isEven ? "1000px 0 0 1000px" : "0 1000px 1000px 0";
  const border = "solid 20px #132D4C";

  return (
    <Box
      component={motion.div}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{marginBottom: 40}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
          alignItems: "center",
          gap: 2,
        }}>
        {/* Mobile: image first, no border/radius */}
        <Box
          component={motion.div}
          variants={imageVariants}
          custom={isEven}
          sx={{
            width: isMobile ? "100%" : "auto",
            flex: isMobile ? "auto" : "0 0 auto",
          }}>
          <Box
            component="img"
            src={section.image}
            alt={section.title}
            draggable={false}
            // sx={{
            //   width: "100%",
            //   height: isMobile ? 200 : 400,
            //   objectFit: "cover",
            //   border: isMobile ? "none" : `solid 20px #132D4C`,
            //   borderRadius: isMobile
            //     ? 0
            //     : isEven
            //     ? "1000px 0 0 1000px"
            //     : "0 1000px 1000px 0",
            //   borderRightStyle: isMobile ? "none" : isEven ? "none" : "solid",
            //   borderLeftStyle: isMobile ? "none" : isEven ? "solid" : "none",
            //   margin: isMobile ? 0 : "0 0 -66px",
            // }}
            sx={{
              width: isMobile ? "100%" : 560,
              height: isMobile ? 200 : 400,
              objectFit: "cover",
              borderRadius: isMobile ? "none" : borderRadius,
              border: isMobile ? "none" : border,
              borderRightStyle: isMobile ? "none" : isEven ? "none" : "solid",
              borderLeftStyle: isMobile ? "none" : isEven ? "solid" : "none",
              padding: isMobile
                ? "none"
                : isEven
                ? "10px 0px 10px 10px"
                : "10px 10px 10px 0px",
              margin: "0 0 -66px",
            }}
          />
        </Box>

        {/* Mobile: content below image */}
        <Box
          component={motion.div}
          variants={contentVariants}
          custom={isEven}
          sx={{flex: 1, pt: isMobile ? 2 : 1}}>
          <motion.div variants={iconVariants}>
            <Avatar
              sx={{
                bgcolor: "#06266b",
                width: isMobile ? 60 : 100,
                height: isMobile ? 60 : 100,
                mb: 2.5,

                boxShadow: "0 8px 24px rgba(19, 45, 76, 0.15)",
              }}>
              {section.icon}
            </Avatar>
          </motion.div>
          <Box component={motion.div} variants={textVariants}>
            <Typography
              sx={{
                fontFamily: "Outfit, system-ui, sans-serif",
                fontWeight: 900,
                fontSize: isMobile ? "24px" : "35px",
                lineHeight: "40px",
                color: "#132D4C",
              }}
              gutterBottom>
              {section.title}
            </Typography>
          </Box>
          <Box component={motion.div} variants={textVariants}>
            <Typography
              variant="body2"
              sx={{
                fontSize: isMobile ? "16px" : "20px",
                color: "#696969",
                lineHeight: 1.6,
              }}>
              {section.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
