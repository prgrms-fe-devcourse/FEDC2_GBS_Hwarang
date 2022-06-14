/** @format */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import { useSetRecoilState } from "recoil";
import { postManager } from "recoil/post";
import { Footer } from "components";
import getAllPost from "repository/postRepository";
import { MainPage, PostListPage, UserPage } from "./pages";

function App() {
  const setPosts = useSetRecoilState(postManager);
  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await getAllPost();
        setPosts(posts);
      } catch (exception) {
        console.log("error", exception);
      }
    }
    fetchData();
  }, []);

  return (
    // test 2
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/travel-destination" element={<PostListPage />} />
          <Route path="mypage" element={<UserPage />} />
          <Route path="*" element={<div>Not Found!</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
