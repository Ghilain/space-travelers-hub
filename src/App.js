import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchData } from './Redux/Rocket/rockets';
import './App.css';
import Header from './components/UI/Header';
import Mission from './pages/Mission';
import Myprofile from './pages/Myprofile';
import RocketPage from './pages/RocketPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<RocketPage />} />
        <Route exact path="/mission" element={<Mission />} />
        <Route exact path="/profile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
