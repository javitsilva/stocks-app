import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class DropdownMenu extends React.Component {

  static propTypes = {
    mobile: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      mobileVisible: false
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    document.getElementById('mobile-nav-menu-toggle').addEventListener('click', this.toggle);
  }

  componentWillUnmount() {
    document.getElementById('mobile-nav-menu-toggle').removeEventListener('click', this.toggle);
  }

  toggle() {
    let visible = false;
    if(this.state.mobileVisible == false)
      visible = true;

    this.setState({
      mobileVisible: visible
    });
  }  

  render() {
    let wideMenu = (
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
    );

    let mobileMenu = (
      <div className='mobile-dropdown'>
        <div id='mobile-nav-menu-toggle' className='navbar-vertical-center'>
          <i className="fa fa-bars" style={{fontSize: '36px'}}></i>  
        </div>  
        <div className={this.state.mobileVisible ? 'dropdown-menu show' : 'dropdown-menu hide'}>
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
    );

    return this.props.mobile ? mobileMenu : wideMenu;
  }
}

export default DropdownMenu;