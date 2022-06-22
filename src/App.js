import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';
import Myprofile from './pages/Myprofile';
import RocketPage from './pages/RocketPage';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="divider" />
      <Routes>
        <Route exact path="/profile" element={<Myprofile />} />
        <Route exact path="/" element={<RocketPage />} />
      </Routes>
    </div>
  );
}

export default App;
