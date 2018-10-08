import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowAuthor from './ShowAuthor';

export default class ShowAuthorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      buttonType: false,
    }
  }

  handleShow = () => {
    const { isShown, buttonType } = this.state;
    this.setState({ isShown: !isShown, buttonType: !buttonType })
  }

  render = () => {
    const { isShown, buttonType } = this.state;
    const { author } = this.props;

    return (
      <ShowAuthor
        handleShow={this.handleShow}
        isShown={isShown}
        author={author}
        buttonType={buttonType}
      />
    )
  }
}

ShowAuthorContainer.defaultProps = {}
ShowAuthorContainer.propTypes = {
  author: PropTypes.string.isRequired,
}
