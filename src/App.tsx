import React from 'react';
import logo from './logo.svg'
import AddItem from './components/add-item';
import './App.css'; import { HashRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/welcome';
;

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/add-item"
            element={<AddItem />} />
          <Route path="/"
            element={<Welcome />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
