import React from 'react';
import PropTypes from 'prop-types';
import baseUrl from './BaseUrl';
import './Book.css';
import Reserve from './Reserve'

const Book = (props) => {
  const {
    title,
    author,
    imageLink,
    year,
    link,
    isReserved,
  } = props;

  makeReservation() {
    const { isReserved } = this.state;
    this.setState({ isReserved: !isReserved })
  };

  return (
    <li key={`${title}${author}`} className="book">
      <a href={link} target="_blank">
        <img alt={title} src={`${baseUrl}${imageLink}`} />
      </a>
      <span className="text">
        Author:
        {author}
        | Title:
        {title}
        | Year:
        {year}
      </span>
      <Reserve onClick={this.makeReservation}
        isReserved={isReserved}
      />
    </li>
  )
};

export default Book;

Book.defaultProps = {}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,  
  isReserved: PropTypes.bool.isRequired,

}
