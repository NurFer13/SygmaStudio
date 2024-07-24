import NavBar from "./NavBar";
import project11 from "../Images/p1/1_a.png";
import project12 from "../Images/p1/1_b.png";
import project13 from "../Images/p1/1_c.png";
import project14 from "../Images/p1/1_d.png";
import project15 from "../Images/p1/1_e.png";

import { Link } from "react-router-dom";

export default function projectCard(){
   return(
<>
<NavBar/>
<div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={project11} className="d-block w-100" alt="picture 1"/>
    </div>
    <div className="carousel-item">
      <img src={project12} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={project13} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  );
};

