import {notFound} from "next/navigation";
import {Box, Button, Container, Typography} from "@mui/material";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";
import {COACH_DATA} from "@/data/CoachData";

export async function generateStaticParams() {
  return COACH_DATA.map((coach) => ({
    coachName: coach.coachUsername,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{coachName: string}>;
}) {
  const {coachName} = await params;

  const coach = COACH_DATA.find((c) => c.coachUsername === coachName);

  if (!coach) return {title: "Coach Not Found"};

  return {
    title: `${coach.name} | Real EstateCoach`,
    description: coach.description,
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{coachName: string}>;
}) {
  const {coachName} = await params;

  const coach = COACH_DATA.find((c) => c.coachUsername === coachName);
  if (!coach) notFound();

  return (
    <Box sx={{py: 5, minHeight: "100vh"}}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{mb: 2}}>
          Welcome to {coach.fullName}&apos;s Coaching Page
        </Typography>
        <Typography sx={{mb: 2}}>{coach.description}</Typography>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/"
          sx={{mb: 2}}
          endIcon={<LaunchIcon />}>
          Go back to Home Page
        </Button>
      </Container>
    </Box>
  );
}
