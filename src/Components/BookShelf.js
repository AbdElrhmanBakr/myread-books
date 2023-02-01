import Book from "./Book";

const BookShelf = ({ AllBooks, handleClick, shelfName }) => {
  // --> Mapping all over the Books coming From HomePage and pass every Single Book
  // to [Book] Component so that it can be displayed in the HomePage
  const filterBooksArray = AllBooks.filter(
    (book) => book.shelf === shelfName
  ).map((book) => <Book key={book.id} book={book} handleClick={handleClick} />);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{filterBooksArray}</ol>
      </div>
    </div>
  );
};

export default BookShelf;
