import NavBar from "./NavBar";
import comingsoon from "../Images/comingsoon.png";



import { Link } from "react-router-dom";

export default function projectCard(){
   return(
<>
<NavBar/>
<img src={comingsoon} className="comingsoon" alt="..."/>

</>
  );
};

