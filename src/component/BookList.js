import SingleBook from "./SingleBook";

function BookLists({ infoList }) {
  return (
    <div className="BooksLists">
      {/* 이전에 읽었던 작품 */}
      <div className="BorrowBook">
        <SingleBook genres={"genres"} />
      </div>

      {/* 추천 작품 */}

      <div className="RecommandBooks">
        {/* <div> */}
        {infoList &&
          infoList.map((e) => (
            <SingleBook
              id={e.itemId}
              cover={e.cover}
              title={e.title}
              summary={e.description}
              author={e.author}
              className="SingleBook"
            />
          ))}
      </div>
    </div>
  );
}
export default BookLists;
