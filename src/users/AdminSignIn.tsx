import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './SignUp.css';

function AdminSignIn() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo" />
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1>Storefrunt Admin</h1>
              </div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input type="password" placeholder="Password" />
    
              <button className="form-btn" type="submit">
                Log in
              </button>
              <span className="has-separator">Or</span>
            <Link to={`/users/SignIn`}  className="password-reset">Sign In as a User</Link>
                
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminSignIn;
