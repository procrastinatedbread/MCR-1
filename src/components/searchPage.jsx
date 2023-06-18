import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { fakeFetch } from "../constants";
import Book from "./Book";

const SearchPage = () => {
  const [books, setBooks] = useState([]);

  const url = "https://example.com/api/books";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setBooks(data.books);
    };
    innerFunction();
  }, []);
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.trim())
  );
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
      <NavLink to="/">Go back to Home Page</NavLink>
      <br />
      <input
        type="text"
        placeholder="Search your book here"
        onChange={handleChange}
      />
      {filteredBooks.map((book) => {
        return (
          <Book
            key={book.id}
            book={book}
            handleCategoryChange={handleCategoryChange}
          />
        );
      })}
    </>
  );
};
export default SearchPage;
