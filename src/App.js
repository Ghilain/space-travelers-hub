import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';
import Mission from './pages/Mission';
import Myprofile from './pages/myprofile';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/mission" element={<Mission />} />
        <Route exact path="/profile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
