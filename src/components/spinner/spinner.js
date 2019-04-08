import React from 'react';
import BookstoreServiceContext from '../bookstore-service-context';
import './spinner.css';

const Spinner = ({ getData }) => {
  console.log(getData());
  return (
    <div className="Spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default BookstoreServiceContext(Spinner);
