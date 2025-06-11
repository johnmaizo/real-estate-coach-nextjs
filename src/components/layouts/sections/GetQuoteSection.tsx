import Section from "./SectionCoach";
import {motion} from "framer-motion";
import {Box, Typography, Container} from "@mui/material";
import QuoteRequestForm from "@/components/utils/forms/QuoteRequestForm";

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

const GetQuoteSection = () => {
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
              }}>
              Get a Quote
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Outfit",
                fontSize: "30px",
                lineHeight: "35px",
                letterSpacing: "-2%",
                color: "#132D4C",
                my: 2,
              }}>
              Let’s Build Your Real Estate Growth Plan
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "20px",
                fontWeight: 300,
                color: "#696969",
                mb: 5,
              }}>
              Whether you&apos;re an agent, team leader, or brokerage looking
              for tailored coaching, we’ll help you find the right program to
              meet your goals. Fill out the form below, and a member of our
              coaching team will reach out with a personalized quote and
              recommendation.
            </Typography>
          </Box>

          <Box sx={{my: 3, mb: 5}}>
            <QuoteRequestForm />
          </Box>
        </Container>
      </Box>
    </Section>
  );
};

export default GetQuoteSection;
