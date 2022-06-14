/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import { MainPage, PostListPage } from "./pages";

function App() {
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
}

export default App;
