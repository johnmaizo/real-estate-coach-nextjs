import Section from "./SectionCoach";
import {motion} from "framer-motion";
import {Box, Container, Typography} from "@mui/material";
import Silk from "@/components/utils/react-bits/Silk";
import AwardsCard from "@/components/utils/cards/AwardsCard";

interface AwardsDataProps {
  AwardsData: {
    imageUrl: string;
    title: string;
  }[];
}

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

const AwardsSection = ({AwardsData}: AwardsDataProps) => {
  return (
    <Section sx={{position: "relative"}}>
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        sx={{position: "relative", zIndex: 23424}}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              mt: 15,
              fontFamily: "Outfit",
              fontSize: "115px",
              fontWeight: 700,
              lineHeight: "120px",
              letterSpacing: "-2%",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}>
            Awards
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              my: 5,
              gap: 0,
              width: "100%",
            }}>
            {AwardsData.map((award, index) => (
              <AwardsCard
                key={index}
                imageUrl={award.imageUrl}
                title={award.title}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}>
        <Silk
          speed={5}
          scale={1}
          color="rgb(92, 188, 247)"
          noiseIntensity={0}
          rotation={0}
        />
      </Box>
    </Section>
  );
};

export default AwardsSection;
