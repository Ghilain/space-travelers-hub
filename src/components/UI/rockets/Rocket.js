// import { PropTypes } from 'prop-types';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchData } from '../../../redux/Rockets/rockets';
import './rocket.css';
import img1 from './img2.jpg';

const Rocket = () => (
// const {
//   title, description, img, active, id,
// } = props;

  // const dispatch = useDispatch();
  // const handleReserve = (id) => {
  //   dispatch(fetchData(id));
  // };

  <>
    {/* <li className="detail">
        <div className="image-detail">
          <img src={img} alt={title} />
        </div>
        <div className="text-shipdetails">
          <h2>{title}</h2>
          <p>
            {active && <span>Reserved</span>}
            {description}
          </p>
          <button
            type="button"
            className={active ? 'activated' : ''}
            onClick={() => handleReserve(id)}
          >
            {active ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </li> */}
    <li className="detail">
      <div className="image-detail">
        <img src={img1} alt="" />
      </div>
      <div className="text-shipdetails">
        <h2>Falcon 3</h2>
        <p>
          {/* {active && <span>Reserved</span>} */}
          hfjbdchbcxcbccbxzcbhjcxhxchjcgscgsh
        </p>
        <button
          type="button"
        >
          {/* {({ active }) => (active ? 'Cancel Reservation' : 'Reserve Rocket')} */}
          Reserve Rocket
        </button>
      </div>
    </li>
    <li className="detail">
      <div className="image-detail">
        <img src={img1} alt="" />
      </div>
      <div className="text-shipdetails">
        <h2>Falcon 3</h2>
        <p>
          {/* {active && <span>Reserved</span>} */}
          hfjbdchbcxcbccbxzcbhjcxhxchjcgscgsh
        </p>
        <button
          type="button"
        >
          {/* {({ active }) => (active ? 'Cancel Reservation' : 'Reserve Rocket')} */}
          Reserve Rocket
        </button>
      </div>
    </li>
  </>
);
export default Rocket;

// Rocket.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   active: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// };
