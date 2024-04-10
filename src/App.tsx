import React from 'react';
import './App.css';
import Profile from './Profile';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Storefruntttt
        </p>
      </header>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Profile"/>} /> 
            <Route path="/Profile/*" element={<Profile />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
