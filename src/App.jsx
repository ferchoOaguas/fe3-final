import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path='/home' element={<h1>Home</h1>}/> */}
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>Page not found</h1>} /> 
        </Routes>
  </>
  );
}

export default App;


