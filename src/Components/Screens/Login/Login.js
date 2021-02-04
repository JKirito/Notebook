import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <h1>LOGIN</h1>
        <div className="inputcontainer">
          <label htmlFor="email" className="text">
            E-mail
          </label>
          <input type="text" id="email" />
        </div>
        <div className="inputcontainer">
          <label htmlFor="pass" className="text">
            Password
          </label>
          <input type="password" id="pass" />
        </div>
        <button className="buttonlogin">LOGIN</button>
        <div className="seperatorcontainer">
          <div className="seperator" />
          <span>OR</span>
          <div className="seperator" />
        </div>

        <button className="buttonsignup">Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
