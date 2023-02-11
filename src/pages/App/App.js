import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar"
import Classes from "../Classes/Classes"
import Footer from "../Footer/Footer"

export default function App() {
  return (
    <div className="wrapper">
      <NavBar/>
      <BrowserRouter className="pagebody">
        <Routes>
          <Route exact path = "/" element ={<Home/>}/>
          <Route path = "/classes" element={<Classes/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
