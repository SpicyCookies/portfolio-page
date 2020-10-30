import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
