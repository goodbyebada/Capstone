import singleBook from "./SingleBook";

import SingleBook from "./SingleBook";

function BookLists() {
  return (
    <div className="BooksLists">
      {/* 이전에 읽었던 작품 */}
      <div className="BorrowBook">
        <SingleBook genres={"genres"} />
      </div>

      {/* 추천 작품 */}

      <div className="RecommandBooks">
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
        <SingleBook />
      </div>
    </div>
  );
}
export default BookLists;
