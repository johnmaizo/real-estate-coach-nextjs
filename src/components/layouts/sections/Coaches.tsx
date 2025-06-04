import { Box, Container, Typography } from "@mui/material";

import ViewAllButton from "@/components/utils/buttons/ViewAllButton";
import CoachesCarousel from "@/components/utils/carousel/CoachesCarousel";

const CoachesData = [
  {
    id: 1,
    name: "Anthony Leuterio",
    description: "Founder of Filipino Homes",
    socialMedias: [
      {
        name: "instagram",
        link: "https://www.instagram.com/Anthony_Leuterio/",
      },
      {
        name: "facebook",
        link: "https://www.facebook.com/Anthony_Leuterio/",
      },
      {
        name: "whatsapp",
        link: "https://www.linkedin.com/in/Anthony_Leuterio/",
      },
    ],
    imageUrl: "/SirTon.png",
  },
  {
    id: 2,
    name: "Gilbert Monecillo",
    description: "TEAM LEADER Davao",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/Gilbert_Monecillo.png",
  },
  {
    id: 3,
    name: "Azela Honor",
    description: "TEAM LEADER Cebu",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/Azela_Honor.png",
  },
  {
    id: 4,
    name: "George Ryan",
    description: "TEAM LEADER Cebu",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/George_Ryan.png",
  },
  {
    id: 5,
    name: "Marita Gracia Bombeo Fancubit",
    description: "UNIT MANAGER CDO",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/Marita_Gracia.png",
  },
  {
    id: 6,
    name: "Chris Malazarte",
    description: "TEAM LEADER Cebu",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/Chris_Malazarte.png",
  },
  {
    id: 7,
    name: "Angie Kay Godornes",
    description: "UNIT MANAGER Cebu",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/Angie_Kay_Godornes.png",
  },
  {
    id: 8,
    name: "Ada Mae Roiles",
    description: "TEAM LEADER Cebu",
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
        name: "whatsapp",
        link: "#",
      },
    ],
    imageUrl: "/Ada_Mae_Roiles.png",
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
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ px: { sm: 0, md: 4 } }}>
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
            }}
          >
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
            mx: { sm: 0, md: 5 },
          }}
        >
          <Typography fontFamily={"Outfit"} fontSize={"24px"} color="#696969">
            Your Partners in Growth, Accountability, and Long-Term Success
          </Typography>

          <ViewAllButton sx={{ mt: { sm: 2, md: 0 } }} />
        </Box>

        <Box>
          <CoachesCarousel CoachesData={CoachesData} />
        </Box>
      </Container>
    </Box>
  );
}
