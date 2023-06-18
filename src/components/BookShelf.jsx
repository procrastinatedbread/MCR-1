import { useEffect, useState } from "react";
import { fakeFetch } from "../constants";
import Book from "./Book";
import { NavLink } from "react-router-dom";

const BookShelf = () => {
  const [books, setBooks] = useState([]);

  const url = "https://example.com/api/books";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setBooks(data.books);
    };
    innerFunction();
  }, []);

  const handleCategoryChange = (id, category) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, category };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <>
      <NavLink to="/search">Go to Search Page</NavLink>
      <h1>Book Shelf</h1>
      <div className="bookshelf">
        <h2>Currently Reading</h2>
        {books
          .filter((book) => book.category === "reading")
          .map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                handleCategoryChange={handleCategoryChange}
              />
            );
          })}
      </div>
      <div className="bookshelf">
        <h2>Want to Read</h2>
        {books
          .filter((book) => book.category === "wantToRead")
          .map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                handleCategoryChange={handleCategoryChange}
              />
            );
          })}
      </div>
      <div className="bookshelf">
        <h2>Read</h2>
        {books
          .filter((book) => book.category === "read")
          .map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                handleCategoryChange={handleCategoryChange}
              />
            );
          })}
      </div>
      {/* <div className="bookshelf">
        <h2>Want to Read</h2>
        {books
          .filter((book) => book.category === "none")
          .map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                handleCategoryChange={handleCategoryChange}
              />
            );
          })}
      </div> */}
    </>
  );
};
export default BookShelf;
