import {Box, Button, Container, Typography} from "@mui/material";

import Image from "next/image";

import Icon from "@/assets/svg/ArrowFilledCircleIconWhite.svg";

import banner from "@/assets/hero-image.jpg";

export default function Hero() {
  return (
    <Box
      component={"section"}
      sx={{
        background: `url(${banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundColor: "rgba(38, 84, 165,0.9)",
        },
      }}>
      <Container maxWidth="xl" sx={{height: "100%"}}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            px: {sm: 0, md: 4},
            pl: 0,
          }}>
          <Box sx={{mt: {sm: 0, md: 15}}}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Lora",
                fontSize: "65px",
                fontWeight: 700,
                lineHeight: "85px",
              }}>
              Empowering Real Estate Professionals
            </Typography>
            <Typography sx={{fontFamily: "Outfit", fontSize: "27px"}}>
              Unlock your potential and transform your real estate career.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "22px",
                fontWeight: 300,
                lineHeight: "35px",
                my: 5,
              }}>
              At RealEstateCoach, we believe every agent has the power to thrive
              when guided with proven strategies and expert coaching. Whether
              you’re just starting out or ready to scale your success, our
              tools, insights, and mentorship help you lead, list, and close
              with confidence.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Outfit",
                fontSize: "22px",
                lineHeight: "35px",
                fontWeight: 300,
                pb: 3,
              }}>
              Learn how to build your brand, boost productivity, and master
              client conversion.
            </Typography>
          </Box>

          <Box sx={{py: 20}}>
            <Box
              sx={{
                width: "450px",
                height: "550px",
                backgroundColor: "white",
                borderRadius: "10px",
                position: "relative",
              }}>
              <Box
                component={"img"}
                src="/SirTon.png"
                alt="Sir Ton"
                draggable={false}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Outfit",
                  textTransform: "none",
                  fontSize: "22px",
                  color: "white",
                  backgroundColor: "#132D4C",
                  borderRadius: "50px",
                  display: "inline-flex",
                  gap: 3,
                  alignItems: "center",
                  padding: "5px 20px",
                  border: "2px solid white",
                  position: "absolute",
                  bottom: -30,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}>
                Hire Me{" "}
                <Image src={Icon} alt="" aria-hidden draggable={false} />
              </Button>
              <Box
                sx={{
                  width: "450px",
                  height: "550px",
                  backgroundColor: "#C5C5C5",
                  borderRadius: "10px",
                  zIndex: -1,
                  position: "absolute",
                  bottom: -20,
                  left: 20,
                }}></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// mui.com
