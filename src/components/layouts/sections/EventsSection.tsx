import Section from "./SectionCoach";
import {motion} from "framer-motion";
import {Box, Typography, Container} from "@mui/material";
import EventsCarousel from "@/components/utils/carousel/EventsCarousel";
import {EventsGalleryData} from "@/data/EventsGalleryData";

// Animation variants
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

const EventsSection = () => {
  return (
    <Section>
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        sx={{position: "relative", zIndex: 23424}}>
        <Container maxWidth="xl">
          <Box sx={{mt: 15}}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Outfit",
                fontSize: "115px",
                fontWeight: 700,
                lineHeight: "120px",
                letterSpacing: "-2%",
                color: "#132D4C",
                textTransform: "uppercase",
              }}>
              Events
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "18px",
                fontWeight: 300,
                color: "#696969",
                my: 3,
              }}>
              Join our expert-led events designed to help real estate
              professionals grow, connect, and succeed. From practical training
              to inspiring talks, each session offers tools and insights you can
              apply right away.
            </Typography>
          </Box>

          <Box sx={{my: 2, mt: 2.5, mb: 10}}>
            <EventsCarousel galleryData={EventsGalleryData} />
          </Box>
        </Container>
      </Box>
    </Section>
  );
};

export default EventsSection;
