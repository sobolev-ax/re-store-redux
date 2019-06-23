export default class BookstoreService {

  data = [
    {
      title: "JavaScript Programming.A Step-by-Step Guide for Absolute Beginners",
      author: "Brian Jenkins",
      id: 0,
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51pbZcPOroL._SX331_BO1,204,203,200_.jpg',
    },
    {
      title: "Ugh, Code: A JavaScript Primer for the Slightly Less Enthused",
      author: "Peleg Rosenthal",
      id: 1,
      price: 64,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/312Su5gULgL.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          console.error('Math.random() > 0.95');
          reject( new Error("Somthing went wrong..."));
        } else {
          resolve(this.data)
        }
      }, 700);
    });
  };

};
