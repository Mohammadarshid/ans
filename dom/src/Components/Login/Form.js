import React from "react";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <form>
      <h1>Registration Form</h1>
      <input type="text" placeholder="Email or Phone Number" required />
      <input type="password" placeholder="Email or password " required />
      <input type="Address" placeholder="Email or Address " required />
      <button className="login">Log In</button>
      <a href="#">Forgot Password ?</a>
      <hr />
      <Link to="/registration">
        <button className="create-account">Create New Account</button>
      </Link>
    </form>
  );
};
export default Form;
