import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserve } from '../../../Redux/Rocket/rockets';
import './rocket.css';

function Rocket(props) {
  const {
    title, description, img, active, id,
  } = props;

  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserve(id));
  };
  return (
    <>
      <li className="detail">
        <div className="rocket-item__image">
          <img src={img} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>
            {active && <span>Reserved</span>}
            {description}
          </p>
          <button
            type="button"
            onClick={() => handleReserve(id)}
          >
            {active ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </li>
    </>
  );
}

export default Rocket;

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
