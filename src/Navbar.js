import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink  exact activeClassName ="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName ="menu_active"
          className="nav-link" to="Education">    Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="Skills">    Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="Experience">  Experience</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="Activities">    Activities</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="Interests">    Interests</NavLink>
        </li>
        </ul>
        
    </div>
  </div>
</nav>



        </>
    );

};

export default Navbar;