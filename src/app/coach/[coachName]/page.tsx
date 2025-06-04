import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";

interface CoachPageProps {
  coachName: string;
}

export async function generateStaticParams() {
  const coaches = [
    "Anthony_Leuterio",
    "Gilbert_Monecillo",
    "Azela_Honor",
    "George_Ryan",
    "Marita_Gracia",
    "Chris_Malazarte",
    "Angie_Kay_Godornes",
    "Ada_Mae_Roiles",
  ];

  return coaches.map((coachName) => ({
    coachName,
  }));
}

export default function CoachPage({
  params,
}: {
  params: { coachName: string };
}) {
  const { coachName } = params;

  return (
    <Box sx={{ py: 5, minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 2 }}>
          Welcome to {coachName.replaceAll("_", " ")}&apos;s Coaching Page
        </Typography>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/"
          sx={{ mb: 2 }}
          endIcon={<LaunchIcon />}
        >
          Go back to Home Page
        </Button>
      </Container>
    </Box>
  );
}
