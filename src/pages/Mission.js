import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/missions/missions';
import './Mission.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <section>
      <table className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Action</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <span className="status">NOT A MEMBER </span>
              </td>
              <td>
                <button type="button" className="join-button">JOIN MISSION</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Mission;
