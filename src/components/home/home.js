import React from 'react';
import Navbar from './../navbar/navbar.js';
import SectorHighlights from '../sector-highlights/sector-highlights.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdatedTimestamp: ''
    }
  }

  getSectorsInfo(sectorsInfo) {
    this.setState({
      lastUpdatedTimestamp: sectorsInfo.lastUpdatedTimestamp
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="content-container">
          <h1>Today's Highlights</h1>
          <hr className="content-seperator"/>
          <h1>Sector Highlights</h1>
          <h5>Last Updated: {this.state.lastUpdatedTimestamp}</h5>
          <SectorHighlights getSectorsInfo={this.getSectorsInfo.bind(this)}/>
          {/* <h1>TODO: Biggest Gainers</h1>
          <h1>TODO: Biggest Losers</h1>
          <h1>TODO: News Links</h1> */}
        </div>
      </div>
    );
  }
}

export default Home;