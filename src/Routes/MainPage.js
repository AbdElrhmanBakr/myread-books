import Header from "../Components/Header";
import AllBookShelves from "../Components/AllBookShelves";
import { Link } from "react-router-dom";

const MainPage = ({ AllBooks, changeBookShelf }) => {
  return (
    <div className="list-books">
      <Header />
      <AllBookShelves AllBooks={AllBooks} handleClick={changeBookShelf} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
