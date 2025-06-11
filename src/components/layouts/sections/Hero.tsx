import { Box, Container } from "@mui/material";

import AnimatedCoachCard from "@/components/utils/cards/AnimatedCoachCard";
import Silk from "@/app/ReactBits/Silk";
import { width } from "@mui/system";

export default function Hero() {
  return (
    <Box
      component={"section"}
      sx={{
        background: "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        marginTop: "96px",
        "&:before": {
          content: "''",
          width: "100%",
          height: "906px",
          background: "#000",
          position: "absolute",
          top: "-106px",
        },
      }}
    >
      <Box
        sx={{
          height: "113%",
          width: "100%",
          position: "absolute",
          top: "-106px",
        }}
      >
        <Silk
          speed={8}
          scale={0.6}
          color="#132D4C"
          noiseIntensity={1.5}
          rotation={3.14}
        />
      </Box>
      <Container maxWidth="xl" sx={{ height: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            display: { sm: "block", md: "flex" },
            alignItems: "start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <AnimatedCoachCard />
        </Box>
      </Container>
    </Box>
  );
}
