// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FormComponent from './FormComponent';
import Success from './Success';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Simple React Form</h1>
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
