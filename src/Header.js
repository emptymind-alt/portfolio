import React from 'react';
import logo from "./images/logo.jpg";

const Header = ()=> {
    return (
        <>
         <div className = "header">
        
             <img src = {logo}  alt = 'logo' width ='50' height = '50'/>
             
             </div>

        </>
    );
};
export default Header;
