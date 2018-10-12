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

  componentDidMount = () => {
    this.isBookReserved()
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
    const book = {
      author,
      title,
      imageLink,
      year,
      link,
    }
    let reservedBooks = JSON.parse(localStorage.getItem('reservedBooks'));
    if (!reservedBooks) reservedBooks = [];
    if (!isReserved) {
      reservedBooks.push(book);
      localStorage.reservedBooks = JSON.stringify(reservedBooks);
    } else {
      reservedBooks.map((booksanto, i) => {
        return title === booksanto.title && author === booksanto.author && reservedBooks.splice(i, 1);
      })
    }
    this.setState({ isReserved: !isReserved })
  }

  isBookReserved = () => {
    const {
      author,
      title,
    } = this.props;
    const reservedBooks = JSON.parse(localStorage.getItem('reservedBooks'));
    if (reservedBooks) {
      const isReserved = reservedBooks.some((book) => {
        return title === book.title && author === book.author && true
      })
      this.setState({ isReserved })
    }
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
