import React from 'react';
import './App.css';
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Storefruntttt
        </p>
      </header> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="Main" />} />
          <Route path="Main/*" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
