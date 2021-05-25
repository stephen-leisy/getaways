import React from 'react';
import PropTypes from 'prop-types';

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <ul>
      <img src="https://i.pinimg.com/originals/82/79/41/82794135105f8aed30451ad5253d655a.jpg" />
      <h1>{name}</h1>
      <li>Description: {description}</li>
      <li>Address: {location}</li>
      <li>${pricePerNight} / night</li>
      <li>Max Guests:{maxGuests}</li>
      <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
      {pool ? <li>Has a Pool!</li> : null}
      {wifi ? <li>Free Wifi</li> : null}
    </ul>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
