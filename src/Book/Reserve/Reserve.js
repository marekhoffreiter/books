import React from 'react';
import PropTypes from 'prop-types';

const Reserve = (props) => {
  const {
    isReserved,
    handleReserve,
  } = props;

  return (
    <div>
      {!isReserved
        ? <button type="button" onClick={handleReserve} className="button"> Not Reserved </button>
        : (
          <button type="button" onClick={handleReserve} className="reservedButton">Reserved</button>
        )}
    </div>
  )
}

export default Reserve;

Reserve.defaultProps = {}
Reserve.propTypes = {
  isReserved: PropTypes.bool.isRequired,
  handleReserve: PropTypes.func.isRequired,
}
