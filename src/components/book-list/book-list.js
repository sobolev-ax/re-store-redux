import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import { withBookService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
  }

  render() {
    const { books, loading } = this.props;

    if (loading === true) {
      return <Spinner />
    }

    return (
      <ul className="book-list">
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

const mapStateToProps = ({ books, loading }) => ({ books, loading });

const mapDispatcheToProps = {
  booksLoaded,
  booksRequested,
};

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatcheToProps),
)(BookList);
