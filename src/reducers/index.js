const initialState = {
  books: [],
  loading: true,
  error: null,
  cartBooks: [],
  cartTotal: 70,
};

const updateCartItems = (cartBooks, newBook, oldIndex) => {
  if (newBook.count === 0) {
    return [
      ...cartBooks.slice(0, oldIndex),
      ...cartBooks.slice(oldIndex + 1),
    ]
  }
  if (oldIndex === -1) {
    return [
      ...cartBooks,
      newBook,
    ]
  } else {
    return [
      ...cartBooks.slice(0, oldIndex),
      newBook,
      ...cartBooks.slice(oldIndex + 1),
    ]
  }
}

const createNewItem = (book, orderedBook = {}, quantity) => {
  const {
    idx = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = orderedBook;

  return {
    idx,
    title,
    count: count + quantity,
    total: total + book.price*quantity,
  };
}

const updateItem = (state, id, quantity) => {
  const { books, cartBooks } = state;
  const book = books.find(item => item.id === id);

  const orderedBook = cartBooks.find(item => item.idx === id);
  const oldIndex = cartBooks.indexOf(orderedBook);

  const newBook = createNewItem(book, orderedBook, quantity);

  return {
    ...state,
    cartBooks: updateCartItems(cartBooks, newBook, oldIndex),
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'BOOK_ADDED_TO_CART':
      return updateItem(state, action.payload, 1);
    case 'BOOK_DELETED_FROM_CART':
      return updateItem(state, action.payload, -1);
    case 'ALL_BOOK_DELETED_FROM_CART':
      const deletedBook = state.cartBooks.find(item => item.idx === action.payload);
      return updateItem(state, action.payload, -deletedBook.count);
    default:
      return state;
  }
};
export default reducer;
