import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export const Footers = () => {
  return (
    <div style={{ marginTop: "40%" }}>
      <Box sx={{ backgroundColor: "blue", height: "500px", width: "1300px" }}>
        <Container sx={{ display: "flex", gap: "50px" }}>
          <Stack>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
          </Stack>
          <Stack>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
          </Stack>
          <Stack>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
            <Typography>deepak</Typography>
          </Stack>
        </Container>
      </Box>
        
    </div>
  );
};
