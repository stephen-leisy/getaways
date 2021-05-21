import React, { useEffect, useState } from 'react';
import Place from '../components/places/Place';
import Spinner from '../components/utils/Spinner';
import { getOnePlace } from '../services/placesApi.js';
import { useParams } from 'react-router-dom';

const GetawayDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(place);

  useEffect(() => {
    getOnePlace(id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Spinner /> : <Place {...place} />;
};

export default GetawayDetail;
