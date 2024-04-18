import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './users/SignIn';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import SignUp from './users/SignUp';

function App() {
  return (
    <div className="App">
     <HashRouter>
      <Routes>
          <Route path="/users/SignIn"
            element={<SignIn />} />
             <Route path="/users/SignUp"
            element={<SignUp />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;