import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Landing/Landing";
import NavBar from "../NavBar/NavBar"
import Classes from "../Classes/Classes"

export default function App() {
  return (
    <div className="wrapper">
      <NavBar/>
      <BrowserRouter className="pagebody">
        <Routes>
          <Route exact path = "/" element={<Landing/>}/>
          <Route path = "/classes" element={<Classes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
