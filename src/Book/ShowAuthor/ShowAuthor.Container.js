import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowAuthor from './ShowAuthor';

export default class ShowAuthorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    }
  }

  handleShow = () => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown })
  }

  render = () => {
    const {
      isShown,
      author,
    } = this.props;

    return (
      <ShowAuthor
        handleShow={this.handleShow}
        isShown={isShown}
        author={author}
      />
    )
  }
}

ShowAuthorContainer.defaultProps = {}
ShowAuthorContainer.propTypes = {
  author: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
}
