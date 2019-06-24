import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withBookService } from '../hoc';
import { fetchBooks, onAddedToCart } from '../../actions';
import { compose } from '../../utils';
import { bindActionCreators } from 'redux';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          const { id } = book;
          return (
            <li key={id}>
              <BookListItem book={book} onAddedToCart={() => { onAddedToCart(id) }}/>
            </li>
          );
        })
      }
    </ul>
  );
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading === true) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <BookList books={books} onAddedToCart={onAddedToCart} />
    );
  };
};

const mapStateToProps = ({bookList: { books, loading, error }}) => ({ books, loading, error });

const mapDispatcheToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: onAddedToCart,
  }, dispatch)
}

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatcheToProps),
)(BookListContainer);
