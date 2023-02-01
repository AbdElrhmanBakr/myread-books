const BookShelfChanger = ({ book, changeShelfState }) => {
  // --> Check Whether the book has Shelf or Not
  // If [true] ==> Then this Book Will heave shelf value of it own
  // and Means this book is coming from HomePage
  // If [false] ==> Then this Book will have Default value of "none"
  // and Means this book is coming from SearchPage and not putted in any shelf yet
  const checkBookShelf = book.shelf ? book.shelf : "none";

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => changeShelfState(event, book)}
        defaultValue={checkBookShelf}
      >
        <option value="noValue" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
