import React, { Component } from 'react';
import Reserve from './Reserve';

export default class ReserveContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReserved: false,
    }
  }

  handleReserve = () => {
    const { isReserved } = this.state;
    this.setState({ isReserved: !isReserved })
  }

  render = () => {
    const { isReserved } = this.state;

    return (
      <Reserve
        handleReserve={this.handleReserve}
        isReserved={isReserved}
      />
    )
  }
}
