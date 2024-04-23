import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./SignUp.css";
import * as userClient from "../Clients/userClient";
import { User } from "../Clients/userClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    role: "user",
  });

  const navigate = useNavigate();
  const login = async () => {
    await userClient.signin(credentials);
    navigate("/Main/Home");
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo" />
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1>Storefrunt</h1>
              </div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
              <button className="form-btn" type="submit" onClick={login}>
                Log in
              </button>
              <span className="has-separator">Or</span>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don't an account? <Link to={`/users/SignUp`}>Sign up</Link>
            </div>
            <div className="sign-up">
              Are you an Admin? <Link to={`/users/AdminSignIn`}>Admin</Link>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
