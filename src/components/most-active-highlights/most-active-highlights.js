import React from 'react';
import './most-active-highlights.css';
import PropTypes from 'prop-types';

class MostActiveHighlights extends React.Component {

  static propTypes = {
    mostActiveHighlights: PropTypes.array.isRequired
  }

  render() {
    let highlights = [];
    this.props.mostActiveHighlights.forEach(highlight => {
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