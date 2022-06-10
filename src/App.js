/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages";

function App() {
  return (
    // test 2
    <div>
      <MainPage />
      <Router>{/* 여기에 react router dom code를 작성하시면 됩니다 */}</Router>
    </div>
  );
}

export default App;
