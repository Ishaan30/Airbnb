import React from "react";
import "./App.css";
import Home from "./Home";

import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <LoginPage/> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Routes>
          <Route path="/search" element={<SearchPage />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
