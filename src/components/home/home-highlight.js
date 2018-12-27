import React from 'react';
import PropTypes from 'prop-types';
import SectorHighlights from './highlights/sector-highlights/sector-highlights.js';
import MostActiveHighlights from './highlights/most-active-highlights/most-active-highlights.js';

class HomeHighlight extends React.Component {
  static propTypes = {
    highlightType: PropTypes.string.isRequired,
    highlights: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.highlightTypes = {
      sectorHighlights: SectorHighlights,
      mostActiveHighlights: MostActiveHighlights
    };
  }

  render() {
    const {highlightType, highlights} = this.props;
    let HighlightWrapper = this.highlightTypes[highlightType];
    return (
      <div className='home-highlight-container'>
        <HighlightWrapper highlights={highlights}/>
      </div>
    );
  }
}

export default HomeHighlight;