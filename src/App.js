import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience";
import Activities from "./Activities";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Footer from "./Footer";
import  { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Interests from "./Interests";
import { NavLink } from 'react-router-dom';
import './main.css';


 const App = ()=> {
   return (
     <>
     <body className="super">
     <header>
     <Navbar />
     </header>
   
     <Routes >
       <Route path="/" element={<Home/>} />
    
       <Route  path ="/Education" element= {<Education/>}/>
       <Route  path ="/Experience" element= {<Experience/>}/>
       <Route   path ="/skills/*" element= {<Skills/>}/>
       <Route  path ="/Activities" element = {<Activities/>}/>
       <Route   path ="/Interests/*" element= {<Interests/>}/>
       <Route to ="/"/>
        </Routes>
     
     
     
     </body>
     
     
    
     

     </>
   );
 };

export default App;