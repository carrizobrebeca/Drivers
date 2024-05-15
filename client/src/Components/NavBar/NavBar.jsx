import React from 'react'
import SearchBar from "../SearchBar/SearchBar"
import { useNavigate } from 'react-router-dom'
import stype from "./nav.modules.css";
const NavBar = () => {
  const navigate = new useNavigate();
  return (
    <div className={style.container}>
      <button onClick={()=> navigate("/home")}>HOME</button>
      <button onClick={()=> navigate("/about")}>DETAIL</button>
      <button onClick={()=> navigate("/form")}>FORM</button>
    <SearchBar />
    </div>
    
  )
}

export default NavBar