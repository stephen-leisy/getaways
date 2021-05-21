import React from 'react';

export default function Pagination({ onClick, currentPage, lastPage }) {
  return (
    <nav>
      <button
        onClick={onClick}
        value="previous"
        name="previous"
        disabled={currentPage <= 1}
      >
        previous
      </button>
      {currentPage}
      <button
        onClick={onClick}
        value="next"
        name="next"
        disabled={currentPage >= lastPage}
      >
        next
      </button>
    </nav>
  );
}
