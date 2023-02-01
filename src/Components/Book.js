import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, handleClick }) => {
  // --> Check Whether the Book has Authors Array or Not
  // If [true]  ==> Convert that Array to a String and add comma with Space Between authors Name
  // If [false] ==> the Default value will => "No Author"
  const authorCheck = book.authors ? book.authors.join(", ") : "No Author";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <BookShelfChanger
            book={book}
            defShelf={book.shelf}
            changeShelfState={handleClick}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authorCheck}</div>
      </div>
    </li>
  );
};

export default Book;
