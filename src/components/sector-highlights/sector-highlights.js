import React from 'react';
import './sector-highlights.css';
import _ from 'lodash';
import PropTypes from 'prop-types';

class SectorHighlights extends React.Component {

  static propTypes = {
    getSectorsInfo: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      highlights: []
    };
  }

  componentWillMount() {
    fetch('https://api.iextrading.com/1.0/stock/market/sector-performance')
    .then(results => {
      return results.json();
    })
    .then(results => {
      console.log('results: ' + JSON.stringify(results));
      let best = _.maxBy(results, r => r.performance);
      let worst = _.minBy(results, r => r.performance);

      let highlights = [];

      this.getBackgroundImageStyleForSector(best.name.toLowerCase())
      .then((bestBackgroundImageStyle) => {
        highlights.push(
          <div key='best' id='best.name' className='highlight-container' style={bestBackgroundImageStyle}>
            <h5>{best.name}</h5>
            <p className='highlight-performance-marker highlight-performance-increased'>{best.performance > 0 ? `+${best.performance}` : best.performance}</p>
          </div>);
        return this.getBackgroundImageStyleForSector(worst.name.toLowerCase())
      })
      .then((worstBackgroundImageStyle) => {
        highlights.push(
          <div key='worst' id='worst.name' className='highlight-container' style={worstBackgroundImageStyle}>
            <h5>{worst.name}</h5>
            <p className='highlight-performance-marker highlight-performance-decreased'>{worst.performance}</p>
          </div>);

        let lastUpdated = new Date(0);
        lastUpdated.setMilliseconds(_.maxBy(results, r => r.lastUpdated).lastUpdated);

        this.setState({
          highlights: highlights
        });  

        this.props.getSectorsInfo({lastUpdatedTimestamp: lastUpdated.toLocaleString()});
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }

  getBackgroundImageStyleForSector(sector) {
    return new Promise((res, rej) => {
      let path = `/images/sectors/${sector}.jpg`;

      let img = new Image();
      img.src = path;
      img.onload = () => { res({backgroundImage: `url(${path})`})};
      img.onerror = () => { res({backgroundImage: `url(${path.replace('.jpg', '.jpeg')})`}) }; 
    });
  }

  render() {
    return (
      <div className='sector-highlights'>
        {this.state.highlights}
      </div>
    );
  }
}

export default SectorHighlights;