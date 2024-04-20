import React from 'react';
import './App.css';
import SignIn from './users/SignIn';
import AdminSignIn from './users/AdminSignIn';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import SignUp from './users/SignUp';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="Main" />} />
          <Route path="Main/*" element={<Main />} />
          <Route path="/users/SignIn"
            element={<SignIn />} />
             <Route path="/users/SignUp"
            element={<SignUp />} />
            <Route path="/users/adminSignIn"
            element={<AdminSignIn />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;