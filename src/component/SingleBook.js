import "./Book.css";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function SingleBook({ id, cover, title, summary, author }) {
  const navigate = useNavigate();
  const location = useLocation();
  // const userName = location.state.userName;
  // const [state, setStae] = useState(false);

  function goToAbout() {
    navigate("/AboutBook");
  }

  return (
    <div className="SingleBook" onClick={goToAbout}>
      {/* {genres != null ? genres : ""} */}
      <div className="Bookpic"> </div>
      <img src={cover}></img>
      <p>{title}</p>
      <p> id : {id}</p>
      <p>summary: {summary}</p>
      <p>author :{author}</p>
      <p> 대출정보</p>
    </div>
  );
}

export default SingleBook;
