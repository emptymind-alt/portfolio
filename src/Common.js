import React from 'react'
import web from "../src/images/mm5.jpg";
import { NavLink } from 'react-router-dom';

 const Common = (props)=> {
   return (
     <>
     <section id ="header" className= "d-flex align-items-center">
     <div className = "container-fluid nav_bg">
            <div className = "row">
                 <div className = "col-10 mx-auto">
                   <div className = "row">
                   <div className = "col">
                     </div>
                     <div className = "col">
                     </div>
                     <div className = "col">
                     </div>
                     
                   <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                     <h2>{props.name}<strong className = "brand-name">  Manas</strong></h2>
                     <h3 className = "my-3">
                       Awesome developer</h3>
                       <div className = "mt-3">
                         <NavLink to = {props.visit} className = "btn-get-started">Get started</NavLink>
                         </div>
                         
                         
                   </div>
                   
                   <div className = "col-lg-5 order-2 order-lg-2 header-img">
                     <img src = {props.imgsrc} className="circle" alt="Cinque Terre" width="304" height="236"/>
                    
                     </div>
                     </div>
                  </div>
                 </div>
                 </div>
              
                 
       </section>
       
     
     </>
   );
 };

export default Common;