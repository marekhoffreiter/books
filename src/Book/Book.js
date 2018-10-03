import React from 'react';
import PropTypes from 'prop-types';
import baseUrl from './BaseUrl';
import './Book.css';

const Book = (props) => {
  const {
    title,
    author,
    imageLink,
    year,
  } = props;
  return (
    <li key={`${title}${author}`} className="book">
      <img alt={title} src={`${baseUrl}${imageLink}`} />
      <span className="text">
        Author:
        {author}
        | Title:
        {title}
        | Year:
        {year}
      </span>
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
}
