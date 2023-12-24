import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import { Footers } from "./Footers";
import { Footers } from "./Footer";
function App() {
  return (
    <div>
      <AppBar style={{ display: "flex", flexDirection: "row" }}>
        <Toolbar
          style={{
            background: "linear-gradient(90deg, #141E30 0%, #243B55 100%",
            width: "85%",
            height: "60px",
          }}
        >
          <img
            src="https://parikshado.org/static/media/pariksha_Do_logo.94df9760aa726388ee7e.png"
            alt="Logo"
            style={{
              Width: "50px",
              height: "46px",
            }}
          />
          <Typography
            style={{
              width: "68%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
              marginLeft: "40px",
            }}
          >
            <Button style={{ color: "white" }}>All Course</Button>
            <Button style={{ color: "white" }}> Pratice</Button>
            <Button style={{ color: "white" }}> test Series</Button>
            <Button style={{ color: "white" }}>Study Material </Button>
            <Button style={{ color: "white" }}>Books</Button>
          </Typography>
        </Toolbar>
        <Toolbar
          style={{
            width: "15%",
            display: "flex",
            position: "relative",
            background: "linear-gradient(270deg, #FFB36B 0%, #FFD57A 100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button style={{ color: "black" }}> login </Button>
          <Button style={{ color: "black" }}> logout</Button>
        </Toolbar>
      </AppBar>
      <br />
      <Footers />
    </div>
  );
}

export default App;
