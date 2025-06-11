import Section from "./SectionCoach";
import {motion} from "framer-motion";
import {Box, Typography, Container} from "@mui/material";

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

const SpecialProgramSection = () => {
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
              Special Program
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "20px",
                fontWeight: 300,
                color: "#696969",
              }}>
              Take your real estate career to the next level with focused,
              high-impact coaching. Our exclusive programs offer advanced
              training in leadership, branding, and business growth—designed for
              professionals ready to scale.
            </Typography>
          </Box>

          <Box></Box>
        </Container>
      </Box>
    </Section>
  );
};

export default SpecialProgramSection;
