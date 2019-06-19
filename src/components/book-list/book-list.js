import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading === true) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
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

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatcheToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
    }
  }
}

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatcheToProps),
)(BookList);
