import React from 'react';
import PropTypes from 'prop-types';

const ShowAuthor = (props) => {
  const {
    isShown,
    handleShow,
    author,
  } = props;

  const bttnText = !isShown ? 'Show Author' : 'Hide Author'
  const bttnClass = !isShown ? 'button' : 'reservedButton'

  return (
    <div>
      <button type="button" onClick={handleShow} className={bttnClass}>
        { bttnText }
      </button>
      {isShown
      && (
        <div className="text">
          {author}
        </div>
      )
      }
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
