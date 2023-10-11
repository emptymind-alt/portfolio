import React from 'react'
import web from "../src/images/cool.jpg";
import { NavLink } from 'react-router-dom';
import Common from "./Common";


 const Home = ()=> {
   return (
     <>
     <div className="google">
     <Common 
  
     name = ""
     imgsrc = {web}
     visit = "./"
     btname = "Contact Now"
      />
      </div>
     
     </>
   );
 };

export default Home;