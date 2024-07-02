import NavBar from "../components/NavBar.js";
import officepic from "../Images/officesentados.jpeg"



export default function About (){
    return(
<>
<NavBar/>
<h1 className="officename">OFFICE</h1>
<div className="container">
<div className="office container">
    <img className="officepic" src={officepic} alt="officepic" /></div>
   <div className="officetext"> <p>sygm<span className="bold">a</span>.studio is an architectural research based on traditional
         architecture that aims to explore the relationship between 
         art, space, inhabitant, experience, object, and details</p></div>

</div>

</>
    );
};