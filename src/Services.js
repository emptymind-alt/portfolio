import React from 'react';
import Card from "./Card";
import Data from './Data';

 const Services = ()=> {
   return (
     <>
     <div className = "my-5">
       <h1 className = "text-center"> My Education</h1>
       <div className = "container-fluid mb-5">
            <div className = "row">
                 <div className = "col-10 mx-auto">
                    <div className = "row gy-4">
                      {
                       Data.map((val,ind)=>{
                        return <Card key ={ind}
                                 imgsrc={val.imgsrc}
                                 title ={val.title}
                                 link = {val.link}/>
                      })}
                      </div>
                        
                        </div>
                 </div>
     </div>
     </div>
     </>
   );
 };

export default Services;