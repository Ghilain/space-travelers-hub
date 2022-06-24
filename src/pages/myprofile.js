import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketElement = rockets.map((rocket) => (
    rocket.active === true ? <li className="rockets">{rocket.rocket_name}</li> : null));
  return (
    <div className="profileContainer">
      <div className="activeMissions">
        <h4>My Missions</h4>
      </div>
      <div className="reservedRocket">
        <ul>
          <h4>My Rockets</h4>
          { rocketElement }
        </ul>
      </div>
    </div>
  );
};

export default Myprofile;
