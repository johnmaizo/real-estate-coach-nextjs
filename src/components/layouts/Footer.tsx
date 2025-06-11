import {
  Typography,
  Box,
  Container,
  Divider,
  Button,
  Stack,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";

import RealEstateCoachLogoBW from "@/assets/RealEstateCoachLogoBW.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialLinks = [
  { icon: <FacebookIcon sx={{ fontSize: "35px" }} />, url: "#" },
  { icon: <WhatsAppIcon sx={{ fontSize: "35px" }} />, url: "#" },
  { icon: <XIcon sx={{ fontSize: "35px" }} />, url: "#" },
  { icon: <LinkedInIcon sx={{ fontSize: "35px" }} />, url: "#" },
];

const RealEstateCoachNavigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Coaching Programs", path: "/coaching-programs" },
  { title: "Coaches", path: "/coaches" },
  { title: "Industry Insights", path: "/industry-insights" },
  { title: "Contact Us", path: "/contact-us" },
];

const RealEstateCoachResourcesNavigation = [
  { title: "Real Estate Agent Toolkit", path: "#" },
  {
    title: "Lead Generation Strategies eBook",
    path: "#",
  },
  { title: "Video Training Series", path: "#" },
  { title: "Coaching Success Checklist", path: "#" },
  {
    title: "Join Our Free Facebook Community",
    path: "#",
  },
];

const FooterNavigation = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <>
      <Box
        component={"footer"}
        sx={{
          backgroundColor: "#060606",
          padding: 2,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{}}>
            <Box
              sx={{
                mt: { xs: 4, md: 8 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 20 },
                alignItems: "start",
              }}
            >
              <Box>
                <Typography
                  component={Link}
                  href="/"
                  sx={{ display: "inline-block" }}
                >
                  <Image src={RealEstateCoachLogoBW} alt="logo" width={200} />
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontWeight: 300,
                    fontSize: "18px",
                    my: 3,
                    lineHeight: "30px",
                    width: "100%",
                    maxWidth: "395px",
                  }}
                >
                  At RealEstateCoach, we empower agents to thrive with proven
                  strategies and expert guidance—whether you&apos;re starting
                  out or scaling up. Lead, list, and close with confidence.
                </Typography>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "24px",
                    fontWeight: 600,
                    mt: { sm: 0, md: 4 },
                  }}
                >
                  Navigation
                </Typography>

                <Box component={"ul"} sx={{ p: 0, pt: 3, m: 0 }}>
                  {RealEstateCoachNavigation.map((item, index) => (
                    <Box
                      key={index}
                      component={"li"}
                      sx={{ listStyle: "none", p: 0, py: 1, m: 0 }}
                    >
                      <Typography
                        component={"a"}
                        href={item.path}
                        sx={{
                          fontFamily: "Outfit",
                          color: "white",
                          fontSize: { xs: "18px", md: "22px" },
                          textTransform: "none",
                          lineHeight: "20px",
                          p: 0,
                          m: 0,
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "24px",
                    fontWeight: 600,
                    mt: { sm: 0, md: 4 },
                  }}
                >
                  Resources
                </Typography>

                <Box component={"ul"} sx={{ p: 0, pt: 3, m: 0 }}>
                  {RealEstateCoachResourcesNavigation.map((item, index) => (
                    <Box
                      key={index}
                      component={"li"}
                      sx={{ listStyle: "none", p: 0, py: 1, m: 0 }}
                    >
                      <Typography
                        component={"a"}
                        href={item.path}
                        sx={{
                          color: "white",
                          fontSize: { xs: "18px", md: "22px" },
                          textTransform: "none",
                          lineHeight: "20px",
                          fontFamily: "Outfit",
                          p: 0,
                          m: 0,
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 3, mt: { xs: 5, md: 0 } }}>
              {SocialLinks.map((link, index) => (
                <Button
                  LinkComponent={"a"}
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: 1.5, md: 2 },
                    m: 0,
                    width: { xs: "28px", md: "30px" },
                    height: { xs: "28px", md: "30px" },
                    backgroundColor: "transparent",
                    color: "error.contrastText",
                    "&:hover": {
                      opacity: 0.8,
                    },
                    "&:active": {
                      opacity: 0.8,
                    },
                    "&:focus": {
                      opacity: 0.8,
                    },
                    transition: "opacity 0.3s ease, color 0.3s ease",
                  }}
                >
                  {link.icon}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                my: 3,
                mb: 1,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 3, md: 0 },
                marginTop: "80px",
                marginBottom: "30px",
              }}
            >
              <Typography>
                © Real Estate Coach {new Date().getFullYear()}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2 }}
                sx={{ mb: { xs: 2, md: 0 } }}
              >
                {FooterNavigation.map((item, index) => (
                  <Typography
                    component={Link}
                    key={index}
                    href={item.href}
                    sx={{
                      fontFamily: "Outfit",
                      fontSize: { xs: "13px", md: "15px" },
                      color: "white",
                      lineHeight: "15px",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
