import {Box, Container, Typography} from "@mui/material";

import ViewAllButton from "@/components/utils/buttons/ViewAllButton";
import CoachesCarousel from "@/components/utils/carousel/CoachesCarousel";

const CoachesData = [
  {
    id: 1,
    name: "Jessa Jill Turalba",
    description: "TOP 1 Agent in Cagayan De Oro",
    socialMedias: [
      {
        name: "instagram",
        link: "https://www.instagram.com/jessajillturalba/",
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/jessajillturalba/",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/jessajillturalba/",
      },
    ],
    imageUrl: "/JessaJillTuralba.png",
  },
  {
    id: 2,
    name: "Boyax",
    description: "TOP 1 Agent in Planet Nemik",
    socialMedias: [
      {
        name: "instagram",
        link: "#",
      },
      {
        name: "facebook",
        link: "#",
      },
      {
        name: "linkedin",
        link: "#",
      },
    ],
    imageUrl: "/Boyax.png",
  },
  {
    id: 3,
    name: "Azela Honor",
    description: "TOP 1 Agent in Cebu",
    socialMedias: [
      {
        name: "instagram",
        link: "#",
      },
      {
        name: "facebook",
        link: "#",
      },
      {
        name: "linkedin",
        link: "#",
      },
    ],
    imageUrl: "/AzelaHonor.png",
  },
];

export default function Coaches() {
  return (
    <Box
      component={"section"}
      id="coaches"
      sx={{
        fontFamily: "Outfit",
        pt: 5,
        pb: 10,
        color: "#000000",
      }}>
      <Container maxWidth="xl">
        <Box sx={{px: {sm: 0, md: 4}}}>
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontFamily: "Lora",
              fontSize: "50px",
              fontWeight: 700,
              lineHeight: "60px",
              letterSpacing: "2%",
              width: "100%",
              maxWidth: "600px",
            }}>
            The Real Estate Leaders Behind Your Growth
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            mt: 2,
            mb: 5,
            mx: {sm: 0, md: 5},
          }}>
          <Typography fontFamily={"Outfit"} fontSize={"24px"} color="#696969">
            Your Partners in Growth, Accountability, and Long-Term Success
          </Typography>

          <ViewAllButton sx={{mt: {sm: 2, md: 0}}} />
        </Box>

        <Box>
          <CoachesCarousel CoachesData={CoachesData} />
        </Box>
      </Container>
    </Box>
  );
}
