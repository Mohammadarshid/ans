import React, { useState } from "react";
import {
  TextField,
  Button,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    Terms: "",
    Gender: "",
  });

  //inputs Chnage func
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };
  // form Handling

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
          placeholder=" enter your name"
        />
        <br />

        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
          placeholder=" enter your email"
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
          placeholder=" enter your password"
        />
        <br />
        <br />
        <FormControl fullWidth="20px">
          <InputLabel id="menu">courses</InputLabel>
          <Select
            labelId="menu"
            id="menu-list"
            label="courses"
            value={inputs.course}
            onChange={handleChange}
            name="course"
          >
            <MenuItem value={"mongodb"}>mongodb</MenuItem>
            <MenuItem value={"express"}>express</MenuItem>
            <MenuItem value={"mysql"}>my sql</MenuItem>
            <MenuItem value={"node js"}>nodejs</MenuItem>
          </Select>
        </FormControl>
        <br />

        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label=" i agreee t&c"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    Terms: !inputs.Terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <br />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="Gender" onChange={handleChange}>
            <FormControlLabel
              value={"male"}
              label={"female"}
              control={<Radio />}
            />
            <FormControlLabel
              value={"female"}
              label={"male"}
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>

        <br />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
export default Form;
