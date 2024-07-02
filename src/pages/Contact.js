import NavBar from "../components/NavBar.js";
import { Link } from "react-router-dom";


export default function Contact(){
    return(
<>
<NavBar/>
<h1 className="contacttittle">CONTACT</h1>
<div className="contact">
    <ul>
<li><h2>follow us!   <Link to="https://www.instagram.com/sygma.studio/" target="" rel=""><i class="fa-brands fa-instagram"></i></Link></h2></li>
<li><h2>sygmarchstudio@gmail.com</h2></li>
<li><h2>+34 681 28 92 57</h2></li>
<li>
<li>s.andra juan sánchez</li>
<li>y.annick marqués schröder</li>
<li>g.uillem florit bosch</li>
<li>m.arina gracia montaner</li>
</li>
</ul>
</div>
</>
    );
};