import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import './book-list.css';

class BookList extends Component {
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

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(BookList);
