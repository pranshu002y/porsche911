import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Intro from "./Intro";
import Photography from "./Photography";
const App =() => {
  return (
   
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/photography" element={<Photography/>}/>
          <Route path="/logout" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;



