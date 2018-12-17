import React from 'react';
import './sector-highlights.css';
import _ from 'lodash';
import PropTypes from 'prop-types';

class SectorHighlights extends React.Component {

  static propTypes = {
    highlights: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      highlights: []
    };
  }

  componentWillMount() {
    let best = _.maxBy(this.props.highlights, r => r.performance);
    let worst = _.minBy(this.props.highlights, r => r.performance);

    let highlights = [];

    this.getBackgroundImageStyleForSector(best.name)
    .then((bestBackgroundImageStyle) => {
      highlights.push(
        <div key='best' id='best.name' className='highlight-container' style={bestBackgroundImageStyle}>
          <h5>{best.name}</h5>
          <p className='highlight-performance-marker highlight-performance-increased'>{best.performance > 0 ? `+${best.performance}` : best.performance}</p>
        </div>);
      return this.getBackgroundImageStyleForSector(worst.name)
    })
    .then((worstBackgroundImageStyle) => {
      highlights.push(
        <div key='worst' id='worst.name' className='highlight-container' style={worstBackgroundImageStyle}>
          <h5>{worst.name}</h5>
          <p className='highlight-performance-marker highlight-performance-decreased'>{worst.performance}</p>
        </div>);

      this.setState({
        highlights: highlights
      });  
    });
  }  

  getBackgroundImageStyleForSector(sector) {
    return new Promise((res, rej) => {
      let sectorStr = sector.replace(' ', '-');
      sectorStr = sectorStr.toLowerCase();
      let path = `/images/sectors/${sectorStr}.jpg`;

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