import NavBar from "../components/NavBar.js";
import project1 from "../Images/1_a.png";
import project2 from "../Images/2_a.png";
import project3 from "../Images/3_a.png";
import project4 from "../Images/4_a.png";
import project5 from "../Images/5_a.png";
import project6 from "../Images/6_a.png";
import project7 from "../Images/7_a.png";
import { Link } from "react-router-dom";

export default function Projects (){
    return(
<>
<NavBar/>
<h1 className="projecth1">PROJECTS</h1>

<div className="proyectitos ">

<div className="row">

<div class="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project2} className="card-image2" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">LAKE CHAPEL</h2>
    <p className="card-text">Competition Reuse Italy - Pilgrim Ceter - San Giovani in Val di Lago</p>
  </div></Link>
</div>
</div>
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project3} className="card-image3" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">MUTUALISM</h2>
    <p className="card-text">Competition Europan'17 - Civic building - Eibar</p>
  </div></Link>
</div>
</div>
</div>

<div className="row">
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project4} className="card-image4" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CHIESA DIRUTA</h2>
    <p className="card-text">Competition Reuse Italy -Concert Hall - Chiesa Diruta</p>
  </div></Link>
</div></div>
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project5} className="card-image5" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CASA GV506</h2>
    <p className="card-text">Private client - Integral reform - Barcelona</p>
  </div></Link>
</div></div>
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project6} className="card-image6" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CENTRO FMG</h2>
    <p className="card-text">Private client - New Construction - Alcañiz</p>
  </div></Link>
</div></div>
<div className="row">
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project7} className="card-image7" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CASA SV13</h2>
    <p className="card-text">Private client - Internal reform - Menorca</p>
  </div></Link>
</div></div></div>
</div>
</div>
</>
    );
};