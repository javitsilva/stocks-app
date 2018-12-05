import React from 'react';
import Navbar from './../navbar/navbar.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Today's Highlights</h1>
        <h1>TODO: Biggest Gainers</h1>
        <h1>TODO: Biggest Losers</h1>
        <h1>TODO: Sector Performance</h1>
        <h1>TODO: News Links</h1>
      </div>
    );
  }
}

export default Home;