import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Spinner from '../components/utils/Spinner';
import Header from '../components/header/Header';
import Pagination from '../components/controls/Pagination';
import { setIndex } from '../utils/utils';

const Getaways = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, [currentPage]);

  const paginatedPlaces = setIndex(currentPage, perPage, places);
  const lastPage = places.length / perPage;

  const handleButtonChange = ({ target }) => {
    if (target.value === 'next') {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Pagination
        onClick={handleButtonChange}
        currentPage={currentPage}
        lastPage={lastPage}
      />

      <main>
        <PlaceList places={paginatedPlaces} />
      </main>
    </>
  );
};

export default Getaways;
