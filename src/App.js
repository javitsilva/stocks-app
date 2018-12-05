import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.js';
import Content from './components/content/content.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navigation/>
      </div>
    );
  }
}

export default App;
