import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/UI/rockets/Rocket';

const RocketPage = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketElements = rockets.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      img={rocket.img}
      description={rocket.description}
      title={rocket.rocket_name}
      active={rocket.active}
    />
  ));
  return (
    <ul>
      { rocketElements }
    </ul>
  );
};
export default RocketPage;
