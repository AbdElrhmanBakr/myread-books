import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "../Components/Book";
import * as BooksAPI from "../Container/BooksAPI";

const SearchPage = ({ AllBooks, setAllBooks, handleClick }) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState("");

  // Function --> Triges the State [setChangeTriger] Every Time we Change one of the books Shelf
  // in the resulted search in SearchPage and update that with [BooksAPI.update] function in BooksAPI.js
  const updateMainPageBooks = (event, book) => {
    const updatedShelf = event.target.value;
    const updateMainBooks = async () => {
      await BooksAPI.update(book, updatedShelf);
      const res = await BooksAPI.getAll();
      setAllBooks(res);
    };
    updateMainBooks();
  };

  // --> Mapping over the Final Resulted Books, Removing books with missing thumbnails
  // then Matching Shelf State in SearchPage with the Books State in the HomePage
  // So taht They are identical in State
  const filterBooks = searchedBooks
    .filter((b) => b.hasOwnProperty("imageLinks"))
    .filter((book) =>
      AllBooks.map((b) => {
        if (book.id === b.id) {
          book.shelf = b.shelf;
          return book;
        } else {
          return book;
        }
      })
    )
    .map((newbook) => (
      <Book key={newbook.id} book={newbook} handleClick={updateMainPageBooks} />
    ));

  // --> Run Every time the user put a value in the InpuBox
  // and Search for the result in search Function in BooksAPI.js
  // and handle the Error With no value Entered and Hanlde the Error with result Error
  useEffect(() => {
    const onSearchChange = async () => {
      if (query.length > 0) {
        const result = await BooksAPI.search(query);
        result.error ? setSearchedBooks([]) : setSearchedBooks(result);
      } else {
        setSearchedBooks([]);
      }
    };
    onSearchChange();
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => setQuery(event?.target?.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{filterBooks}</ol>
      </div>
    </div>
  );
};

export default SearchPage;
