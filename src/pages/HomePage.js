import React from "react";
import "../styles.css"
import BackLogo from "../Images/logo (1).png";
import { Link } from "react-router-dom";




export default function HomePage (){
    return(
<div className="homepage">
    <Link to="/page1">
    <img src={BackLogo} alt="backlogo" /></Link>


</div>
    );
};

