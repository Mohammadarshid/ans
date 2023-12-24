import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Autocomplete,
  TextField,
} from "@mui/material";
import { PartyModeSharp } from "@mui/icons-material";
const Accord = () => {
  const course = ["react", "node js", "mern", "next js", "ui"];
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography varient="h5"></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>lorem</Typography>
        </AccordionDetails>
      </Accordion>

      {/* //autocomplte / */}
      <Autocomplete
        sx={{ width: 200 }}
        options={course}
        renderInput={(params) => (
          <TextField {...params} label="select a course" />
        )}
      />
    </>
  );
};

export default Accord;
