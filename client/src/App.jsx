import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Views/Home/Home.jsx";
import "./App.css";
//import Landing from "./Views/Landing/Landing";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";
//import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={Form} />
          <Route path="/details:id" element={Details} />
          <Route path="/home" element={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
