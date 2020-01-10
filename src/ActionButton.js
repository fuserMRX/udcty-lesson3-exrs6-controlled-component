import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
    return (
        <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
            Delete Last Item
        </button>
    )
}

ActionButton.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired
}

export default ActionButton;