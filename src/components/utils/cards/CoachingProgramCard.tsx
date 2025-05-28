"use client";

import { useAppProvider } from "@/providers/AppProvider";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface CoachingProgramCardProps {
  program: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function CoachingProgramCard({
  program,
  index,
}: CoachingProgramCardProps) {
  const { desktop } = useAppProvider();

  return (
    <Box
      sx={{
        padding: 3,
        borderBottom:
          desktop && index >= 0 && index < 3 ? "2px solid #C4C2C0" : undefined,
        borderRight:
          (desktop && index >= 0 && index < 2) ||
          (desktop && index >= 3 && index < 5)
            ? "2px solid #C4C2C0"
            : undefined,
      }}
    >
      <Image
        src={program.image}
        alt=""
        aria-hidden
        width={60}
        height={60}
        draggable={false}
      />
      <Typography
        variant="h5"
        component={"h5"}
        sx={{ fontWeight: 700, mt: 2, fontSize: "32px" }}
      >
        {program.title}
      </Typography>
      <Typography sx={{ mt: 1, fontSize: "16px", color: "#696969" }}>
        {program.description}
      </Typography>
    </Box>
  );
}
