import NavBar from "../components/NavBar.js";
import project1 from "../Images/p1/1_a.png";
import project2 from "../Images/p2/2_a.png";
import project3 from "../Images/p3/3_a.png";
import project4 from "../Images/p4/4_a.png";
import project5 from "../Images/p5/5_a.png";
import project6 from "../Images/p6/6_a.png";
import project7 from "../Images/p7/7_a.png";
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
  <img src={project1} className="card-image2" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">WHAT'S BEHIND</h2>
    <p className="card-text">Competition Festival Model</p>
    <p className="card-text">  January 2023 </p>
    <p className="card-text">Temple – Barcelona </p>

  </div></Link>
</div>
</div>

<div class="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project2} className="card-image2" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">LAKE CHAPEL</h2>
    <p className="card-text">Competition Reuse Italy</p>
    <p className="card-text">February 2022</p>
    <p className="card-text">Pilgrim Ceter - San Giovani in Val di Lago</p>


  </div></Link>
</div>
</div>
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project3} className="card-image3" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">MUTUALISM</h2>
    <p className="card-text">Competition Europan'17</p>
    <p className="card-text">June 2023</p>
    <p className="card-text">Civic building - Eibar</p>
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
    <p className="card-text">Competition Reuse Italy</p>
    <p className="card-text">February 2021</p>
    <p className="card-text">Concert Hall - Chiesa Diruta</p>

  </div></Link>
</div></div>
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project5} className="card-image5" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CASA GV506</h2>
    <p className="card-text">Private client</p>
    <p className="card-text">September 2024</p>
    <p className="card-text">Integral reform - Barcelona</p>
  </div></Link>
</div></div>
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project6} className="card-image6" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CENTRO FMG</h2>
    <p className="card-text">Private client</p>
    <p className="card-text">In progress</p>
    <p className="card-text">New Construction - Alcañiz</p>
  </div></Link>
</div></div>
</div>

<div className="row">
<div className="col">
<div className="card"><Link className="projectCard" to="../projectcard">
  <img src={project7} className="card-image7" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">CASA SV13</h2>
    <p className="card-text">Private client</p>
    <p className="card-text">December 2023</p>
    <p className="card-text">Internal reform - Menorca</p>
  </div></Link>
</div></div></div>

</div>
</>
    );
};