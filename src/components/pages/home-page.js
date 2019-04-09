import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  return (
    <div>
      <BookList books={[
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
    ]} />
    </div>
  );
};
export default HomePage;