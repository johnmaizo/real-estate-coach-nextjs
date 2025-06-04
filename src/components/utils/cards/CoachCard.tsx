import React from "react";

import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";

import { Instagram, Facebook, LinkedIn, WhatsApp } from "@mui/icons-material";
import Image from "next/image";

import FilipinoHomesLogo from "@/assets/svg/FilipinoHomesLogoSmall.svg";
import FilipinoHomesLogoWhite from "@/assets/svg/FilipinoHomesLogoSmallWhite.svg";

interface CoachCardProps {
  coach: {
    id: number;
    name: string;
    description: string;
    socialMedias: { name: string; link: string }[];
    imageUrl: string;
  };
}

function getSocialIcon(name: string) {
  switch (name.toLowerCase()) {
    case "instagram":
      return <Instagram />;
    case "facebook":
      return <Facebook />;
    case "linkedin":
      return <LinkedIn />;
    case "whatsapp":
      return <WhatsApp />;
    default:
      return null;
  }
}

export default function CoachCard({ coach }: CoachCardProps) {
  const isSpecialCard = coach.id % 2 === 0;

  return (
    <Box sx={{ px: 1, height: "100%" }}>
      <Card
        sx={{
          borderRadius: "20px",
          background: isSpecialCard
            ? "linear-gradient(180deg, #0054F8 0%, #003FBD 100%)"
            : "linear-gradient(180deg, #E0EBFD 0%, #9DBDFE 100%)",
          p: 3,
          pt: 2,
          mt: 3,
          height: "500px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "visible",
          boxShadow: 3,
        }}
      >
        {/* Header with Logo & Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Image
                src={isSpecialCard ? FilipinoHomesLogoWhite : FilipinoHomesLogo}
                draggable={false}
                priority
                alt="Filipino Homes"
                width={0}
                height={0}
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  height: "auto",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 0.5 }}>
            {coach.socialMedias.map((social, idx) => (
              <IconButton
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: isSpecialCard ? "white" : "black",
                  width: 30,
                  height: 30,
                  "&:hover": {
                    bgcolor: isSpecialCard
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(0,0,0,0.04)",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                {getSocialIcon(social.name)}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Coach Info */}
        <CardContent
          sx={{ p: 0, flex: 1, display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontFamily: "Outfit",
              mb: 0.5,
              color: isSpecialCard ? "white" : "text.primary",
              fontSize: "22px",
              lineHeight: 1.2,
            }}
          >
            {coach.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Outfit",
              color: isSpecialCard ? "rgba(255,255,255,0.9)" : "text.secondary",
              mb: 3,
              fontWeight: 300,
              fontSize: "16px",
            }}
          >
            {coach.description}
          </Typography>

          {/* Image / Avatar Fallback */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Box
              component="img"
              src={coach.imageUrl}
              alt={coach.name}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.style.display = "none";
                const next = e.currentTarget.nextElementSibling as HTMLElement;
                if (next) {
                  next.style.display = "flex";
                }
              }}
              draggable={false}
              style={{
                width: "100%",
                maxWidth: coach.name === "Boyax" ? "300px" : "350px",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
