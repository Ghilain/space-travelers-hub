import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserve } from '../../../redux/Rockets/rockets';
import './rocket.css';

const Rocket = (props) => {
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
        <div className="image-detail">
          <img src={img} alt={title} />
        </div>
        <div className="text-shipdetails">
          <h2>{title}</h2>
          <p>
            {active && <span className="reservedSign">Reserved</span>}
            {description}
          </p>
          <button
            type="button"
            className={active ? 'button activated' : 'button'}
            onClick={() => handleReserve(id)}
          >
            {active ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </li>
    </>
  );
};
export default Rocket;

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
