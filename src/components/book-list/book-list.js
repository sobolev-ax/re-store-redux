import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';

export default class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          books.map((book) => {
            const { id } = book;
            return (
              <li key={id}>
                <BookListItem book={book} />
              </li>
            );
          })
        }
      </ul>
    );
  };
};
