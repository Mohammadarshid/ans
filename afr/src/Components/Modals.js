import React, { useState } from "react";
import { Modal, Button, Box, Typography, Link } from "@mui/material";
const Modals = () => {
  const [open, setOpen] = useState();
  return (
    <div>
      <Button onClick={() => setOpen(true)}> open MOdel</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography> this is modal </Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            {" "}
            Cancel{" "}
          </Button>
        </Box>
      </Modal>
      <Link
        variant="h4"
        color="secondary"
        href="https://github.com/"
        underline="always"
      >
        github
      </Link>
    </div>
  );
};

export default Modals;
