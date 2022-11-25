import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Genre from "./components/Genre";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/genre" element={<Genre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
