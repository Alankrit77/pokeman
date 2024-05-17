import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
