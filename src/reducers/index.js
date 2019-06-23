const initialState = {
  books: [],
  loading: true,
  error: null,
  orderBooks: [],
  orderTotal: 70,
};

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
      return {
        ...state,
        orderBooks: [
          ...state.orderBooks,
          {
            idx: book.id,
            title: book.title,
            count: 1,
            total: book.price,
          }
        ]
      }
    default:
      return state;
  }
};
export default reducer;
