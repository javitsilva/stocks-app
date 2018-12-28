import React from 'react';
import './home.css';
import Navbar from './../navbar/navbar.js';
import _ from 'lodash';
import HomeHighlight from './home-highlight';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      sectorHighlights: [],
      mostActiveHighlights: []
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    fetch('https://api.iextrading.com/1.0/stock/market/sector-performance')
    .then(results => results.json().then(results => {
      let lastUpdated = new Date(0);
      lastUpdated.setMilliseconds(_.maxBy(results, r => r.lastUpdated).lastUpdated);
      this.sectorHighlightsLastUpdatedTimestamp = lastUpdated.toLocaleString();

      this.setState({ sectorHighlights: results });

      return fetch('https://api.iextrading.com/1.0/stock/market/list/mostactive');
    }))
    .then(results => results.json().then(results => {
      let lastUpdated;
      if(results.length === 0) {
        lastUpdated = new Date();
      } else {
        lastUpdated = new Date(0);
        lastUpdated.setMilliseconds(_.maxBy(results, r => r.latestUpdate).latestUpdate);        
      }

      this.mostActiveHighlightsLastUpdatedTimestamp = lastUpdated.toLocaleString();
      this.setState({ mostActiveHighlights: results });

      this.setState({ isLoading: false });
    }))
    .catch(err => console.log(err));    
  }

  render() {
    let loading = (
      <div>
        <Navbar/>
        <div className="content-container">
          <h5>loading...</h5>
        </div>
      </div>);

    let error = (
      <div>
        <Navbar/>
        <div className="content-container">
          <h5>ERROR</h5>
        </div>
      </div>);

    if(this.state.isLoading)
      return loading;

    if(this.state.error)
      return error;

    let today = new Date();

    return (
      <div>
        <Navbar/>
        <div className='content-container'>
          <h1>Today's View<span><p style={{fontSize: '12px', display: 'inline'}}> - {today.toLocaleDateString()}</p></span></h1>
          <hr className="content-seperator"/>
          <h1 className='section-header'>Most Active</h1>
          <h5>Last Updated: {this.mostActiveHighlightsLastUpdatedTimestamp}</h5>
          <HomeHighlight highlightType='mostActiveHighlights' highlights={this.state.mostActiveHighlights}/>
          <hr className="content-seperator"/>
          <h1 className='section-header'>Sector Highlights</h1>
          <h5>Last Updated: {this.sectorHighlightsLastUpdatedTimestamp}</h5>
          <HomeHighlight highlightType='sectorHighlights' highlights={this.state.sectorHighlights}/>
          <hr className="content-seperator"/>
          <h1>More to come!</h1>

          {/* <h1>TODO: Biggest Gainers</h1>
          <h1>TODO: Biggest Losers</h1>
          <h1>TODO: News Links</h1> */}

        </div>
      </div>
    );
  }
}

export default Home;