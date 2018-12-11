import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Home from './../home/home.js';
import About from './../about/about.js';
import Contact from './../contact/contact.js';

class Navigation extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </HashRouter>
    );
  }
  }

  export default Navigation;