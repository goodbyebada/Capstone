import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./LoginPage.css";
import axios from "axios";
import {
  BrowserRouter as Link,
  Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import UserBooks from "./UserBooks";

function LoginPage() {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  // const [idState, setIdState] = useState(false);
  const navigate = useNavigate();

  const url =
    "https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/login";

  const handleInputId = (e) => {
    setInputID(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPW(e.target.value);
  };

  let nextPage = 0;

  const loginFun = (e) => {
    e.preventDefault();

    login(
      inputID,
      inputPW,
      () => {
        alert("login success");
        // setIdState(!idState);
        navigate("/UserBooks", {
          state: {
            userName: `${inputID}`,
          },
        });
        // // 경로이동
      },
      () => alert("fail")
    );
  };

  let baseUrl = "https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io";
  function login(id2, password2, onSuccess, onFail) {
    let url = baseUrl + "/login";

    let body = {
      id: id2,
      password: password2,
    };

    axios.post(url, body).then((response) => {
      if (response.status == 200) {
        onSuccess();
      } else {
        onFail();
      }
    });
  }

  return (
    <div className="loginPage">
      <div className="loginForm">
        <form className="borderBox">
          <p>로그인 화면</p>
          <div className="row">
            <input
              type="text"
              placeholder="id"
              value={inputID}
              onChange={handleInputId}
            ></input>
          </div>
          <div className="row">
            <input
              type="password"
              placeholder="password"
              value={inputPW}
              onChange={handleInputPw}
            ></input>
          </div>

          <button>회원가입</button>
          <button type="submit" onClick={loginFun}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
