import React from 'react';
import img from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './rocket.css';

const Rocket = () => {
  const val = '';
  return (
    <>
      <li className="detail">
        <img className="image-detail" src={img} alt="image1" />
        <p className="text-shipdetails">
          <h3> falcon 1</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged
          {val}
          <br />
          <button type="button">Reserve Rocket</button>
        </p>
      </li>

      <li className="detail">
        <img className="image-detail" src={img3} alt="image2" />
        <p className="text-shipdetails">
          <h3> falcon 9</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged
          {val}
          <br />
          <button type="button">Reserve Rocket</button>
        </p>
      </li>

      <li className="detail">
        <img className="image-detail" src={img2} alt="image3" />
        <p className="text-shipdetails">
          <h3> falcon heavy</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged
          {val}
          <br />
          <button type="button">Reserve Rocket</button>
        </p>
      </li>
    </>
  );
};

export default Rocket;
