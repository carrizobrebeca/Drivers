import style from "./landing.modules.css";
import { useNavigate } from "react-router-dom";

import React from 'react'

const Landing = () => {
    const navigate = new useNavigate();
  return (
    <div>
      
        <h1 >WELCOME</h1>
        <div class="container">
        <button class="button" onClick={() => navigate("/home")}>HOME</button>
        </div>
    </div>
  )
}

export default Landing