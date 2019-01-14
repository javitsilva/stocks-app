import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './dropdown-menu';

const Navbar = () => {
  return (
    <div>
      <nav id='wide-nav'>
        <div className="logo">
          <NavLink to="/">$M</NavLink>
        </div>
        <input className="search-bar" type="text" placeholder="Search.."></input>
        <DropdownMenu mobile={false}/>
      </nav>    
      
      {/* mobile nav     */}
      <nav id='mobile-nav'>
        <div className="logo">
          <NavLink to="/">$M</NavLink>
        </div>
        <DropdownMenu mobile={true} />
      </nav>  

      <div className='navbar-fixed-reserved-block'></div>  
    </div>
  );  
}

export default Navbar;