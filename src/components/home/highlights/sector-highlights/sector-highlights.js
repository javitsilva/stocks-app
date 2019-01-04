import React from 'react';
import './sector-highlights.css';
import _ from 'lodash';
import PropTypes from 'prop-types';
import DivLink from '../../../common/div-link/div-link';

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

    let bestBackgroundImageStyle = this.getBackgroundImageStyleForSector(best.name);
    let bestContent = (
      <div className='highlight-container' style={bestBackgroundImageStyle}>
        <h5>{best.name}</h5>
        <p className='highlight-performance-marker highlight-performance-increased'>{best.performance > 0 ? `+${best.performance}` : best.performance}</p>
      </div>        
    );
    highlights.push(
      <DivLink key='best' content={bestContent} href='/about'/>
    );

    let worstBackgroundImageStyle = this.getBackgroundImageStyleForSector(worst.name);
    let worstContent = (
      <div className='highlight-container' style={worstBackgroundImageStyle}>
        <h5>{worst.name}</h5>
        <p className='highlight-performance-marker highlight-performance-decreased'>{worst.performance}</p>
      </div>
    );
    highlights.push(
      <DivLink key='worst' content={worstContent} href='/about'/>
    );

    this.setState({
      highlights: highlights
    });  

  }

  getBackgroundImageStyleForSector(sector) {
    let sectorStr = sector.replace(' ', '-');
    sectorStr = sectorStr.toLowerCase();

    let sectorImage = this.importSectorImage(sectorStr, require.context('../../../../../public/images/sectors/', false, /\.(jpe?g)$/));
    return {backgroundImage: `url(${sectorImage})`};
  }

  importSectorImage(imageName, context) {
    let images = context.keys()
      .filter((item, index) => item.includes(imageName))
      .map((item, index) => context(item));
    return images[0];
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