import logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import React, { useState } from "react";
import * as userClient from "../Clients/userClient";
import { ProfileType } from "../Clients/profileClient";
import { User } from "../Clients/userClient";
import * as profileClient from "../Clients/profileClient";

function SignUp() {
  const [error, setError] = useState("");
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    role: "user",
  });

  const navigate = useNavigate();
  const signup = async () => {
    try {
      const userResp = await userClient.findUserByEmail({ email: user.email });
      if (userResp) {
        alert("User already exists");
        return;
      }
      const userResp2 = await userClient.findUserByUsername({
        username: user.username,
      });
      if (userResp2) {
        alert("Username already exists");
        return;
      }
      const createUserResp = await userClient.signup(user);
      console.log(createUserResp);

      let profile: ProfileType = {
        _id: "",
        user_id: createUserResp._id,
        profile_pic:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        description: "",
        followers: [],
        following: [],
      };

      const createProfResp = await profileClient.createProfile(profile);
      console.log(createProfResp);

      navigate("/Main/Home");
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        {error && <div>{error}</div>}
        <div className="container">
          <div className="phone-app-demo" />
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1>Storefrunt</h1>
              </div>
              <input
                type="text"
                placeholder="Mobile Number or Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="First Name"
                value={user.firstname}
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                value={user.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <input
                type="text"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button className="form-btn" type="submit" onClick={signup}>
                Sign Up
              </button>
            </form>
            <div className="sign-up">
              Already an account? <Link to={`/users/SignIn`}>Sign in</Link>
            </div>
            <div className="sign-up">
              Are you an admin? <Link to={`/users/AdminSignIn`}>Admin</Link>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="copyright-notice">&copy; 2024 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
