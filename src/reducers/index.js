const initialState = {
  books: [],
  loading: true,
  error: null,
  orderBooks: [
    {
      idx: 0,
      title: 'Book 1',
      count: 2,
      total: 40,
    },
    {
      idx: 1,
      title: 'Book 2',
      count: 1,
      total: 30,
    },
  ],
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
    default:
      return state;
  }
};
export default reducer;
