import React from 'react';
import PropTypes from 'prop-types';

const PlaceListPlace = ({ id, name, location, pricePerNight, image }) => {
  return (
    <ul>
      <img src={image} height="300px" width="600px" />
      <li>
        <h1>{name}</h1>
      </li>

      <li>{location}</li>
      <li>${pricePerNight} / night</li>
    </ul>
  );
};

PlaceListPlace.propTypes = {
  name: PropTypes.string.isRequired,

  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default PlaceListPlace;
