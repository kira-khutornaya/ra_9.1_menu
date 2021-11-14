import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/ra_9.1_menu" exact element={<HomePage />} />
            <Route path="/ra_9.1_menu/drift" element={<DriftPage />} />
            <Route path="/ra_9.1_menu/timeattack" element={<TimeAttackPage />} />
            <Route path="/ra_9.1_menu/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
