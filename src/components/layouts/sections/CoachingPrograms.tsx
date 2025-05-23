import CoachingProgramCard from "@/components/utils/cards/CoachingProgramCard";
import {Box, Container, Typography} from "@mui/material";

const CoahingProgramsData = [
  {
    title: "Fast Start Coaching",
    description:
      "For new agents learning the ropes build confidence and win your first listings.",
    image: "/FastStartCoachingIcon.svg",
  },
  {
    title: "Momentum Builder",
    description:
      "For working agents needing better consistency in deals and lead flow.",
    image: "/MomentumBuilderIcon.svg",
  },
  {
    title: "Top Producer Track",
    description:
      "For high-performing agents and team leaders ready to expand and scale.",
    image: "/TopProducerTrackIcon.svg",
  },
  {
    title: "Elite Agent",
    description:
      "For seasoned pros mastering luxury sales, branding, and high-end client relationships.",
    image: "/EliteAgentIcon.svg",
  },
  {
    title: "Team Leader Mastery",
    description:
      "For brokers or team leads focused on recruiting, retention, and building high-performance teams.",
    image: "/TeamLeaderMasteryIcon.svg",
  },
  {
    title: "Digital Marketing Pro",
    description:
      "For agents wanting to master social media, online ads, and content strategies to generate more qualified leads.",
    image: "/DigitalMarketingProIcon.svg",
  },
];

export default function CoachingPrograms() {
  return (
    <Box
      component={"section"}
      id="coaching-programs"
      sx={{
        backgroundColor: "#132D4C",
        color: "white",
        fontFamily: "Outfit",
        py: 10,
      }}>
      <Container maxWidth="xl">
        <Box sx={{px: {sm: 0, md: 7}}}>
          <Box sx={{textAlign: "center"}}>
            <Typography
              variant="h2"
              component={"h2"}
              sx={{
                fontFamily: "Lora",
                fontSize: "65px",
                fontWeight: 700,
                lineHeight: "55px",
              }}>
              Coaching Programs
            </Typography>
            <Box sx={{mt: 3, mb: 7}}>
              <Typography sx={{fontSize: "32px", lineHeight: "35px"}}>
                Coaching Built for Real Estate Pros
              </Typography>
              <Typography
                sx={{fontSize: "22px", fontWeight: 300, lineHeight: "35px"}}>
                No matter your stage, we have a path to help you grow
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F6F6F6",
              padding: 5,
              borderRadius: "20px",
              color: "black",
            }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
              }}>
              {CoahingProgramsData.map((program, index) => (
                <CoachingProgramCard
                  key={program.title}
                  program={program}
                  index={index}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{mt: 4}}>
            <Typography component={"h4"} sx={{fontSize: "36px"}}>
              Every program includes:
            </Typography>

            <Box
              component={"ul"}
              sx={{
                display: {sm: "block", md: "flex"},
                justifyContent: "space-between",
              }}>
              <Box>
                <Typography
                  component={"li"}
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    lineHeight: "35px",
                    my: 2,
                  }}>
                  Live weekly coaching calls
                </Typography>
                <Typography
                  component={"li"}
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    lineHeight: "35px",
                    my: 2,
                  }}>
                  Accountability tracking and reporting
                </Typography>
              </Box>
              <Box sx={{mr: {sm: 0, md: 15}}}>
                <Typography
                  component={"li"}
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    lineHeight: "35px",
                    my: 2,
                  }}>
                  Proven scripts, templates, and guides
                </Typography>
                <Typography
                  component={"li"}
                  sx={{
                    fontSize: "22px",
                    fontWeight: 300,
                    lineHeight: "35px",
                    my: 2,
                  }}>
                  Exclusive access to our coaching portal
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
