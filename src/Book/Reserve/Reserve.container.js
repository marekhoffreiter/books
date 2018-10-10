import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const {
      author,
      title,
      imageLink,
      year,
      link,
    } = this.props;
    let book = {
      author,
      title,
      imageLink,
      year,
      link,
    }
    book = Object.values(book)
    this.setState({ isReserved: !isReserved })
    let isreserved = JSON.parse(localStorage.reservedBooks);
    if (!isreserved) isreserved = [];
    localStorage.setItem('isreserved', JSON.stringify(book));
    isreserved.push(book);
    localStorage.reservedBooks = JSON.stringify(isreserved);
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

ReserveContainer.defaultProps = {}
ReserveContainer.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
}
