import React from 'react';
import web from "../src/images/mm5.jpg";
import { NavLink } from 'react-router-dom';
import './main.css';

 const Common = (props)=> {
   return (
     <>
     <section id ="header" className= "d-flex align-items-center">
     <div className = "container-fluid ">
            <div className = "row">
                 
                   
               <div className = "col-md-5 pt-5 pt-lg-0 order-2 order-lg-1   flex-column justify-content-left">
                     <h1>{props.name}<strong className = "brand-name justify-content-left">  Manas Sahoo</strong></h1>
                     <span className = "goldy">
                       Senior Developer</span>
                       <div className = "mt-3">
                         <NavLink to = {props.visit} className = "btn-get-started">Get started</NavLink>
                         </div>
                         
                         
                   </div>
                   
                   <div className = "col-4  col-lg-3 order-3 order-lg-2 header-img ">
                     <img src = {props.imgsrc} className="circle" alt="Cinque Terre" max-width="150" height="180"/>
                    
                     </div>
                     </div>
                  </div>
                
              
                 
       </section>
       
     
     </>
   );
 };

export default Common;