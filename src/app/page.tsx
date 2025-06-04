import Hero from "@/components/layouts/sections/Hero";
import { Box } from "@mui/material";
import "./globals.css";

import "@fontsource/outfit";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import About from "@/components/layouts/sections/About";
import CoachingPrograms from "@/components/layouts/sections/CoachingPrograms";
import IndustryInsights from "@/components/layouts/sections/IndustryInsights";
import Coaches from "@/components/layouts/sections/Coaches";
import BackToTopButton from "@/components/utils/BackToTopButton";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <CoachingPrograms />
      <Coaches />
      <IndustryInsights />
      <BackToTopButton />
    </Box>
  );
}
