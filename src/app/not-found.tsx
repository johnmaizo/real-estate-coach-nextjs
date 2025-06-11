import React from "react";
import {Box, Button, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Head from "next/head";
export default function Error() {
  return (
    <>
      <Head>
        <title>Page Not Found - 404</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{xs: 6}}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button
                LinkComponent={Link}
                href="/"
                variant="contained"
                sx={{textTransform: "none", mt: 5}}>
                Back Home
              </Button>
            </Grid>
            <Grid size={{xs: 6}}>
              <Box
                component="img"
                draggable={false}
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
