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
    link,
  } = props;

  return (
    <li key={`${title}${author}`} className="book">
      <a href={link}>
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
}
