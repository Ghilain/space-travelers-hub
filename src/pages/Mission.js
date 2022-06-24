import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, joinMission, leaveMission } from '../redux/missions/missions';
import './Mission.css';

const Mission = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchData());
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
                <span className={item.reserved ? 'status member' : 'status'}>
                  {item.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                  {' '}
                </span>
              </td>
              <td>
                {item.reserved ? (
                  <button type="button" className="mission-button red" onClick={() => dispatch(leaveMission(item.id))}>
                    LEAVE MISSION
                  </button>
                ) : (
                  <button type="button" className="mission-button" onClick={() => dispatch(joinMission(item.id))}>
                    JOIN MISSION
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Mission;
