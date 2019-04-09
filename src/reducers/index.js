const initialState = {
  books: [
    {
      title: "JavaScript Programming.A Step-by-Step Guide for Absolute Beginners",
      author: "Brian Jenkins",
      id: 1,
    },
    {
      title: "Ugh, Code: A JavaScript Primer for the Slightly Less Enthused",
      author: "Peleg Rosenthal",
      id: 2,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
