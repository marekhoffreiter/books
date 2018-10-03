import React from 'react';
import PropTypes from 'prop-types';
import baseUrl from './BaseUrl';
import Reserve from './Reserve/Reserve.container';

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
      <Reserve />
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
