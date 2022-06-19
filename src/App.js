/** @format */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import {
  loginStatus,
  isTokenExist,
  isUserAuthenticated,
} from "recoil/authentication";
import { userInfo } from "recoil/user";
import { postManager } from "recoil/post";
import { Footer } from "components";
import getAllPost from "repository/postRepository";
import { MainPage, PostListPage, UserPage } from "./pages";
// import Auth from "./hoc";

function App() {
  // component
  const MainPageComponent = Auth(MainPage);
  const PostListPageComponent = Auth(PostListPage);
  const UserPageComponent = Auth(UserPage);

  const setPosts = useSetRecoilState(postManager);
  const [isLogined, setIsLogined] = useRecoilState(loginStatus);
  const TokenExist = useRecoilValue(isTokenExist);
  const {
    contents: { isTokenValid, userData },
  } = useRecoilValueLoadable(isUserAuthenticated);
  const setUserInfo = useSetRecoilState(userInfo);

  useEffect(() => {
    if (!isLogined && TokenExist) {
      if (isTokenValid) {
        setIsLogined(true);
        console.log(userData);
        setUserInfo(userData);
      }
    }
  }, [isLogined, TokenExist, isTokenValid, userData]);

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
          <Route path="/" element={<MainPageComponent />} />
          <Route
            path="/travel-destination"
            element={<PostListPageComponent />}
          />
          <Route path="userpage/:ID" element={<UserPageComponent />} />
          <Route path="*" element={<div>Not Found!</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
