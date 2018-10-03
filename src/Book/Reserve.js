import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Reserve = (props) => {
  const {
    isReserved,
  } = props;

  return (
    <div>
      {!isReserved
        ? <button type="button" className="button"> Not Reserved </button>
        : (
          <button type="button" className="reservedButton">Reserved</button>

        )}
    </div>
  )
}

export default Reserve;

Reserve.defaultProps = {}
Reserve.propTypes = {
  isReserved: PropTypes.bool.isRequired,
}
