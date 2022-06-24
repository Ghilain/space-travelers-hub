import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const rocketElement = rockets.map((rocket) => (
    rocket.active === true ? <li className="rockets" key={rocket.id}>{rocket.rocket_name}</li> : null));
  const missionElement = missions.map((mission) => (
    mission.reserved === true ? <li className="missions" key={mission.id}>{mission.name}</li> : null));

  return (
    <div className="profileContainer">
      <div className="profile-list">
        <h4>My Missions</h4>
        <ul className="active-list">
          { missionElement }
        </ul>
      </div>
      <div className="profile-list">
        <h4>My Rockets</h4>
        <ul className="active-list">
          { rocketElement }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
