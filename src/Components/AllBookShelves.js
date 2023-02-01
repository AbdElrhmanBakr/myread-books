import BookShelf from "./BookShelf";

const AllBookShelves = ({ AllBooks, handleClick }) => {
  // --> Initializing All Shelves Names and mapping over them
  // With calling [BookShelf] Component
  const allShelvesArray = ["currentlyReading", "wantToRead", "read"].map(
    (shelf) => (
      <BookShelf
        AllBooks={AllBooks}
        handleClick={handleClick}
        shelfName={shelf}
        key={shelf}
      />
    )
  );
  return <div className="list-books-content">{allShelvesArray}</div>;
};

export default AllBookShelves;
