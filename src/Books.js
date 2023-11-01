import BookLists from "./component/BookList";
import AboutBook from "./routes/AboutBook";
import "./App.css";

import { NavLink, Link } from "react-router-dom";

function Books() {
  return (
    <div className="BooksDiv">
      <NavLink to="/loginpage" className="Login">
        login
      </NavLink>
      <header className="introHeader">
        <h2> "오늘의 책은?"</h2>
        <p> 책을 추천해드려요! </p>
      </header>

      <div className="SetOfBooks">
        <BookLists />
        <BookLists />
        <BookLists />
        <BookLists />
      </div>
    </div>
  );
}
export default Books;
