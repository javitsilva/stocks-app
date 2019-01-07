import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import DropdownMenu from './dropdown-menu';

const Navbar = () => {
  let dropdownMenu = (
    <div className="dropdown-menu">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="/">Stocks</a></li>
        <li><a href="/">Earnings</a></li>
        <li><a href="/">Dividends</a></li>
        <li><a href="/">Key Stats</a></li>
        <li><a href="/">IPO Calendar</a></li>
      </ul>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>            
    </div>
  );

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