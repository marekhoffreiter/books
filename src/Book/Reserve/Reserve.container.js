import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reserve from './Reserve';

export default class ReserveContainer extends Component {
  handleReserve = () => {
    console.log("I've been clicked");
  }

  render = () => {
    return (
      <Reserve
        handleReserve={this.handleReserve}
      />
    )
  }
}

Reserve.defaultProps = {}
Reserve.propTypes = {}
