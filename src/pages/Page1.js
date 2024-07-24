import NavBar from "../components/NavBar.js";
import { Link } from "react-router-dom";

export default function Page1 (){
    return(
        <>

<NavBar/>
<div className="page1">
    <ul><Link className="p1" to="/projects">PROJECTS</Link> </ul>
    <ul><Link className="p1" to="/about">OFFICE</Link> </ul>
    <ul><Link className="p1"to="/contact">CONTACT</Link>
    </ul></div>

</>
    );
};