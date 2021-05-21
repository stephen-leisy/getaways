import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Spinner from '../components/utils/Spinner';

const Getaways = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Spinner /> : <PlaceList places={places} />;
};

export default Getaways;
