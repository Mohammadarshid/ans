import React, { useState } from "react";
import { AddReaction } from "@mui/icons-material";
import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Snackbar,
  Alert,
  CircularProgress,
  LinearProgress,
  Rating,
  Typography,
  IconButton,
} from "@mui/material";
const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, Setvalue] = useState();
  const courses = ["reactjs", "nodejs", "mongodb", "mern", "css"];

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((course) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <br />
      <Snackbar open={true} autoHideDuration={2000}>
        <Alert severity="success"> this alert is Snackbar</Alert>
      </Snackbar>
      <br />
      <CircularProgress value={75} />
      <br />
      <LinearProgress />
      <br />
      <Rating
        value={value}
        onChange={(e, val) => Setvalue(val)}
        size="large"
        precision={0.5}
      />
      <Typography>Rated {value !== undefined ? value : 0}stars</Typography>
      <IconButton onClick={() => alert("icon btn")}>
        <AddReaction color="secondary" />
      </IconButton>
    </div>
  );
};

export default DrawerMenu;
