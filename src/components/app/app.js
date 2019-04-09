import React from 'react';
import { withBookService } from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return (
    <h2>Hello World</h2>
  );
};
export default withBookService()(App);
