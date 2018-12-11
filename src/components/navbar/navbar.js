import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    // add event listener on search bar hover to indicate clickable
  }

  componentWillUnmount() {
    // unregister event listener for search bar hover
  }

  render() {
    return (
      <div>
        <nav id='wide-nav'>
          <div className="logo">
            <NavLink to="/">$M</NavLink>
          </div>
          <input className="search-bar" type="text" placeholder="Search.."></input>
          <div className="dropdown">
            <div className="dropdown-arrow"></div>          
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
          </div>
        </nav>    
        
        {/* mobile nav     */}
        <nav id='mobile-nav'>
          <div className="logo">
            <NavLink to="/">$M</NavLink>
          </div>
          <h1 style={{float: 'right', color: 'purple'}}>TODO</h1>
        </nav>    
      </div>
    );
  };
}

export default Navbar;