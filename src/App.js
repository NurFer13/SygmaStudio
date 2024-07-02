import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Projects from "./pages/projects.js";
import Page1 from "./pages/Page1.js";
import ProjectCard from "./components/ProjectCard.js";



function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element = { <HomePage/>}/>
      <Route path= "/home" element= { <HomePage/>}/>
      <Route path= "/about" element= { <About/>}/>
      <Route path= "/contact" element= { <Contact/>}/>
      <Route path= "/projects" element= { <Projects/>}/>
      <Route path= "/page1" element= { <Page1/>}/>
      <Route path= "/projectcard" element= { <ProjectCard/>}/>






    </Routes>

    </BrowserRouter>


   </div>
  );
}

export default App;
