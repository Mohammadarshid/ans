import React from "react";
import { Grid } from "@mui/material";
const ResponsiveGrid = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={3}
          xl={1}
          spacing={2}
          sx={{ background: "red" }}
        >
          Content A
        </Grid>

        <Grid
          item
          xs={8}
          sm={8}
          md={6}
          lg={3}
          xl={1}
          spacing={2}
          sx={{ background: "yellow" }}
        >
          Content b
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveGrid;
