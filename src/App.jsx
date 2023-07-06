import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import About from "./About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        {/* <Route path="/PictureShow" element={<About />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
