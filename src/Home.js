import React from 'react'
import web from "../src/images/mm5.jpg";
import { NavLink } from 'react-router-dom';
import Common from "./Common";
import Clock from "./Clock";


 const Home = ()=> {
   return (
     <>
     <Common 
     name = "welcome to portfolio"
     imgsrc = {web}
     visit = "./contact"
     btname = "Contact Now"
      />
      <Clock/>
     
     </>
   );
 };

export default Home;