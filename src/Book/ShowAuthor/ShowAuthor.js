import React from 'react';
import PropTypes from 'prop-types';

const ShowAuthor = (props) => {
  const {
    isShown,
    handleShow,
    author,
    buttonType,
  } = props;

  const bttnText = !buttonType ? 'Show Author' : 'Hide Author'
  const bttnClass = !buttonType ? 'button' : 'reservedButton'

  return (
    <div>
      {!isShown
        ? (
          <button type="button" onClick={handleShow} className={bttnClass}>
            { bttnText }
          </button>
        )
        : (
          <div>
            <button type="button" onClick={handleShow} className={bttnClass}>
              { bttnText }
            </button>
            <div className="text">{author}</div>
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
  buttonType: PropTypes.bool.isRequired,
}
