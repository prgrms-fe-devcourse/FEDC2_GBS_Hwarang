import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
