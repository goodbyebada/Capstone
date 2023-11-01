import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Books from "./Books";
import UserBooks from "./routes/UserBooks";
import AboutBook from "./routes/AboutBook";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/UserBooks" element={<UserBooks />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/AboutBook" element={<AboutBook />} />
      </Routes>
    </Router>
  );
}

export default App;
