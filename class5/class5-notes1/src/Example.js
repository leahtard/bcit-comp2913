import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Example(props) {
  return (
    <div>
      {props.label}
      {props.children}
    </div>
  );
}

// No lifecycle events in functional components

Example.propTypes = {
  label: PropTypes.string.isRequired
}

export default Example;