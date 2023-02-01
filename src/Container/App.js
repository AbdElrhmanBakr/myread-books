import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "../Container/BooksAPI";
import MainPage from "../Routes/MainPage";
import SearchPage from "../Routes/SearchPage";
import NotFound from "../Routes/NotFound";
import "./App.css";
// import DefaultBooks from './DefaultBooks'

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  // Initail State used as Test to display Books in Book.js
  // that was Given with the Starter Code, Now It's not needed any more
  // const [DefBooks,setDefBooks] = useState(DefaultBooks)

  // State --> For AllBooks Displayed on HomePage
  const [AllBooks, setAllBooks] = useState([]);

  // Function --> Update Book Shelf in HomePage
  const changeBookShelf = (event, book) => {
    let newTarget = event.target.value;
    setAllBooks((prevBooks) => {
      return prevBooks.map((b) => {
        return b.id === book.id ? { ...b, shelf: newTarget } : b;
        // return book.id === id ? Object.assign( {} , book , {shelf:newTarget} ) : book
      });
    });
    BooksAPI.update(book, newTarget);
  };

  // Get All books Needed to be displayed on HomePage
  // and update it every time Tiger is changed from the SearchPage
  // After changing on of the Book's Shelf there in SearchPage
  useEffect(() => {
    const getAPIBooks = async () => {
      try {
        const booksData = await BooksAPI.getAll();
        setAllBooks(booksData);
      } catch (error) {
        console.log(error);
      }
    };
    getAPIBooks();
  }, []);

  return (
    <Routes className="app">
      <Route
        path="/search"
        element={
          <SearchPage
            AllBooks={AllBooks}
            setAllBooks={setAllBooks}
            handleClick={changeBookShelf}
            showSearchPage={showSearchPage}
            setShowSearchpage={setShowSearchpage}
          />
        }
      />
      <Route
        exact
        path="/"
        element={
          <MainPage AllBooks={AllBooks} changeBookShelf={changeBookShelf} />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
