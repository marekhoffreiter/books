import React from 'react';
import PropTypes from 'prop-types';

const ShowAuthor = (props) => {
  const {
    isShown,
    handleShow,
    author,
  } = props;

  return (
    <div>
      {!isShown
        ? <button type="button" onClick={handleShow} className="button"> Show Author </button>
        : (
          <div>
            <button type="button" onClick={handleShow} className="reservedButton"> Hide Author </button>
            <div className="text">{author}</div>
          </div>
        )}
    </div>
  )
}

export default ShowAuthor;
ShowAuthor.defaultProps = {}
ShowAuthor.propTypes = {
  handleShow: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
}
