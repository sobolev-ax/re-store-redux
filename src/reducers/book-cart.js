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
  const { books } = state.bookList;
  const { cartBooks } = state.bookCart;
  const book = books.find(item => item.id === id);

  const orderedBook = cartBooks.find(item => item.idx === id);
  const oldIndex = cartBooks.indexOf(orderedBook);

  const newBook = createNewItem(book, orderedBook, quantity);

  return {
    cartTotal: 0,
    cartBooks: updateCartItems(cartBooks, newBook, oldIndex),
  }
}

const updateBookCart = (state, action) => {
  if (state === undefined) {
    return {
      cartBooks: [],
      cartTotal: 0,
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateItem(state, action.payload, 1);
    case 'BOOK_DELETED_FROM_CART':
      return updateItem(state, action.payload, -1);
    case 'ALL_BOOK_DELETED_FROM_CART':
      const deletedBook = state.bookCart.cartBooks.find(item => item.idx === action.payload);
      return updateItem(state, action.payload, -deletedBook.count);
    default:
      return state.bookCart;
  }
}
export default updateBookCart;
