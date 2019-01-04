import React from 'react';
import './most-active-highlights.css';
import '../../../../common.css';
import PropTypes from 'prop-types';
import DivLink from '../../../common/div-link/div-link';

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
      let content = (
        <div>
          <div className='most-active-highlights-column-header'>
            <h5>{highlight.symbol}</h5>
            <p>{highlight.companyName}</p>
          </div>
          <div className='most-active-highlights-column-footer center-div'>
            <h5>{highlight.latestPrice}</h5>
            <p style={highlight.changePercent < 0 ? {color: 'red'} : {color: 'green'}}>
              {highlight.changePercent < 0 ? '' : '+'}{highlight.changePercent}
            </p>
          </div>
        </div>
      );

      highlights.push(
        <div className='most-active-highlights-column' key={highlight.symbol}>
          <DivLink content={content} href='/about'/>
        </div>
      );
    });

    return(
      <div className='most-active-highlights-container'>
        <div className='most-active-highlights-table'>
          <div className='most-active-highlights-row'>
            {highlights}
          </div>
        </div>      
      </div>
    );
  }
}

export default MostActiveHighlights;