import React, { Component } from 'react';
import ShowAuthor from './ShowAuthor';

export default class ShowAuthorContainer extends Component {
  constructor(props) {
    super(props);
    const {
      author,
    } = props
    this.state = {
      isShown: false,
    }
  }

  handleShow = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown })
  }

  render = () => {
    const { isShown } = this.state;

    return (
      <ShowAuthor
        handleShow={this.handleShow}
        isShown={isShown}
        author={this.props.author}
      />
    )
  }
}