import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import project1 from "../Images/1_a.png";
import project2 from "../Images/2_a.png";
import project3 from "../Images/3_a.png";

export default function projectCard(){
   return(
<div>
<NavBar/>

<h1 className="projecth1"><Link className="p1" to="/projects">PROJECTS</Link></h1>
<div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={project1} className="fotos-carousel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={project2} className="fotos-carousel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={project3} className="fotos-carousel" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div> 
  );
};

