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
import { getAllPosts } from "api/post-api";
import { allPost } from "recoil/post";
import TaskProvider from "contexts/TaskProvider";
import { Footer } from "components";
// eslint-disable-next-line import/named
import { MainPage, PostListPage, UserPage, PostPage } from "./pages";
import Auth from "./hoc";
import "./utils/date";

function App() {
  const setPosts = useSetRecoilState(allPost);

  // component
  const MainPageComponent = Auth(MainPage);
  const PostListPageComponent = Auth(PostListPage);
  const UserPageComponent = Auth(UserPage);

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
        setUserInfo(userData);
      }
    }
  }, [isLogined, TokenExist, isTokenValid, userData]);

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await getAllPosts();
        await setPosts(posts);
        if (!isLogined && TokenExist) {
          if (isTokenValid) {
            setIsLogined(true);
            setUserInfo(userData);
          }
        }
      } catch (exception) {
        console.error("error", exception);
      }
    }
    fetchData();
  }, [isTokenValid]);

  return (
    // test 2
    <div>
      <TaskProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPageComponent />} />
            <Route
              path="/travel-destination/:Options"
              element={<PostListPageComponent />}
            />
            <Route path="userpage/:ID" element={<UserPageComponent />} />
            <Route path="/post/create" element={<PostPage />} />
            <Route path="/post/edit/:ID" element={<PostPage />} />
            <Route path="/post/detail/:ID" element={<PostPage />} />
            <Route path="*" element={<div>Not Found!</div>} />
          </Routes>
          <Footer />
        </Router>
      </TaskProvider>
    </div>
  );
}

export default App;
