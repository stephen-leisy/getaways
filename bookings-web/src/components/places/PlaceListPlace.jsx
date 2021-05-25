import React from 'react';
import PropTypes from 'prop-types';

const PlaceListPlace = ({ id, name, location, pricePerNight, image }) => {
  return (
    <ul>
      <h1>{name}</h1>
      <img
        src="https://64.media.tumblr.com/1c40249a7e46a1cc3ba308d6c5bc34df/tumblr_p8immsmVle1qljnl3o1_1280.jpg"
        height="300px"
        width="600px"
      />

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
