import React from 'react'
import LogoutButton from '../components/LogoutButton';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../css/NavBar.css"

const NavBar=()=>{
    return(
        <nav>
        <ul className="NavBar">
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/Images">Imagenes</Link>
          <LogoutButton />
        </ul>
      </nav>
    )
}
export default NavBar;