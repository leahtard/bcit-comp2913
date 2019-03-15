import React,  { Component } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
  render() {
    const panelStyles = {
      border: '1px solid grey',
      display: 'inline-block'
    };
    return (
      <div style={panelStyles}>
        <h2 style={{ borderBottom: '1px solid grey' }}>
          {this.props.title}
        </h2>
        {this.props.header}
        <div>
          {this.props.description}
          {this.props.children}
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node
};

Panel.defaultProps = {
  description: 'No description given'
};

export default Panel;
