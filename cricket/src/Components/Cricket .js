import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

const Cricket = () => {
  const [state, Setstate] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        Setstate(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <table></table>
      {state &&
        state.map((value, index, array) => {
          return (
            <div>
              <h1>moHAMMAD</h1>
            </div>
          );
        })}
    </>
  );
};
export default Cricket;
