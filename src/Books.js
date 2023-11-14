import BookLists from "./component/BookList";
import AboutBook from "./routes/AboutBook";
import "./App.css";

import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Books() {
  // const url = `https://yts.mx/api/v2/list_movies.json?&minimum_rating=8.0&sort_by=year&genre=romance`;
  const url = ``;
  const [list0, setList0] = useState([]);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [list4, setList4] = useState([]);

  const getInfo = async () => {
    const json = await (await fetch(url)).json();
    // setList0(json.data.item);
    // console.log(json.data.item);

    setList0(json.data.item);
    // console.log(json.data.movies);
  };

  useEffect(() => {
    getInfo();
  }, []);

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
        <BookLists infoList={list0} />

        {/* <BookLists /> */}
        {/* <BookLists /> */}
        {/* <BookLists /> */}
      </div>
    </div>
  );
}
export default Books;
