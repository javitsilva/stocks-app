import React from 'react';
import './most-active-highlights.css';
import PropTypes from 'prop-types';

class MostActiveHighlights extends React.Component {

  static propTypes = {
    highlights: PropTypes.array.isRequired
  }

  render() {
    if(this.props.highlights.length === 0) {
      return (
        <div className='most-active-highlights-container'>
          <h5>Market is currently closed</h5>
        </div>        
      );
    }

    let highlights = [];
    this.props.highlights.forEach(highlight => {
      highlights.push(
        <div className='most-active-highlight' key={highlight.symbol}>
          {highlight.symbol}
        </div>
      );
    });

    return(
      <div className='most-active-highlights-container'>
        {highlights}
      </div>
    );
  }
}

export default MostActiveHighlights;