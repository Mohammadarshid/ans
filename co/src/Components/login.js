import React, { useState } from "react";
function Login() {
  return (
    <>
      <div>
        <div class="login-box">
          <form>
            <h2 style={{ color: "white" }}>login page</h2>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label style={{ color: "white" }}>
                <h4>username</h4>
              </label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label style={{ color: "white" }}>
                <h4>Password</h4>
              </label>
            </div>
            <center>
              <a href="" style={{ color: "white" }}>
                SEND
                <span></span>
              </a>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
