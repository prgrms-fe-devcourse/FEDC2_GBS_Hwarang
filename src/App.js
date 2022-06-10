import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import MainPage from "./pages";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" elements={<MainPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
