import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { withBookService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }

  render() {
    const { books } = this.props;
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

const mapStateToProps = ({ books }) => ({ books });

const mapDispatcheToProps = {
  booksLoaded,
};

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatcheToProps),
)(BookList);
