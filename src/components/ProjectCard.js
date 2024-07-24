import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import project1 from "../Images/1_a.png";
import ProCardcss from "./ProjectCard.module.css"

export default function projectCard(){
   return(
<div>
<NavBar/>

<h1 className="projecth1"><Link className="p1" to="/projects">PROJECTS</Link></h1>

<div className={ProCardcss.card}><Link className="projectCard" to="../projects">
  <img src={project1} className="card-image1" alt="..."/>
  <div className={ProCardcss.card-body}>
    <h2 className={ProCardcss.card-title}>WHAT'S BEHIND</h2>
    <p className="card-text">Competition Festival Model Temple – Barcelona</p>
  </div></Link>
</div>
</div> 
  );
};

