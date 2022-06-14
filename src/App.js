/** @format */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import { useSetRecoilState } from "recoil";
import { postManager } from "recoil/post";
import getAllPost from "repository/postRepository";
<<<<<<< HEAD
import { MainPage, PostListPage } from "./pages";
=======
import MainPage from "./pages";
>>>>>>> 0e4ee6c ([feat]: recoil에 post 정보 저장 및 main post 리스트 연동 완료)

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
        </Routes>
      </Router>
    </div>
  );
  // return (
  //   <div>
  //     <PostListFilter />
  //   </div>
  // );
}

export default App;
