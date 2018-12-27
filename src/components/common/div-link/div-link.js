import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class DivLink extends React.Component {

  static propTypes = {
    content: PropTypes.element.isRequired,
    href: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
        textDecoration: 'none',
        outline: 'none',
        color: 'inherit'
    };

    return (
      <NavLink to={this.props.href} style={style}>{this.props.content}</NavLink>
    );
  }
}

export default DivLink;