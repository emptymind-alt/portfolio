import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import  { Switch, Route, Redirect} from "react-router-dom";
import Keep from "./Keep";
import { NavLink } from 'react-router-dom';


 const App = ()=> {
   return (
     <>
     <header>
     <Navbar />
     </header>
     <Switch>
       <Route exact path ="/" component = {Home}/>
       <Route  exact path ="/about" component = {About}/>
       <Route  exact path ="/services" component = {Services}/>
       <Route  exact  path ="/contact" component = {Contact}/>
       <Route  exact  path ="/keep" component = {Keep}/>
       <Redirect to ="/"/>
     <Home/>
     </Switch>
     
    
     

     </>
   );
 };

export default App;