import {Box, Button, Container, Typography} from "@mui/material";
import Link from "next/link";

import LaunchIcon from "@mui/icons-material/Launch";

interface CoachPageProps {
  coachName: string;
}

export default async function page({
  params,
}: {
  params: Promise<CoachPageProps>;
}) {
  const {coachName} = await params;
  return (
    <Box sx={{py: 5, minHeight: "100vh"}}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{mb: 2}}>
          Welcome to {coachName}&apos;s Coaching Page
        </Typography>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/"
          sx={{mb: 2}}
          endIcon={<LaunchIcon />}>
          Go back to Home Page
        </Button>

        {/* You can add more content here related to the coach */}
      </Container>
    </Box>
  );
}
