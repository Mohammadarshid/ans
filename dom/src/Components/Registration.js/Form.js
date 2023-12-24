import React from "react";
const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Enter full name" required />
      <input type="text" placeholder="Enter full name" required />
      <input type="text" placeholder="Enter full name" required />
      <input type="password" placeholder="Password" required />
      <button className="login">Registor</button>
      <a href="#">Forgot Password ?</a>
      <hr />
      <button className="create-account">Login</button>
    </form>
  );
};
export default Form;
