import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import Common from "./Common";
import './main.css';


 const Activities = ()=> {
   const [city, setCity] = useState("null");
   const [search, setSearch] = useState("kolkata");
   useEffect(() => {
     const fetchApi = async () => {
       const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=efcf0fa892fd4439a06f17b70d1aed01`
       const response =await fetch(url);
       //response 
       const resJson = await response.json();
       console.log (resJson);
       setCity (resJson.main);
     }
     fetchApi();
    },[search]
    )
   
  

   return ( 
     <>
     <div className="honest">
     <div className = "text-center">
     <h1>Real-time Weather </h1>
     
     </div>
     <div className = "box">
       <div className = "inputData">
         <label className= "">Enter City</label><br/>
         <input type = "search" className = "inputField" onChange = {(event)=>{ setSearch(event.target.value)}}/>
         </div>
         {!city ? (<p>Data not found</p>) : (
           <div>

<div className = "info">
<h2 className = "location">
<i class="fas fa-street-view"></i>{search}

  </h2>
  <h1 className = "temp">
   {city.temp}{"    "}<i class="fas fa-cloud-sun-rain"></i>
  </h1>

  <h3 className = "max">min : {city.temp_min}celcius | max : {city.temp_max}celcius</h3>
</div>
<div className = "wave-one"></div>
<div className = "wave-two"></div>
<div className = "wave-three"></div>
      </div>   )}
      
      
     </div>
     </div>
    
     </>
   );
 };

export default Activities;