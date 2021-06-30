import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <div className = "container-fluid nav_bg">
            <div className = "row">
                 <div className = "col-12 mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink  exact activeClassName ="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName ="menu_active"
          className="nav-link" to="services">    Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="contact">     contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="about">    About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName ="menu_active"
          className="nav-link" to="keep">    Keep</NavLink>
        </li>
        </ul>
        
    </div>
  </div>
</nav>
</div>
</div>
</div>
        </>
    );

};

export default Navbar;