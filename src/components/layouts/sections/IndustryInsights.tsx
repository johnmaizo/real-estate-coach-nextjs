import {Box, Container, Typography} from "@mui/material";

import Image from "next/image";

import IndustryInsightsImage from "@/assets/IndustryInsightsImage.svg";
import IndustryInsightsBGImage from "@/assets/IndustryInsightsBGImage.jpg";
import GridLayout from "@/components/utils/grid/GridLayout";

import ViewAllButton from "@/components/utils/buttons/ViewAllButton";

const contentCards = [
  {
    id: "1",
    title: "3 Things Every Buyer Wants Right Now",
    description:
      "Understand shifting expectations and how to tailor your sales pitch for the modern client.",
    imageUrl: "/InsightsImage1.jpg",
  },
  {
    id: "2",
    title: "Time Management Hacks for Busy Agents",
    description:
      "Learn smart ways to plan your day so you can attract more leads, stay connected with clients, and close deals efficiently without the overwhelm.",
    imageUrl: "/InsightsImage2.jpg",
  },
  {
    id: "3",
    title: "Using Social Media to Build Your Brand",
    description:
      "Simple strategies to generate organic leads and stay top of mind.",
    imageUrl: "/InsightsImage3.jpg",
  },
  {
    id: "4",
    title: "Market Trends Agents Should Watch",
    description:
      "Stay ahead of the curve with local and national housing trends that affect your business.",
    imageUrl: "/InsightsImage4.jpg",
  },
];

export default function IndustryInsights() {
  return (
    <Box
      component={"section"}
      id="industry-insights"
      sx={{
        color: "white",
        fontFamily: "Outfit",
        pt: 5,
        pb: 10,
      }}>
      <Container maxWidth="xl">
        <Box sx={{px: {sm: 0, md: 4}}}>
          <Box
            sx={{
              display: {sm: "block", md: "flex"},
              justifyContent: "center",
              borderRadius: "15px",
              overflow: "hidden",
            }}>
            <Box
              sx={{
                padding: 3,
                height: "100%",
                background: `url(${IndustryInsightsBGImage.src}) no-repeat center/cover`,
                minHeight: {sm: "auto", md: "500px"},
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}>
              <Image
                src={IndustryInsightsImage}
                alt=""
                width={0}
                height={0}
                aria-hidden
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxWidth: "500px",
                }}
              />
            </Box>
            <Box
              sx={{
                padding: 3,
                backgroundColor: "#222831",
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: {sm: "auto", md: "385px"},
              }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "30px",
                    fontWeight: 300,
                  }}>
                  Industry Insights
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "60px",
                    fontWeight: 700,
                    lineHeight: "63px",
                  }}>
                  Stay Sharp Stay Ahead
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: "30px",
                    width: "100%",
                    maxWidth: "330px",
                    mt: 3,
                  }}>
                  At RealEstateCoach, we believe knowledge empowers growth. This
                  section brings you curated insights, real-world agent tips,
                  and strategic advice for staying competitive in today’s
                  market.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{mt: 5}}>
          <GridLayout cards={contentCards} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 5,
            mx: {sm: 0, md: 5},
          }}>
          <Typography fontFamily={"Outfit"} fontSize={"24px"} color="black">
            We empower you with the insights that keep you at the top of your
            game.
          </Typography>

          <ViewAllButton sx={{mt: {sm: 2, md: 0}}} />
        </Box>
      </Container>
    </Box>
  );
}
