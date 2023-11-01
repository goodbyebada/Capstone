import BookLists from "../component/BookList";
import AboutBook from "./AboutBook";
import { useLocation } from "react-router-dom";

import "../App.css";

function UserBooks() {
  const location = useLocation();
  const userName = location.state.userName;

  return (
    <div className="BooksDiv">
      <header className="introHeader">
        <h2> "{userName}님을 위한 오늘의 책은?"</h2>
        <p> 책을 추천해드려요! </p>
      </header>

      

      <div className="SetOfBooks">
        <BookLists />
        <BookLists />
        <BookLists />
      </div>
    </div>
  );
}
export default UserBooks;
