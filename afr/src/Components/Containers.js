import React from "react";
import { Container, Typography } from "@mui/material";
const Containers = () => {
  return (
    <>
      <Container sx={{ background: "yellow" }} maxWidth="xs">
        <Typography variant="h3">this is axcess</Typography>
      </Container>
      <br />
      <Container sx={{ background: "yellow" }} maxWidth="sm">
        <Typography variant="h3">this is axcess</Typography>
      </Container>
      <br />

      <Container sx={{ background: "yellow" }} maxWidth="md">
        <Typography variant="h3">this is axcess</Typography>
      </Container>
      <br />

      <Container sx={{ background: "yellow" }} maxWidth="xl">
        <Typography variant="h3">this is axcess</Typography>
      </Container>
    </>
  );
};

export default Containers;
