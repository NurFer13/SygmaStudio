import React from "react";
import './navbar.css'; 
import { Link } from "react-router-dom";
import logoHome from "../Images/logo-arriba.png"
import logoLetras from "../Images/sygmastudio_letras.png"



 export default function NavBar(){
    return(
        <nav className="navbar">
       <Link to="/page1">
        <img src={logoHome} alt="logoHome" />
       </Link>
       <Link to="/home">
       <img src={logoLetras} alt="logoLetras" /></Link>

      
      </nav>
    );
 };