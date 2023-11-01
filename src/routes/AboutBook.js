import "./AboutBook.css";
import SingleBook from "../component/SingleBook";
import { useNavigate, Link } from "react-router-dom";
import BookReview from "../component/BookReview";
import { useState } from "react";

function AboutBook({ id }) {
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  const [starRate, setStarRate] = useState(3.5);
  const [enroll, setEnroll] = useState(false);
  // enroll 간단한 구현 위해서 일단 !enroll로 설정 -> 재구현 필

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangeStar = (e) => {
    setStarRate(e.target.value);
  };

  let goBack = () => {
    navigate(-1);
  };

  const signUP = (e) => {
    e.preventDefault();
    console.log(value);
    setEnroll(true);
  };

  return (
    <div>
      <header className="AboutHeader"> About Book</header>
      <div>
        <button className="GetBack" onClick={goBack}>
          이전 페이지로 돌아가기{" "}
        </button>

        <div className="Top">
          <div className="Bookpic"></div>
          <div className="Details">
            <p>책 이름: example</p>
            <p>작가: example</p>
            <p> 대출 정보: example</p>
            <p> 줄거리: example </p>
          </div>
        </div>
        <div className="Contents">
          <div className="Index">
            <h2>목차</h2>
            <li> 1.example</li>
            <li> 2.example</li>
            <li> 3.example</li>
          </div>
          <div className="Review">
            <h2>서평</h2>
            <form onSubmit={signUP}>
              <p>
                별점:
                <input
                  value={starRate}
                  className="StarRating"
                  placeholder="별점을 입력해주세요"
                  onChange={onChangeStar}
                ></input>
              </p>

              <input
                value={value}
                className="Input"
                placeholder="서평을 입력해주세요"
                onChange={onChange}
              ></input>
              <button>등록</button>
            </form>
            {enroll == true ? (
              <div className="ReviewContent">
                <p>작성자: {starRate}</p>
                <p>별점: {starRate}</p>
                <p>서평: {value}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="Location">
            <h2>소장정보</h2>
            <li> 소장위치:한국시문학관(2층) </li>
            <li> 청구기호: 시 811.16 나818ㅇㅅ</li>
          </div>
        </div>

        {/* 이 작품과 유사한 추천 작품 */}
        <div className="RecommandBooks">
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
    </div>
  );
}

export default AboutBook;
