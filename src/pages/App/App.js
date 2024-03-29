import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar"
import Sponsors from "../Sponsors/Sponsors"
import Classes from "../Classes/Classes"
// import Footer from "../Footer/Footer"
import AboutUs from "../AboutUs/AboutUs"
import Schedule from "../Schedule/Schedule"

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter className="pagebody">
        <NavBar/>
        <Routes>
          <Route exact path = "/" element ={<Home/>}/>
          <Route path = "/sponsors" element={<Sponsors/>}/>
          <Route path = "/classes" element={<Classes/>}/>
          <Route path = "/aboutus" element={<AboutUs/>}/>
          <Route path = "/schedule" element={<Schedule/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
