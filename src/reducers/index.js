const initialState = {
  books: [],
  loading: true,
  error: null,
  cartBooks: [],
  cartTotal: 70,
};

const updateCartItems = (cartBooks, newBook, oldIndex) => {
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

const createNewItem = (book, orderedBook = {}) => {
  const {
    idx = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = orderedBook;

  return {
    idx,
    title,
    count: count + 1,
    total: total + book.price,
  };
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
      const id = action.payload;
      const book = state.books.find(item => item.id === id);

      const orderedBook = state.cartBooks.find(item => item.idx === id);
      const oldIndex = state.cartBooks.indexOf(orderedBook);

      const newBook = createNewItem(book, orderedBook);

      return {
        ...state,
        cartBooks: updateCartItems(state.cartBooks, newBook, oldIndex),
      }
    default:
      return state;
  }
};
export default reducer;
