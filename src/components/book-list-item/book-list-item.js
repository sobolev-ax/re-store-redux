import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book }) => {
  return (
    <React.Fragment>
      <span>
        {book.title}
      </span>
      <span>
        {book.author}
      </span>
    </React.Fragment>
  );
};
export default BookListItem;
