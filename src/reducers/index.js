import updateBookCart from './book-cart';
import updateBookList from './book-list';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    bookCart: updateBookCart(state, action),
  }
};
export default reducer;
