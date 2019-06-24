const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};
const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};
const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};
// const fetchBooks = (bookstoreService, dispatch) => () => {
//   dispatch(booksRequested());
//   bookstoreService.getBooks()
//     .then((data) => dispatch(booksLoaded(data)))
//     .catch((error) => dispatch(booksError(error)))
// }

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)))
}

const onAddedToCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id,
  };
}
const onDeleteFromCart = (id) => {
  return {
    type: 'ALL_BOOK_DELETED_FROM_CART',
    payload: id,
  };
}
const onIncreaseFromCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id,
  };
}
const onDecreaseFromCart = (id) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: id,
  };
}

export {
  fetchBooks,
  onAddedToCart,
  onDeleteFromCart,
  onIncreaseFromCart,
  onDecreaseFromCart,
};
