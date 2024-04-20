import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
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
                placeholder="Mobile Number or Email"
              />
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <button className="form-btn" type="submit">
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
};

export default SignUp;
