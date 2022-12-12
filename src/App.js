import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./components/Description";
import Genre from "./components/Genre";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/genre/:_id" element={<Genre />} />
          <Route exact path="/description/:id" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
