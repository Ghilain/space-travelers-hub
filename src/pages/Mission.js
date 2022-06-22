import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/missions/missions';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  if (!missions.length) dispatch(fetchData());
  return <div>Mission Page </div>;
};
export default Mission;
